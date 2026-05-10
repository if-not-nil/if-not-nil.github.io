---
hideInList: true
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <div style="flex:1; min-width:250px; justify-content: space-between;">

<span style="flex: 1;">

# revo, the programming language

[docs](basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo)

<b>revo</b> is a dynamic language made for the joy of programming

for writing readable code without missing out on semantic freedom

a batteries-included, expression-first, (really) multi-paradigm, (really) general-purpose programming language

</span>

<span style="flex: 1;">
    <a class="imp" href="https://codeberg.org/lung/revo">get</a>
    <span>or</span>
    <a class="imp" href="https://codeberg.org/lung/revo">try</a>
</span>

*many features are going to be bugged before v0.1.0*

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

# comp
execute any (really) expression at compile time

any script can be compiled into bytecode and get any value baked in
```bash
revo -b script.rv
revo script.rvo
```

the compile-time VM does not differ from the runtime one

</div>
<div>

```ruby
# asks for input at build
# then keeps the result at run
const x = comp read() 

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

<div class="lr-container">
<div>

# errors-as-values
nil and booleans are replaced by atoms

you can't use a value without handling an error
all crashes are explicit (WIP)

aided massively by pattern matching

</div>
<div>

```ruby
# f might be
#   (:ok, "file-contents")
#   or (:err, :IoError)
const f = fs.open({path = "./readme.md"})

# crashes if :err
const f = fs.open({path = "./readme.md"}):unwrap()

# or match on it yourself
let f = match read({path = "./readme.md"})
| (:ok, file) file
| (:err, error) when error == :FileDNE
	panic("file does not exist")
| (error) panic("error")
| x panic("unknown: ", x)
```

</div>
</div>

<div class="lr-container">
<div>

# procedural macros (WIP)
along with an AST-substituting macro system,

this lets you just get an iterator over the raw ast tokens, run any code to transform them
, then return back a table of the new ast
</div>
<div>

```ruby
# > num, num, num -> Sigma^4_n=1(a * b + c)
proc cmul!(iter) do
  print("inner: ", add3!(10,20,12))
  print("peek: ", iter:peek())
  match iter:peek()
    | (:number, n) print("is number", n)
    | (other, n) print(other, n)
    | x print("not tuple: ", x)
  let a = 10 + (iter:next_of(:number))
  let b = iter:next_of(:number)
  let c = iter:next_of(:number)
  let acc = 0
  for i in 1..5 do
  	acc += a * b + c
  end

  {(:number, acc)}
end

print(cmul!(10,20,30))
```

</div>
</div>

<div class="lr-container">
<div>

# pattern matching
destructure and branch in place

you will be using atoms and tuples, they are beautiful solutions to their problems

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

let f = match fs.open("./readme.md")
| (:ok, file) file
| (:err, error) do
	match error
	| :FileDNE panic("file does not exist")
	| x panic("other error: ", x)
end
```

</div>
</div>

<div class="lr-container">
<div>

# everything is an expression
no statements, everything (really) always returns a value

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

# tables
represent everything

used for
\- module exports
\- arrays
\- maps

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

### adjectives

expressive | dynamically-typed | general-purpose | scripting | safe | functional | multi-paradigm | concurrent | bytecode-compiled

# quick start

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
zig build -Doptimize=ReleaseFast
```

the binary will be available at `zig-out/bin/revo` or you can run with `zig build run`
### usage
please check `revo -h` first

```bash
revo script.rv # run script
revo -e "1 + 2" # inline code
revo -b script.rv              # creates script.rvo
revo -b -o output.rvo script   # custom output path
revo # start repl (not yet stable)
revo --dis script.rv # bytecode disassembly
```
