import { EditorView, basicSetup } from 'codemirror'
import { EditorState, Compartment, Prec } from '@codemirror/state'
import { keymap } from '@codemirror/view'
import { StreamLanguage, indentUnit } from '@codemirror/language'
import { indentWithTab } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark'
import { vim } from '@replit/codemirror-vim'

const revoLang = StreamLanguage.define({
	startState() {
		return { inBlockComment: false, inTripleString: false, inBacktick: false }
	},
	token(stream, state) {
		if (state.inBlockComment) {
			if (stream.match(/^.*?##/)) { state.inBlockComment = false; return 'comment' }
			stream.skipToEnd(); return 'comment'
		}
		if (state.inTripleString) {
			if (stream.match(/^.*?"""/)) { state.inTripleString = false; return 'string' }
			stream.skipToEnd(); return 'string'
		}
		if (state.inBacktick) {
			if (stream.match(/^[^`]*`/)) { state.inBacktick = false; return 'string' }
			stream.skipToEnd(); return 'string'
		}
		if (stream.eatSpace()) return null
		if (stream.match(/^##/)) { state.inBlockComment = true; return 'comment' }
		if (stream.match(/^#/)) { stream.skipToEnd(); return 'comment' }
		if (stream.match(/^"""/)) { state.inTripleString = true; return 'string' }
		if (stream.match(/^"([^"\\]|\\.)*"?/)) return 'string'
		if (stream.match(/^'([^'\\]|\\.)*'?/)) return 'string'
		if (stream.match(/^`/)) { state.inBacktick = true; return 'string' }
		if (stream.match(/^:[a-zA-Z_]\w*[?!]?/)) return 'atom'
		if (stream.match(/^\d+(\.\d+)?([eE][+-]?\d+)?/)) return 'number'
		const kw = stream.match(/^[a-zA-Z_]\w*[?!]?/)
		if (kw) {
			const word = kw[0]
			if (/^let|fn|const|global|if|else|match|when|do|end|for|in|while|loop|break|return|spawn|join|yield|sleep|test|suite|expect|skip|struct|macro|import|proc|pub|comp|and|or|not|orelse$/.test(word)) return 'keyword'
			if (word.endsWith('?') || word.endsWith('!')) return 'builtin'
			return null
		}
		if (stream.match(/^\|>|\.\.|=>|->/)) return 'operator'
		if (stream.match(/^[+\-*/%=!<>&|^~?]+/)) return 'operator'
		if ('()[]{}'.includes(stream.peek())) { stream.next(); return 'bracket' }
		if (stream.match(/^,/)) return 'separator'
		stream.next(); return null
	},
})

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
    const m = await import('./revo.js')
    const wasmUrl = new URL('./revo.wasm', import.meta.url).href
    revo = await m.Revo.create({
      wasmUrl,
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
    if (btn) btn.classList.toggle('active-toggle', enabled)
    localStorage.setItem(VIM_STORAGE_KEY, String(enabled))
  }

  const vimBtn = document.getElementById('vim-toggle')
  if (vimBtn) {
    vimBtn.classList.toggle('active-toggle', vimEnabled)
    vimBtn.addEventListener('click', () => toggleVim(!vimEnabled))
  }

  for (const el of els) {
    const src = el.querySelector('.repl-source')
    const container = el.querySelector('.repl-editor')
    const btn = el.querySelector('.repl-run')
    const out = el.querySelector('.repl-output')
    if (!src || !container || !btn || !out) continue

    const lines = src.textContent.split('\n')
    const firstContent = lines.find(l => l.trim().length > 0)
    const indent = firstContent ? firstContent.match(/^[ \t]*/)[0] : ''
    const code = lines.map(l => l.startsWith(indent) ? l.slice(indent.length) : l).join('\n').trim()
    src.remove()

    const editor = new EditorView({
      state: EditorState.create({
        doc: code,
        extensions: [
          vimCompartment.of(vimEnabled ? vim({ status: true }) : []),
          basicSetup,
          oneDark,
          revoLang,
          keymap.of([indentWithTab]),
          indentUnit.of('  '),
          EditorView.theme({
            '&': { height: 'auto', fontSize: '13px' },
            '.cm-content': { fontFamily: "'Maple Mono NL NF', 'JetBrains Mono', 'Fira Code', monospace" },
          }),
        ],
      }),
      parent: container,
    })
    editors.push(editor)

    btn.hidden = false

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
        const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
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
}
