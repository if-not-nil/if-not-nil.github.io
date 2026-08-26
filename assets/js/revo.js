/**
 * @fileoverview the revo language runtime
 *
 * each {@link Revo} object wraps an independent wasm instance with its
 * own linear memory and VM state
 *
 * @example
 * ```js
 * import { Revo } from './lib/revo.js'
 *
 * const revo = await Revo.create({ wasmUrl: '/revo.wasm' })
 * const r = revo.eval('print("hello")')
 * console.log(r.ok, r.value)
 * revo.destroy()
 * ```
 *
 * @example
 * ```js
 * // nodejs: preload the wasm binary
 * import { readFileSync } from 'fs'
 * import { Revo } from './lib/revo.js'
 *
 * const buf = readFileSync('./revo.wasm')
 * const revo = await Revo.fromBuffer(buf)
 * console.log(revo.eval('1 + 2').value)
 * revo.destroy()
 * ```
 * @module revo
 */

const OUT_SIZE = 65536

/**
 * compiled module cache, keyed by url
 * @type {Map<string, WebAssembly.Module>}
 */
const moduleCache = new Map()

/**
 * wasm runtime error (allocation, init failure, etc.)
 */
export class RevoError extends Error {
	/** @param {string} msg */
	constructor(msg) {
		super(msg)
		this.name = 'RevoError'
	}
}

/**
 * @typedef {Object} RevoOptions
 * @property {string} [wasmUrl='./revo.wasm'] - url to the wasm binary.
 *   in the browser resolves relative to the page, not the module.
 * @property {(text: string) => void} [stdout] - stdout callback (print etc.)
 * @property {(text: string) => void} [stderr] - stderr callback
 * @property {number} [outSize=65536] - max bytes for the eval result
 */

/**
 * @typedef {Object} EvalResult
 * @property {boolean} ok    - true = success, false = compile/runtime error
 * @property {string}  value - formatted result or error text
 */

/**
 * a revo vm in its own wasm instance
 *
 * use {@link Revo.create} or {@link Revo.fromBuffer} -- don't call the constructor
 */
export class Revo {
	/**
	 * fetch and compile wasm from a url, then instantiate
	 *
	 * compiled modules are cached by url; only instantiation is per-instance
	 *
	 * @param {RevoOptions} [opts]
	 * @returns {Promise<Revo>}
	 */
	static async create(opts = {}) {
		const wasmUrl = opts.wasmUrl || './revo.wasm'
		const revo = new Revo(opts)
		let mod = moduleCache.get(wasmUrl)
		if (!mod) {
			const bytes = await Revo._fetchWasm(wasmUrl)
			mod = await WebAssembly.compile(bytes)
			moduleCache.set(wasmUrl, mod)
		}
		await revo._instantiate(mod)
		return revo
	}

	/**
	 * compile and instantiate from a preloaded buffer
	 *
	 * @param {ArrayBuffer | Uint8Array} buffer - raw wasm bytes
	 * @param {RevoOptions} [opts]
	 * @returns {Promise<Revo>}
	 */
	static async fromBuffer(buffer, opts = {}) {
		const mod = await WebAssembly.compile(buffer)
		const revo = new Revo(opts)
		await revo._instantiate(mod)
		return revo
	}

	/**
	 * fetch a wasm binary from a url
	 *
	 * @private
	 * @param {string} url
	 * @returns {Promise<ArrayBuffer>}
	 */
	static async _fetchWasm(url) {
		const resp = await fetch(url)
		if (!resp.ok) throw new RevoError(`fetch failed: ${resp.status} ${resp.statusText}`)
		return await resp.arrayBuffer()
	}

	/**
	 * do not call directly!!! use the static factories
	 * @private
	 * @param {RevoOptions} opts
	 */
	constructor(opts = {}) {
    /** @private */ this._instance = null
    /** @private */ this._exports = null
    /** @private */ this._memory = null
    /** @private */ this._outSize = opts.outSize || OUT_SIZE
    /** @private */ this._stdout = opts.stdout || (() => { })
    /** @private */ this._stderr = opts.stderr || (() => { })
	}

	/**
	 * create import object and finish instantiation
	 *
	 * the wasm binary (zig) requires a set of wasi_snapshot_preview1
	 * functions even if it never calls most of them; we introspect
	 * WebAssembly.Module.imports so any import list works
	 *
	 * closures capture `wasmMemory` which is set right after
	 * instantiation (imports are resolved before we have the
	 * instance's memory export)
	 *
	 * @private
	 * @param {WebAssembly.Module} mod
	 */
	async _instantiate(mod) {
		let wasmMemory = null
		const self = this

		const decode = (ptr, len) =>
			new TextDecoder().decode(new Uint8Array(wasmMemory.buffer, Number(ptr), Number(len)))

		const ENOTSUP = 52
		const wasi = {
			fd_write(fd, iovsPtr, iovsLen, nWrittenPtr) {
				let total = 0n
				const view = new DataView(wasmMemory.buffer)
				for (let k = 0n; k < iovsLen; k++) {
					const base = Number(iovsPtr + k * 16n)
					const ptr = view.getBigUint64(base, true)
					const len = view.getBigUint64(base + 8n, true)
					total += len
					const text = decode(ptr, Number(len))
					if (fd === 2) self._stderr(text)
					else self._stdout(text)
				}
				view.setBigUint64(Number(nWrittenPtr), total, true)
				return 0
			},
			random_get(bufPtr, bufLen) {
				new Uint8Array(wasmMemory.buffer, Number(bufPtr), Number(bufLen)).set(crypto.getRandomValues(new Uint8Array(Number(bufLen))))
				return 0
			},
			clock_time_get(clockId, precision, timePtr) {
				new DataView(wasmMemory.buffer).setBigUint64(
					Number(timePtr),
					BigInt(Date.now()) * 1000000n,
					true,
				)
				return 0
			},
			clock_res_get(clockId, resPtr) {
				new DataView(wasmMemory.buffer).setBigUint64(Number(resPtr), 1000000n, true)
				return 0
			},
			environ_sizes_get(countPtr, bufSizePtr) {
				const view = new DataView(wasmMemory.buffer)
				view.setBigUint64(Number(countPtr), 0n, true)
				view.setBigUint64(Number(bufSizePtr), 0n, true)
				return 0
			},
			environ_get(environPtr, bufPtr) {
				return 0
			},
			proc_exit(code) {
				throw new RevoError(`proc_exit(${code})`)
			},
		}

		const imports = { env: {
			js_write_stdout: (ptr, len) => self._stdout(decode(ptr, len)),
			js_write_stderr: (ptr, len) => self._stderr(decode(ptr, len)),
		} }
		for (const imp of WebAssembly.Module.imports(mod)) {
			if (imp.module === 'env') continue
			imports[imp.module] ??= {}
			imports[imp.module][imp.name] ??= wasi[imp.name] || (() => ENOTSUP)
		}

		const instance = await WebAssembly.instantiate(mod, imports)
		wasmMemory = instance.exports.memory
		this._memory = wasmMemory
		this._instance = instance
		this._exports = instance.exports
		if (!this._exports.revo_wasm_init()) throw new RevoError('revo_wasm_init returned false')
	}

	/**
	 * evaluate revo source and return the formatted result
	 *
	 * @param {string} code - revo source (one or more expressions)
	 * @returns {EvalResult}
	 * @throws {RevoError} on internal failure (oom, destroyed instance)
	 */
	eval(code) {
		if (!this._exports) throw new RevoError('revo instance is gone')
		if (code.length === 0) return { ok: true, value: '' }

		const e = this._exports
		const mem = this._memory
		const src8 = new TextEncoder().encode(code)

		const sp = e.revo_wasm_alloc(BigInt(src8.length))
		if (sp === 0n) throw new RevoError('source alloc failed')
		try {
			new Uint8Array(mem.buffer).set(src8, Number(sp))

			const outCap = this._outSize
			const op = e.revo_wasm_alloc(BigInt(outCap))
			if (op === 0n) throw new RevoError('output alloc failed')
			try {
				const n = Number(e.revo_wasm_eval(sp, BigInt(src8.length), op, BigInt(outCap)))
				const ok = e.revo_wasm_ok()
				let value = ''
				if (n > 0) value = new TextDecoder().decode(new Uint8Array(mem.buffer, Number(op), Math.min(n, outCap)))
				return { ok, value }
			} finally {
				e.revo_wasm_free(op, BigInt(outCap))
			}
		} finally {
			e.revo_wasm_free(sp, BigInt(src8.length))
		}
	}

	/**
	 * re-init the vm (clears globals, reregisters stdlib)
	 *
	 * calls revo_wasm_deinit + revo_wasm_init on the same instance
	 *
	 * @throws {RevoError} on reinit failure
	 */
	reset() {
		if (!this._exports) throw new RevoError('revo instance is gone')
		this._exports.revo_wasm_deinit()
		if (!this._exports.revo_wasm_init()) throw new RevoError('revo_wasm_init returned false')
	}

	/**
	 * raw wasm exports (alloc, free, ok, etc.)
	 * @returns {WebAssembly.Exports | null}
	 */
	get raw() { return this._exports }

	/**
	 * tear down the wasm instance
	 */
	destroy() {
		if (this._exports) {
			try { this._exports.revo_wasm_deinit() } catch { /* ignore trap */ }
		}
		this._exports = null
		this._instance = null
		this._memory = null
	}
}

/**
 * makes vm, runs code, destroys vm
 *
 * @param {string} code - revo source
 * @param {RevoOptions & { wasmBuffer?: ArrayBuffer | Uint8Array }} [opts]
 *   opts are passed to {@link Revo.create}, or if `wasmBuffer` is set
 *   uses {@link Revo.fromBuffer} instead
 * @returns {Promise<EvalResult>}
 */
export async function run(code, opts = {}) {
	const { wasmBuffer, ...rest } = opts
	const revo = wasmBuffer
		? await Revo.fromBuffer(wasmBuffer, rest)
		: await Revo.create(opts)
	try {
		return revo.eval(code)
	} finally {
		revo.destroy()
	}
}
