---
hideInList: true
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <div style="flex:1; min-width:250px; justify-content: space-between;">

<span style="flex: 1;">

# revo, the programming language

[docs](basics) | [github](https://github.com/if-not-nil/revo)

<b>revo</b> is a dynamic language made for the joy of programming

a 1mb toolkit with a ton of focus on ergonomics
[introduction with words](./blog/apples)

</span>

<span style="flex: 1;">
    <a class="imp" href="#quick-start">get</a>
    <span>or</span>
    <!-- <a class="imp" href="https://codeberg.org/lung/revo">try</a> -->
    <a class="imp" href="https://discord.gg/XzGWh7TX59">join the discord</a>
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

# pipes
clean data flow without nesting

things flow from top to bottom

</div>
<div>

```ruby
"hello!!"
  |> string.upper
  |> string.sub(0, 4)
  |> fn(s) s + ", world!" 
  |> inspect

# or with placeholders,
"hello!!"
  |> _:upper() # obj:method() == obj.method(obj)
  |> _:sub(0, 4)
  |> do
    # you can even put any expression here
    #   even do-end blocks
    _ + ", world!"
  end
  |> print

# this is the same, but look at the order of operations
print(log("hello":upper():sub(0, 4) + ", world!"))
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

# everything is an expression
no statements, everything (really) always returns a value
...but the code still looks procedural

</div>
<div>

```ruby
let x = 10 # this line evaluates to 10
let label = if x > 0 "positive" else "zero"
let a = let b = 5 # this whole line evaluates to 5

fn is_true() 5 + 5 == 10
# both x and is_true are the same function
const x = fn is_true() do # do-end is one too
    # return and break are special
    return 5 + 5 == 10
end
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

the compile-time VM does not differ from the runtime one

</div>
<div>

```ruby
# asks for a ling of input at build-time
# then keeps the result at run-time
const x = comp read() 

const long = do
    let t = 0
    for x in 0..100
        t += x
    t # similar to rust's {},
      #   revo do-end blocks return the last value
end
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
  | (:number, n) => print("is number", n)
  | (other, n)   => print(other, n)
  | x            => print("not tuple: ", x)

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
| (:ok, v)  => v
| (:err, e) => panic(e)
| _         => panic()
| _         => panic()
# _ is wildcard, when nothing else matched
# if you want to grab the actual value
# , just put any binding name there

const response = match "hello!"
| "hello!"              => "hi!"
| x when (x:len() > 10) => ""
| x when string?(x)     => x + " to you too!"
| _                     => ":("

let f = match read({path = "./readme.md"})
| (:ok, file) => file
| (:err, error) when error == :FileDNE
	=> panic("file does not exist")
| (error) => panic("error")
| x => panic("unknown: ", x)
```

</div>
</div>

<div class="lr-container">
<div>

# fibers
i made all your blocking code become non-blocking by just adding a spawn before it

</div>
<div>

```ruby
fn serve(peer, message) do
  peer:send(message)?
end

while :true do
  # accept the next connection; if none is ready, this fiber parks until the
  # runtime sees a connection on the listening socket.
  let conn = server:accept()?
  # the only thing you have to do to make it async is to add `spawn` here! 
  spawn serve(conn, port - 1)
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

let mt = {
    name = fn(self) self.name,
    set_version = fn(self, v) self.version = v,
    DELTA = 0.0,
}

# a metatable is just a "table overlay"
# which you can slap onto other tables
set_metatable(rec, mt)
let rec = {name = "revo", version = 2}
set_metatable(rec2, mt)
# name does not exist in rec or rec2,
# but you can still call them
assert_eq(rec:version(), 1)
assert_eq(rec2:version(), 2)
assert_eq(rec.DELTA, rec2.DELTA)
```

</div>
</div>

<div class="lr-container">
<div>

# convenient typing
the type system is optional, but very well-integrated

untyped code works just fine, but

typed code is faster and gets optimized better (and ensures code correctness at compile-time!)
most of your code is going to be inferred automatically
</div>
<div>

```ruby
type Result =
    (:ok, any)
  | (:err, atom)


struct User {
  name: string = "me",
  age: int = 21,

  fn get_age(self) -> Result
    (:ok, self.age),
}

# type is inferred
let user = User{}

print(user:get_age())
```

</div>
</div>

<div class="lr-container">
<div>

# first-class tests
they're just closures and they fail when you return an error. the `?` postfix operator propagates errors, giving you a pretty simple experience

</div>
<div>

```ruby
fn add(a, b) a + b

suite "add" do
  test "addition" do
    expect(add(20, 22) == 42)?
    expect(add(20, 22) != 22)?
  end
  
  test/skip "adds two tables" do
    expect(add({1,2}, {3, 4}) == {4,6})?
  end
end
```

</div>
</div>

# quick start

you can get the latest release from (the github releases page)[https://github.com/if-not-nil/revo/releases]

## from source

the only dependency is [zig](https://ziglang.org/) version 0.16.0:
the repository is also [available on codeberg](https://codeberg.org/lung/revo)

```bash
cd /tmp
git clone https://github.com/if-not-nil/revo --recursive && cd revo
zig build -Doptimize=ReleaseFast # static build with vendored 
./zig-out/bin/revo -e 'print("hello " + "world")'

# then, put that binary in your path
cp ./zig-out/bin/revo ~/.local/bin/revo
```

# usage
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

# lsp

release builds bundle the LSP, `revo --lsp` starts it
debug builds skip it by default
see [./lsp](./lsp) for setup and feature details
