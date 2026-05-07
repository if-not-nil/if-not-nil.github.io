---
hideInList: true
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <div style="flex:1; min-width:250px; justify-content: space-between;">

<span style="flex: 1;">

# revo, the programming language

[docs](basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo)

<b>revo</b> is a language made for the joy of programming

for writing code with semantic freedom and readability at the same time

it's a language that can run in a repl, have dynamic types, pattern matching, first-class functions, all while being an AOT-dynamic language

</span>

<span style="flex: 1;">
    <a class="imp" href="https://codeberg.org/lung/revo">get</a>
    <span>or</span>
    <a class="imp" href="https://codeberg.org/lung/revo">try</a>
</span>

</div>

  <pre class="ascii">
⣄⠔⠄⡨⣀⣹⣥⣣⡚⣿⣓⣾⣫⣷⠮⡧⣬⣬⣑⢤⠤⡉⣿⡥⣂⢟⣕⡴⠬⠆⠸⡈⡆⠀⠀⠀⡋⠄⠂⠨⡆⠀⠠⠃⡀⠀⠀⠈⢰⣿
⠩⣽⢟⢭⠶⢷⢵⣻⠿⢍⣟⡅⡧⡭⣽⡯⡯⣶⠭⣽⡢⠱⢿⢧⠓⢥⠨⠧⠉⣡⠐⠀⢑⣀⠂⠈⠆⡅⠀⡀⢥⠤⢁⠀⢣⠀⠀⢘⠽⡏
⠬⡓⣼⢟⢜⡧⣷⣇⣧⡷⢯⣿⣿⣿⡶⣭⠍⣯⣻⢥⠞⣮⣬⣩⠅⢏⠆⠁⡀⠌⢩⡁⢁⠅⠡⢀⠠⠀⢉⢈⠀⠀⡅⠀⡇⠀⠀⠃⠭⣯
⡎⣟⣵⠅⣾⢭⣿⣾⣯⣿⣿⢿⣿⣿⣿⣿⣧⡳⣥⢜⣟⡤⠉⣁⢧⢨⠌⡂⠀⠒⠬⡪⣊⠄⠀⠘⠀⠢⡁⠀⡀⠅⠅⠀⡄⠀⠈⠀⢕⡟
⡕⣧⡗⠎⠷⣯⣿⣿⣷⣿⡻⢵⣿⣿⣿⣭⣿⡿⣟⣇⡧⣿⡭⢨⠫⠮⠄⠖⠀⠆⠦⠕⠁⠅⠀⠆⡁⠁⡀⠀⠄⡉⠁⠀⠄⡀⡂⠀⢼⣇
⠃⣶⣯⠢⡗⣟⣿⡿⣿⣯⢿⣷⢾⢿⣛⣿⣿⣯⡻⣾⡾⣾⢵⣏⣩⠅⠅⠥⠀⠃⠠⠅⠃⠀⡈⠀⠭⠅⠀⠀⠁⠔⠀⠀⢂⠅⠅⠀⠽⡇
⠱⣻⣻⡥⢫⢯⢿⣷⣷⣿⣿⢾⢿⣷⢯⣉⣟⣟⣾⣿⠳⣿⣇⣃⠯⠘⠔⡇⠒⠅⡖⠁⠄⠡⠑⣀⠀⡁⠀⡀⠃⠈⠀⠀⠅⠀⠀⠂⣋⡇
⢂⠵⣓⣿⣍⢯⢯⡯⣟⣝⠷⣟⢝⣋⡏⣧⠯⣿⣿⢯⣼⣯⡂⡂⣟⡧⠐⣅⠂⠥⠏⠀⠂⡅⠅⡁⠁⠄⠠⠊⠀⠨⠀⢈⠀⠄⠉⢘⡟⡆
⡥⣯⢌⡤⢽⣗⣏⠗⢿⣻⡭⡞⡷⣭⢿⡻⡯⡟⣕⣾⢽⢯⡭⠂⡍⠀⠏⠀⢌⠴⠂⠊⡄⢗⠂⠰⠀⠤⠣⠀⠀⠀⠁⠀⠀⠀⠅⠀⢕⡽
⠵⡭⡩⠋⠽⣽⡛⡹⢯⠍⡛⡏⣯⢟⠟⠿⣩⣳⡿⡟⢗⣭⡤⡯⠁⡬⠠⠂⢄⠂⢤⠀⢖⠀⠀⢀⠂⢖⠀⠘⠀⠀⠂⠡⢤⠠⠀⠀⣫⡿
⠀⢰⡇⢂⣃⠙⣧⡵⡙⠇⡷⠶⡷⠶⡟⡙⣩⡌⠯⡺⡍⡲⡸⣆⠼⠅⡱⠌⠡⠂⢄⣠⠃⠀⠀⡂⠈⠂⠠⢀⠀⠀⠀⠔⠀⠂⠂⠀⠨⣯
⡔⠰⠼⣝⢪⢋⢋⠣⣧⡦⣦⡁⡭⠽⡛⠁⡫⢡⡄⠿⡫⣕⣔⢳⠌⢡⡸⠁⠁⠂⣠⡇⠀⠀⠀⠍⠈⠄⠀⠀⢀⠀⠔⠆⠁⠈⠠⠀⡹⡏
⡖⣠⠄⠀⠯⢜⢨⠊⣒⢡⠨⡀⠢⢭⠴⡊⢕⠐⣄⡓⡾⠋⠗⠉⢀⠚⠀⢃⠂⠥⠲⠀⠀⠀⠄⠐⠀⠀⠐⠀⠁⠄⠱⠁⠊⠈⡀⠀⠊⣽
⠀⡉⠒⣃⠰⡀⢁⠘⡉⠪⠋⡲⡅⠍⡎⡪⢣⠽⢭⠍⡥⠁⠂⡰⠠⣄⠥⠐⠀⠣⠄⢀⠐⠁⡀⠀⢐⠐⠀⠠⠁⠂⠄⠠⠀⠁⡀⠐⣫⡟
⠐⢔⠁⠀⠬⠑⠗⠴⠀⠢⡁⢌⠅⢘⠓⡛⠈⡀⠄⠆⠠⠠⠢⢂⠕⠷⠈⢀⠈⡒⠄⠂⠀⠀⠈⠀⡀⠡⠈⠀⠆⡐⠀⠀⠓⠀⠀⠀⢐⢼
⡀⠀⠈⠐⠠⠀⠀⠁⠁⠣⢀⡁⡄⠂⠔⠂⠂⢉⠁⡌⠄⠜⠈⠡⠐⠀⡐⠀⢨⠀⠁⠀⠀⡀⠍⠄⠠⠁⠀⠠⢄⠈⠀⠀⡄⠀⠀⡀⠒⣸
⢘⠉⡒⠤⠌⢀⠑⠕⠀⠄⠄⠄⠀⠄⠑⠉⠨⠀⠄⠀⠂⠃⠀⠀⠈⠄⠄⠠⠈⠀⠀⡀⠠⠁⢠⠁⠁⠀⠐⠱⠀⠀⠀⡐⠀⠉⠄⠀⢸⠾
⠀⠘⠈⡀⠈⠀⠈⠨⠐⠠⠠⠐⡀⡄⢠⠀⢀⠨⠀⠃⠀⠀⡁⡠⠀⠩⠀⠂⠁⠀⠀⠀⢒⡄⠊⠀⠀⢀⠈⠁⠀⠀⠀⠆⠘⠁⠄⠀⠄⣿
⠄⡄⠀⠈⠠⠀⡀⠀⠀⠄⠀⠂⠀⠀⠄⠀⢀⠁⠁⢁⠁⠆⠀⠀⠀⠀⡀⠀⠈⠀⡀⠀⠱⠀⠀⠀⠀⠂⢄⠈⠀⠀⡀⡨⠠⡀⠠⠀⠄⡼
⠠⠀⠁⠊⢀⠀⠠⠁⠁⠂⠂⡄⢄⠐⡀⢀⠊⠂⡀⡁⡀⢀⢀⠠⠀⠄⠂⠡⠠⠁⠀⠀⠀⠂⠀⢠⠒⠀⠀⠀⠐⠢⠀⢀⠀⠀⠄⠄⣿⣿
⠁⠋⠙⠊⠐⠕⠁⡂⠈⠅⠠⠈⠐⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠉⠀⠐⠀⠀⠀⠀⠀⣈⠀⠀⠀⠀⠈⡂⠈⠀⠀⠘⠌⢀⠥
⠀⠀⠀⠀⠔⠔⠀⡀⡉⠀⠀⠀⠂⠠⠠⠀⠄⠄⠀⣀⢀⠀⡈⠀⠌⡐⠈⠈⠀⠀⠀⠀⠅⠀⣐⠉⠄⠀⠀⣂⠠⠁⡈⠀⠄⠄⢀⠣⢶⢿
⠄⠀⠀⡁⠀⠄⠀⠀⠁⠈⠀⠈⠀⠁⠀⠁⡀⠁⠀⠁⠀⠀⠀⡀⠀⠀⠀⠀⠀⠠⡀⠑⠀⠀⠎⠀⢬⢠⠀⢂⠠⠢⠠⠈⡐⠸⠀⡐⣹⢷
⠩⠥⠂⠆⡆⢠⠀⢄⠀⣀⡀⣄⠀⢈⠀⠀⣀⡀⡀⡀⠄⡄⠡⠀⠐⠀⠑⠀⠀⠁⠒⠒⠉⠡⡀⠈⠈⢀⠥⠈⠀⠀⠀⠀⠈⣞⣏⣿⡏⣿
⠾⠝⠷⢿⣯⣿⠧⡧⠭⠣⠭⡭⡮⢭⠶⠶⠶⠦⣗⡶⠽⠭⣿⣶⠷⠵⠮⠽⠿⠮⠿⢷⡶⣖⡷⠲⠞⠷⠾⢿⢷⣿⣿⣿⣿⣯⢇⠟⡧⢈
  </pre>

</div>

<div class="lr-container">
<div>

# tables
represent everything

used for
- module exports
- arrays
- maps

</div>
<div>

```ruby
let t = {1, 2, 3, key = "value"}
let rec = {name = "revo", version = 1}
rec.name
t[0]

rec:set_meta({
    name = fn(self) self.name,
    set_version = fn(self, v) self.version = v,
})

struct Project {
    name: string
    version: number = 1
}

Project{name = "revo"}
```

</div>
</div>

<div class="lr-container">
<div>

# pattern matching
destructure and branch in place

errors are also handled as values and exceptions are never thrown.

get used to atoms and tuples, they are a beautiful solution to their problems

</div>
<div>

```ruby
match (:ok, 42)
| (:ok, v)  v
| (:err, e) panic(e)
| _ panic()

const result = (:ok, 42):unwrap()

const response = match "hello!"
| "hello" "hi!"
| x when (x:len() > 10) ""
| x when string?(x) x + " to you too!"
| _ ":("
```

</div>
</div>

<div class="lr-container">
<div>

# everything is an expression
no statements, everything (really) returns a value


</div>
<div>

```ruby
let x = 10
let label = if x > 0 "positive" else "zero"
let a = let b = 5

fn is_true() 5 + 5 == 10
fn is_true() do # do-end is one too
    return 5 + 5 == 10
end
```

</div>
</div>

<div class="lr-container">
<div>

# pipes
clean data flow without nesting

</div>
<div>

```ruby
"hello!!"
  |> string.upper
  |> string.sub(0, 4)
  |> fn(s) s + ", world!" 
  |> print
```

</div>
</div>

<div class="lr-container">
<div>

# comp
execute any (really) expression at compile time

any script can be compiled into bytecode and get any value baked in
```bash
revo -b script.rv
revo script.rvo
```

</div>
<div>

```ruby
const x = io:read() # asks for input at build
                    # then keeps the result at run

const pat = regex.compile("\s*# TODO: (.*)")

const long = do
    let t = 0
    for x in 0..100
        t += x
    t
end
```

</div>
</div>

### adjectives

expressive | dynamically-typed | general-purpose | scripting | safe | functional | multi-paradigm | concurrent | bytecode-compiled

# quick start

## install 

### binary
grab the appropriate version for your os from [the releases page](https://codeberg.org/lung/revo/releases)

```bash
# make sure this is one of your paths!
cp ~/Downloads/revo ~/.local/bin/revo

revo -e '"hello" + "world"'
```

### from source
the only dependency is [zig](https://ziglang.org/):
```bash
zig build
```

the binary will be available at `zig-out/bin/revo` or you can run with `zig build run`
### usage

```bash
revo script.rv # run script
revo -e "1 + 2" # inline code
revo -b script.rv              # creates script.rvo
revo -b -o output.rvo script   # custom output path
revo # start repl (not yet stable)
revo --dis script.rv # bytecode disassembly
```
