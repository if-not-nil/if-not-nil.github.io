---
title: 'on the web'
---


<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  <pre class="ascii">
        _____
    ,-:` \;',`'-, 
  .'-;_,;  ':-;_,'.
 /;   '/    ,  _`.-\
| '`. (`     /` ` \`|
|:.  `\`-.   \_   / |
|     (   `,  .`\ ;'|
 \     | .'     `-'/
  `.   ;/        .'
jgs `'-._____.
  </pre>
  <div style="flex:1; min-width:250px;">

# using revo on the web
> it compiles to wasm!

this website ships a ~1mb `revo.wasm` binary which runs the whole language entirely locally
i did this by giving you text editors backed by codemirror 6

```revo
# try it! edit and run this code
print("hello from the browser!")
```

click the run button to evaluate
  </div>
</div>


### embedding

to embed a repl on your own page, include these assets:

```html
<script src="https://gills.pages.dev/revo.js" type="module"></script>
<script src="https://gills.pages.dev/revo/repl.js" type="module"></script>
<link rel="stylesheet" href="https://gills.pages.dev/revo/repl.css">
```

...then wrap any code in a repl container

```html
<div class="repl">
  <div class="repl-editor-wrap">
    <div class="repl-editor"></div>
    <button class="repl-run" hidden>run</button>
  </div>
  <script type="text/plain" class="repl-source">print("hello from the browser!")</script>
  <pre class="repl-output" hidden></pre>
</div>
```

the `revo/repl.js` script hydrates all `.repl` elements on page load
, it creates a codemirror editor for each, wires the run button to the wasm evaluator, and displays the result

## wasm build

the revo compiler and runtime compile to a single `.wasm` binary via zig:

```sh
zig build -Dtarget=wasm64-freestanding -Doptimize=ReleaseSmall
cp zig-out/bin/revo.wasm .priv/web/static/revo.wasm
```

the javascript bindings live in `wasm/revo.js` (copied to `static/revo.js`). the repl lazily imports both when the first run button is clicked

## syntax highlighting

both the repl editors and the website's code blocks share a single `revoLang` stream parser defined in `revo/cm-shared.js`:

```js
import { revoLang } from './cm-shared.js'    // from revo/repl.js
import { revoLang } from './revo/cm-shared.js' // from an external consumer
```

this module is the single source of truth for revo syntax highlighting. the repl imports it; any other consumer (an LSP client, a documentation generator, etc.) can import the same module
