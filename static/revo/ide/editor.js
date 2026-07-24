import { EditorView, basicSetup } from 'codemirror'
import { EditorState, Compartment, Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { indentUnit } from '@codemirror/language'
import { indentWithTab } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark'
import { vim } from '@replit/codemirror-vim'
import { Revo } from '../../revo.js'
import { revoLang } from '../cm-shared.js'

const SAMPLE = `
##
welcome to revo
press ctrl+enter or cmd+enter to run
code is saved in the URL
this runs entirely locally
##

fn fib(n) do
  if n < 2 return n
  return fib(n - 1) + fib(n - 2)
end

print("fib(10) = " ~ fib(10))

# try some pipes
"hello, world"
  |> _:upper()
  |> inspect # prints a value and returns it back
  |> _:sub(1, 5) # takes characters at indices 1-4
  
# and pattern matching
const msg = match 5
  | 1 => "one"
  | 2 => "two"
  | v when v > 3 => "big"
  | (:something, v) => v
  | _ => "other"

print(msg)

# this is optionally typed. code with types is generally faster and safer
let foo: string = "hi"
fn process(a: int, b: int) -> string
  string(a + b)

# and generics
fn twice[T](what: T) -> T
  return what * 2
  
twice(2)
  # assert_eq will check whether a is b, then return it
  |> assert_eq(4)
  |> twice()
  |> assert_eq(8)

# return is implicit. every function has to return something
fn other_fib(n) do
  if n < 2 n
  else fib(n - 1) + fib(n - 2)
end

# a do-end block is only used to group expressions. it's never required
fn concat_two(a, b)
  return a ~ b

# optional parameters are specified like this
fn separate(?by, ?count) do
  (by or '-') * (count or 5)
    |> print
end

# you can also set parameters by name
separate(by = '*', count = 6)

# an atom is a constant whose name is its value
# something between an immutable string and a number
:ok

# tables are both maps and arrays
const my_table = {
  # -- array part --
  "first element", :b, "c", {"d", "e"},
  
  # -- map part --
  # keys are atoms
  key = "value",
  # but they can be anything else
  ("computed " ~ "key") = do
    # remember, do-end isn't limited to functions
    "some " ~ "value"
  end,

}

@doc"""
~ you can also document functions
run \`revo --docs filename.rv\` for a nice overview of its documentation

we're gonna have doctests at some point

> documented("a")
>> "ac"

adds a 'c' at the end of whatever you give it
"""
fn documented(x)
  x ~ "c"

# print! is a default AST macro
macro print! \`(%fmt:str %ARGS(, %arg:expr)*)\` \`(print(fmt(%fmt %ARGS(, %arg))))\`
print!("value: %v", my_table) # => print(fmt("%v", my_table))
print!("debug: %?", my_table) # => print(fmt("%?", my_table))

## ... and \`what!\` is a proc macro

~ possibly the most advanced and one of the coolest features of the language
~ you don't need them most the time

those are functions that
take code in,
give you a tree to manipulate,
and let you return another tree of code

they are the first thing to run ##

proc what!(m) do
  print!("--- macros here")
  print!("the macro object: %?\n", m)
  # it has everything you need to work a tree into anoter tree
  
  return {}
end

what!("hello" ~ "world")

proc add_two!(m) do
  # m:next() gives you the next node
  # m:next() == (:number, 1)
  const fst = m:next()
  const snd = m:next()
  
  # next_of(:some_kind) asserts the next node's kind is :some_kind
  # quasiquotes (syntax inside \`backticks\`) turn code into tree tuples
  print!("quasiquoting! %?", \`%fst + %snd\`)
  return \`%fst + %snd\`
end

add_two!(1, 2)
print!("quasiquotes aren't exclusive to macros: %?", \`:hi\`)

# comp can execute any code at compile-time
# it runs after proc macros but before code
comp do
  print("--- comp here")
end
`.trim()

const STRUCTS_EXAMPLE = `struct Counter {
	count: number = 0,
    name: string,

	fn inc(self) do
		self.count += 1
	end,
    
	fn val(self) do
		return self.count
	end
}

let foo = Counter{name = "first"}
let bar = Counter{name = "second"}

# foo:bar() == foo.bar(foo)
foo:inc()
foo:inc()
foo:inc()
print("foo:", foo:val())

bar:inc()
bar:inc()

print("bar:", bar:val())`

const CONCURRENCY_EXAMPLE = `fn worker(id) do
  #! sleep doesn't work in wasm yet
  # sleep(0.1)
  print("worker " ~ id ~ " done")
end

let handles = {}
for i in 0..4
  handles:push(spawn(worker(i)))

for h in handles
  join(h)

print("all workers finished")`

const EXAMPLES = [
	{ id: 'welcome', label: 'welcome', code: SAMPLE },
	{ id: 'structs', label: 'structs & loops', code: STRUCTS_EXAMPLE },
	{ id: 'concurrency', label: 'concurrency', code: CONCURRENCY_EXAMPLE },
]

const VIM_STORAGE_KEY = 'revo:vim-enabled'

const wasmUrl = new URL('../../revo.wasm', import.meta.url).href
let wasmBuffer = null
let revo = null

const resultBox = document.getElementById('result-box')
const ioBox = document.getElementById('io-box')

function setResult(text, ok) {
	resultBox.textContent = text
	resultBox.className = 'result-box pane-box ' + (ok ? 'ok' : 'err')
}

function appendIO(text) {
	ioBox.textContent += text
	ioBox.scrollTop = ioBox.scrollHeight
}

async function loadWasm() {
	if (wasmBuffer) return
	const resp = await fetch(wasmUrl)
	if (!resp.ok) throw new Error('failed to fetch revo.wasm')
	wasmBuffer = await resp.arrayBuffer()
}

function clearOutput() {
	resultBox.textContent = ''
	resultBox.className = 'result-box pane-box'
	ioBox.textContent = ''
}

async function ensureRevo() {
	if (revo) return
	await loadWasm()
	revo = await Revo.fromBuffer(wasmBuffer, {
		stdout(text) { appendIO(text) },
		stderr(text) { appendIO('stderr: ' + text) },
	})
}

async function doRun(code) {
	clearOutput()
	try {
		await ensureRevo()
		const { ok, value } = revo.eval(code)
		setResult(value ?? '(empty)', ok)
	} catch (err) {
		setResult('internal error: ' + err.message, false)
	}
}

// Prec.highest is required here, otherwise vim mode (and basicSetup's own
// keymaps) get first crack at the keydown and Mod-Enter never reaches us
const runKeymap = Prec.highest(keymap.of([
	{ key: 'Mod-Enter', run: (view) => { doRun(view.state.doc.toString()); return true } },
]))

const tabKeymap = keymap.of([indentWithTab])

const vimCompartment = new Compartment()

// restore vim preference before the editor is even created, so there's no flash of plain mode
let vimEnabled = localStorage.getItem(VIM_STORAGE_KEY) === 'true'

// URL hash fragment (base64) is the source of truth
let initialDoc = location.hash ? atob(location.hash.slice(1)) : SAMPLE

const editor = new EditorView({
	state: EditorState.create({
		doc: initialDoc,
		extensions: [
			vimCompartment.of(vimEnabled ? vim({ status: true }) : []),
			basicSetup,
			oneDark,
			revoLang,
			runKeymap,
			tabKeymap,
			indentUnit.of('  '),
			EditorView.theme({
				'&': { height: '100%', fontSize: '14px' },
				'.cm-scroller': { overflow: 'auto' },
				'.cm-content': { fontFamily: "'Maple Mono NL NF', 'JetBrains Mono', 'Fira Code', monospace" },
			}),
			EditorView.updateListener.of((update) => {
				if (update.docChanged) {
					history.replaceState(null, '', '#' + btoa(update.state.doc.toString()))
				}
			}),
		],
	}),
	parent: document.getElementById('editor'),
})

editor.focus()

// auto-run if code was loaded from URL hash
// if (location.hash) doRun(editor.state.doc.toString())

document.getElementById('run-btn').addEventListener('click', () => doRun(editor.state.doc.toString()))
document.getElementById('reset-btn').addEventListener('click', () => {
	if (revo) { revo.destroy(); revo = null }
	wasmBuffer = null
	clearOutput()
})
document.getElementById('clear-btn').addEventListener('click', clearOutput)

const exampleSelect = document.getElementById('example-select')
for (const ex of EXAMPLES) {
	const opt = document.createElement('option')
	opt.value = ex.id
	opt.textContent = ex.label
	exampleSelect.appendChild(opt)
}
exampleSelect.addEventListener('change', () => {
	const ex = EXAMPLES.find((e) => e.id === exampleSelect.value)
	exampleSelect.value = '' // it's a picker, not a persistent mode indicator
	if (!ex) return

	editor.dispatch({
		changes: { from: 0, to: editor.state.doc.length, insert: ex.code },
	})
	clearOutput()
	editor.focus()
})

const vimBtn = document.getElementById('vim-btn')
vimBtn.classList.toggle('active-toggle', vimEnabled)

vimBtn.addEventListener('click', () => {
	vimEnabled = !vimEnabled
	editor.dispatch({
		effects: vimCompartment.reconfigure(vimEnabled ? vim({ status: true }) : []),
	})
	vimBtn.classList.toggle('active-toggle', vimEnabled)
	localStorage.setItem(VIM_STORAGE_KEY, String(vimEnabled))
})
