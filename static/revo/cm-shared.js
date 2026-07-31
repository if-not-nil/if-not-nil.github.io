import { StreamLanguage } from '@codemirror/language'

export const revoLang = StreamLanguage.define({
	startState() {
		return {
			inBlockComment: false,
			inTripleString: false,
			inBacktick: false,
		}
	},
	token(stream, state) {
		if (state.inBlockComment) {
			if (stream.match(/^.*?##/)) {
				state.inBlockComment = false
				return 'comment'
			}
			stream.skipToEnd()
			return 'comment'
		}

		if (state.inTripleString) {
			if (stream.match(/^.*?"""/)) {
				state.inTripleString = false
				return 'string'
			}
			stream.skipToEnd()
			return 'string'
		}

		if (state.inBacktick) {
			if (stream.match(/^[^`]*`/)) {
				state.inBacktick = false
				return 'string'
			}
			stream.skipToEnd()
			return 'string'
		}

		if (stream.eatSpace()) return null

		if (stream.match(/^##/)) {
			state.inBlockComment = true
			return 'comment'
		}
		if (stream.match(/^#/)) {
			stream.skipToEnd()
			return 'comment'
		}

		if (stream.match(/^"""/)) {
			state.inTripleString = true
			return 'string'
		}

		if (stream.match(/^"([^"\\]|\\.)*"?/)) return 'string'

		if (stream.match(/^'([^'\\]|\\.)*'?/)) return 'string'

		if (stream.match(/^`/)) {
			state.inBacktick = true
			return 'string'
		}

		if (stream.match(/^:[a-zA-Z_]\w*[?!]?/)) return 'atom'

		if (stream.match(/^\d+(\.\d+)?([eE][+-]?\d+)?/)) return 'number'

		const kw = stream.match(/^[a-zA-Z_]\w*[?!]?/)
		if (kw) {
			const word = kw[0]
			const keywords = new Set([
				'let', 'fn', 'const', 'global', 'if', 'else', 'match',
				'when', 'do', 'end', 'for', 'in', 'while', 'loop',
				'break', 'continue', 'return', 'spawn', 'join', 'yield', 'sleep',
				'test', 'suite', 'expect', 'skip', 'struct',
				'macro', 'import', 'proc', 'pub', 'comp',
				'and', 'or', 'not', 'orelse',
				'band', 'bor', 'bxor', 'shl', 'shr',
			])
			if (keywords.has(word)) return 'keyword'
			if (word.endsWith('?') || word.endsWith('!')) return 'builtin'
			return null
		}

		if (stream.match(/^\|>/)) return 'operator'
		if (stream.match(/^\.\./)) return 'operator'
		if (stream.match(/^=>/)) return 'operator'
		if (stream.match(/^->/)) return 'operator'
		if (stream.match(/^[+\-*/%=!<>&|^~?]+/)) return 'operator'

		if ('()[]{}'.includes(stream.peek())) {
			stream.next()
			return 'bracket'
		}
		if (stream.match(/^,/)) return 'separator'

		stream.next()
		return null
	},
})
