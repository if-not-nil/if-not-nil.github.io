import { EditorView, basicSetup } from 'codemirror'
import { EditorState, Compartment } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { indentUnit } from '@codemirror/language'
import { indentWithTab } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark'
import { vim } from '@replit/codemirror-vim'
import { revoLang } from './cm-shared.js'
import { Revo } from './revo.js'

const els = document.querySelectorAll('.repl')
if (els.length) {
	let revo = null
	let outputParts = []

	const editors = []
	const vimCompartment = new Compartment()
	const VIM_STORAGE_KEY = 'revo:vim-enabled'
	let vimEnabled = localStorage.getItem(VIM_STORAGE_KEY) === 'true'

	async function ensureRevo() {
		if (revo) return
		revo = await Revo.create({
			wasmUrl: '/engine/revo.wasm',
			stdout(s) { outputParts.push(s) },
			stderr(s) { outputParts.push(s) },
		})
	}

	function toggleVim(enabled) {
		vimEnabled = enabled
		for (const ed of editors) {
			ed.dispatch({
				effects: vimCompartment.reconfigure(enabled ? vim({ status: true }) : []),
			})
		}
		const btn = document.getElementById('vim-toggle')
		if (btn) {
			btn.classList.toggle('active-toggle', enabled)
			btn.setAttribute('aria-pressed', String(enabled))
		}
		localStorage.setItem(VIM_STORAGE_KEY, String(enabled))
	}

	const vimBtn = document.getElementById('vim-toggle')
	if (vimBtn) {
		vimBtn.classList.toggle('active-toggle', vimEnabled)
		vimBtn.setAttribute('aria-pressed', String(vimEnabled))
		vimBtn.addEventListener('click', () => toggleVim(!vimEnabled))
	}

	const replTheme = EditorView.theme({
		'&': { height: 'auto', fontSize: '13px' },
		'.cm-content': { fontFamily: "'Maple Mono NL NF', 'JetBrains Mono', 'Fira Code', monospace" },
	})

	function extensions() {
		return [
			vimCompartment.of(vimEnabled ? vim({ status: true }) : []),
			basicSetup,
			oneDark,
			revoLang,
			keymap.of([indentWithTab]),
			indentUnit.of('  '),
			replTheme,
		]
	}

	function extractCode(src) {
		const lines = src.textContent.split('\n')
		const firstContent = lines.find(l => l.trim().length > 0)
		const indent = firstContent ? firstContent.match(/^[ \t]*/)[0] : ''
		return lines.map(l => l.startsWith(indent) ? l.slice(indent.length) : l).join('\n').trim()
	}

	function mount(el) {
		if (el._mounted) return
		el._mounted = true

		const container = el.querySelector('.repl-editor')
		container.querySelector('.repl-placeholder')?.remove()

		const editor = new EditorView({
			state: EditorState.create({ doc: el._code, extensions: extensions() }),
			parent: container,
		})
		editors.push(editor)

		wireRun(el._btn, editor, el._out)
		el._btn.hidden = false
	}

	function wireRun(btn, editor, out) {
		btn.addEventListener('click', async () => {
			btn.disabled = true
			btn.textContent = '…'
			out.hidden = false
			out.textContent = ''

			try {
				await ensureRevo()
				outputParts = []
				revo.reset()
				const r = revo.eval(editor.state.doc.toString())
				const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
				const val = r.ok ? (r.value || '(nil)') : ('error: ' + (r.value || 'unknown'))
				let html = esc(val)
				if (outputParts.length) html += '\n<span class="repl-stdio">' + esc(outputParts.join('')) + '</span>'
				out.innerHTML = html
				out.className = 'repl-output ' + (r.ok ? 'repl-ok' : 'repl-err')
			} catch (e) {
				out.textContent = 'error: ' + (e.message || String(e))
				out.className = 'repl-output repl-err'
			} finally {
				btn.disabled = false
				btn.textContent = 'run'
			}
		})
	}

	const io = new IntersectionObserver(entries => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue
			io.unobserve(entry.target)
			mount(entry.target)
		}
	}, { rootMargin: '800px 0px' })

	for (const el of els) {
		const src = el.querySelector('.repl-source')
		const container = el.querySelector('.repl-editor')
		const btn = el.querySelector('.repl-run')
		const out = el.querySelector('.repl-output')
		if (!src || !container || !btn || !out) continue

		const code = extractCode(src)
		src.remove()

		el._code = code
		el._btn = btn
		el._out = out

		const placeholder = document.createElement('pre')
		placeholder.className = 'repl-placeholder'
		placeholder.setAttribute('aria-hidden', 'true')
		placeholder.textContent = code
		container.appendChild(placeholder)

		io.observe(el)
	}
}
