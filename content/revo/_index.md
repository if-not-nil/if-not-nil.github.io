---
hideInList: true
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <div style="flex:1; min-width:250px; justify-content: space-between;">

<span style="flex: 1;">

# revo, the programming language

[docs](basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo)

<b>revo</b> is a dynamic language made for the joy of programming

a 1mb toolkit with much focus on ergonomics
[introduction with words](./blog/apples)

</span>

<span style="flex: 1;">
    <a class="imp" href="#quick-start">get</a>
    <!-- <span>or</span> -->
    <!-- <a class="imp" href="https://codeberg.org/lung/revo">try</a> -->
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

# errors-as-values
nil and booleans are replaced by atoms

you can't use a value without handling an error
all crashes are explicit (WIP)

aided massively by pattern matching, `?`, `orelse`, and `:unwrap()`

</div>
<div>

```ruby
# f might be
#   (:ok, "file-contents")
#   or (:err, :IoError)
const f = fs.open({path = "./readme.md"})

# `?` unwraps :ok and panics on :err at top-level
const f2 = fs.open({path = "./readme.md"})?

# crashes if :err
const f = fs.open({path = "./readme.md"}):unwrap()
```

</div>
</div>

<div class="lr-container">
<div>

# procedural macros
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
    name: string,
    version: number = 0,
    fn is_beta(self) self.version == 0,
}

let p =Project{name = "revo"}
assert(p:is_beta())
```

</div>
</div>

# quick start

the only dependency is [zig](https://ziglang.org/) version 0.16.0:
```bash
cd /tmp
git clone https://codeberg.org/lung/revo
zig build -Doptimize=ReleaseFast # static build with vendored 
./zig-out/bin/revo -e 'print("hello " + "world")'

# then, put that binary in your path
cp ./zig-out/bin/revo ~/.local/bin/revo
```

## usage
please check `revo -h` first

```bash
revo script.rv   # run script
revo             # start repl
revo -e "1 + 2"  # inline code

revo -b script.rv              # script.rv -> script.rvo
revo -b -o output.rvo script   # custom output path
revo --bench1 script.rv        # benchmarks script.rv
revo --test script.rv          # runs with test blocks
revo --dis script.rv           # bytecode disassembly
```
