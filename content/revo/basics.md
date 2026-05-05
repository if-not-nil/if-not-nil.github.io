---
title: 'the language'
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <div style="flex:1; min-width:250px;">

# basics
> thinking of this as either a rewritten lisp, a weird lua, or a weird javascript might help a lot and the semantics do match a bit!

everything is an expression, and everything is pipe-able and chain-able - you would want to assume that everything returns what you expect. if not, it's probably a design flaw and you should open an issue
  </div>
  <pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⡀⠀⠀⠀⠀⠀⠀⢀⠀⠀⡀⠀⢀⠀⢀⡀⣤⡢⣤⡤⡀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡄⡄⠐⡀⠈⣀⠀⡠⡠⠀⣢⣆⢌⡾⢙⠺⢽⠾⡋⣻⡷⡫⢵⣭⢦⣴⠦⠀⢠⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣽⣥⡈⠧⣂⢧⢾⠕⠞⠡⠊⠁⣐⠉⠀⠉⢍⠀⠉⠌⡉⠀⠂⠁⠱⠉⠁⢝⠻⠎⣬⢌⡌⣬⣡⣀⣢⣄⡄⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⢸⣿⣿⢿⣾⣯⣑⢄⡂⠀⠄⠂⠀⠀⢀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠄⠐⠀⠀⠀⠀⣄⠭⠂⠈⠜⣩⣿⢝⠃⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣻⡟⠏⠀⠚⠈⠚⡉⡝⢶⣱⢤⣅⠈⠀⠄⠀⠀⠀⠀⠀⠠⠀⠀⡂⠐⣤⢕⡪⢼⣈⡹⡇⠏⠏⠋⠅⢃⣪⡏⡇⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠺⣻⡄⠀⠀⠀⢠⠌⠃⠐⠉⢡⠱⠧⠝⡯⣮⢶⣴⣤⡆⢐⣣⢅⣮⡟⠦⠍⠉⠀⠁⠐⠀⠀⠀⠄⠐⠡⣽⡸⣎⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢈⡻⣧⠀⠁⠐⠀⠀⠀⠀⠀⠀⠊⠀⠕⢀⡉⠈⡫⠽⡿⡟⠿⠟⠁⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠬⠥⣋⡯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡀⣾⡍⠕⡀⠀⠀⠀⠄⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠥⣤⢌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠄⢀⠀⢝⢞⣫⡆⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣽⡶⡄⠐⡀⠀⠀⠀⠀⠀⠀⢀⠀⠄⠀⠀⠀⠄⠁⠇⣷⡆⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡸⢝⣮⠍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠀⢾⣷⠀⠠⡀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠁⡁⠀⠀⣾⡥⠖⠀⠀⠀⠂⠀⠀⠀⠀⠀⠁⠀⡀⠁⠀⠀⠻⢳⣻⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣞⡙⠨⣀⠠⠄⠀⠂⠀⠀⠀⠈⢀⠀⠀⠀⠀⠀⠤⢚⢢⣟⠀⠀⠀⠀⡐⠀⠀⡀⠀⠀⠀⠀⠁⠈⠌⠊⣯⣮⡏⠡⠂⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣻⡟⡄⡡⣄⠀⠠⠀⠀⡅⠀⠐⠀⡀⠀⡀⠀⠄⠈⠃⠳⠪⠤⠀⠀⠀⠀⡀⠀⠂⠀⠀⠀⠁⠈⢠⣠⠒⠻⣻⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠪⡎⠠⢌⠑⡀⠂⠀⠄⠠⠀⠠⠀⠁⡀⠠⠠⡀⣀⠜⢏⡅⠀⠀⡀⠁⠀⠀⠁⠁⠐⠄⡀⢀⠀⠀⠄⢑⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠼⣻⠧⣣⣀⠐⠨⠁⠕⢈⢀⢀⡁⠀⠈⠠⢀⠀⠐⠜⣽⡗⡤⠀⠂⠀⠠⠀⢂⠠⠀⠁⠀⠀⠔⠀⠑⣨⣿⢯⠋⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡚⣷⣭⠎⢃⡗⠄⡄⢀⠁⠀⠅⢀⢅⡀⠠⠀⢠⡀⡩⠷⢇⠀⡀⠄⡀⠄⠂⠀⠀⠄⠉⡠⠃⠴⠀⠈⢁⣿⡛⡯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⡬⡿⣿⡏⡻⡯⠌⢁⢛⠠⠓⠐⠐⠐⠌⠃⠋⠂⡠⢰⣈⢏⣠⠂⠈⠀⠠⠒⠡⠄⠢⠤⠨⠢⡬⠆⠿⢷⢿⡽⡧⠉⠊⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠺⣷⣺⣗⣿⡶⡎⡅⣣⢎⠠⡅⣢⡖⠴⠬⡈⠂⡨⢡⠾⣣⣢⠀⠀⡹⠄⡄⠄⡇⣰⡖⡊⠔⢹⣄⣿⣭⣵⣿⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠩⣿⣿⣲⣿⣷⣟⣼⠟⣬⢉⡠⣪⢜⣂⣁⠥⠓⠚⡁⢶⣷⣠⠂⡄⡢⣀⡐⠧⢆⣒⡲⡳⡫⢟⡃⢪⡧⣟⡟⣯⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢺⠟⢿⢟⢻⡗⡮⡿⣲⢷⣆⣏⣇⡧⣄⢖⠾⡷⣿⣤⢳⢷⣣⣦⡜⠗⣭⢂⠩⣹⢿⡲⢎⡧⣕⣖⣓⣽⡿⡖⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠂⠂⠏⠿⢻⣥⡪⢽⣳⣳⣥⡶⣫⣍⢐⣥⣻⣾⡻⣅⢭⡴⢭⣿⠕⣧⡭⣞⣻⣣⣻⢿⠟⠛⠙⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠋⠫⠯⣍⢻⣿⣿⣷⣕⣵⣹⣽⣿⣷⣇⡏⣿⡿⣍⡝⠵⠯⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⠁⠋⢣⠓⡍⣫⠹⣿⣿⣷⡿⠯⠺⠁⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⢀⠋⢈⡿⠿⠁⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  </pre>

</div>

**revo in 1 minute**
```ruby
let a = 10       # mutable
const b = 20     # immutable
global c = 30    # module-level, visible across closures

fn add(x, y) x + y
const greet = fn(name) "hello, " + name

let t = {1, 2, 3}            # table (mutable collection)
let h = {name = "revo"}
h.stable = :true

const point = (10, 20)       # tuple (fixed, immutable)
const (x, y) = point

match safe_div(10, 2)        # result types + pattern matching
| (:ok, v)  print(v)
| (:err, e) print(e)

"hello" |> print             # pipe operator

"asdf"
|> (fn(s) s * 2)
|> print

const h = spawn add(20, 22)  # fibers
join(h)  # 42

# type annotations exist, but are not yet functional
const a: number = 10
const b: number = 20
fn mul(x: number, y: number) x * y
print(mul(1, 23))
```

the fundamental types are:

## numbers

`1`, `1.0`, `-0.14`. arithmetic works as you'd expect and there's no integer/float distinction at the type level

## tables

the universal collection. array part, hashmap part, always passed by reference

```ruby
let arr = {1, 5, 3}
let map = {k = "v"}
map.x = "y"

let a = {
    inner = 8,
    ["inner_str"] = 10,       # [] syntax for non-ident keys
    mutate = fn(self) self.inner *= 2,
    helper = fn() "helped",
}

print(a.inner)         # 8
print(a["inner_str"])  # 10
print(a.helper())      # "helped"
a:mutate()             # colon syntax passes a as first arg (like self)
```

structs build on tables — they generate a constructor that type-checks fields at creation time:

```ruby
struct User {
    name: string
    age: number = 42          # default value
    const get_age = fn(self) self.age
}

const me = User({name = "me", age = 99})
const you = User{name = "you"}  # table/string args don't need parens
print(you:get_age())            # 42
```

if you need a copy: `{1, 2, 3}:copy()`. otherwise mutations are shared

## atoms

named constants, compared by identity. `:ok`, `:err`, `:true`, `:false`, `:nil`

only `:false`, `:nil`, and `0` are falsey — `""` and `{}` are truthy

don't create them at runtime. use them to tag tuples:

```ruby
ok(42)             # (:ok, 42)
err(:FileNotFound) # (:err, :FileNotFound)
some(42)           # (:some, 42)
(:none,)           # the none/nothing value

ok?(ok(42))        # :true
none?((:none,))    # :true
ok(42):unwrap()    # 42  — panics on :err
```

revo doesn't have exceptions. errors are just values

## functions

a function is one expression. for multiple steps, wrap them in `do ... end`:

```ruby
fn add(a, b) a + b                  # one-liner
const add = fn(a, b) a + b          # same thing

fn process(a, b) do                 # multiline
    if a < 0 return :none
    let x = a + b
    some(x)
end

fn classify(a) match a              # match as body
    | (:ok, v)  v + 1
    | (:err, _) 0
```

functions are always first-class and always return something — even if that something is `:nil`

closures capture by reference, so mutations are visible across everything sharing that variable:

```ruby
fn make_counter() do
    let x = 0
    fn() do
        x = x + 1
        x
    end
end

const counter = make_counter()
counter()  # 1
counter()  # 2
```

## strings

double-quoted strings process escape sequences. single-quoted strings are completely literal:

```ruby
"hello\nworld"  # newline
'hello\nworld'  # literal backslash-n
```

strings come with methods:

```ruby
"hello":upper()            # "HELLO"
"  hi  ":trim()            # "hi"
"hello":sub(1, 3)          # "ell"
"a,b,c":split(",")         # {"a", "b", "c"}
"hello":find("ll")         # 2, or :missing
"hello":replace("l", "r")  # "herro"
"hello":starts_with("he")  # :true
("abc"):with(1, "X")       # "aXc" — 0-indexed, returns new string
"hello" + " world"         # concatenation
"ha" * 3                   # "hahaha"
```

## tuples

fixed-length, immutable, faster than tables. great for shaped data and return values:

```ruby
const t = (1, 2, 3)
t[0]  # 1

const (x, y) = (10, 20)  # destructuring

fn vector_mul(a, b, factor) (a * factor, b * factor)

const (vx, vy) = vector_mul(4, 6, 2)
print(vx + vy)  # 20
```

# operators

arithmetic and comparison work as you'd expect:

```ruby
1 + 2 * 3  # 7
10 / 2     # 5
-(3 + 4)   # -7

1 < 2      # :true
1 == 1     # :true
1 != 2     # :true
"a" < "b"  # :true — lexicographic
```

`and`/`or` preserve the actual value instead of collapsing to a boolean, which makes them useful
for defaults and guards:

```ruby
1 and 2    # 2
0 or 9     # 9
0 and 999  # 0 — short-circuit
1 or 999   # 1 — short-circuit
not :false # :true
```

assignment operators work as expected and return the rhs, so you can chain or embed them:

```ruby
let a = 41
a += 1         # 42
a -= 1  a *= 2  a /= 2

let y = (x = 42)  # y is 42
```

# control flow

## if

`if` is an expression — it returns the value of whichever branch ran:

```ruby
const label = if score >= 90 "A" else "B"

const a = if 1 == 1
    5
else
    42
print(a)  # 5
```

## loop, while, for

```ruby
# loop runs forever until break
const result = loop do
    if x < 10
        x = x + 1
    else
        break(x)  # break takes a value
end

# while is the familiar kind
let y = 0
while y < 5 do
    y = y + 1
end

# 0..n = 0, 1, ..., n-1 (exclusive end)
let sum = 0
for i in 0..5 do
    sum = sum + i
end
print(sum)  # 15
```

## match

match arms are expressions. use `_` as a wildcard, and `when` for guards:

```ruby
const label = match x
    | 1 "one"
    | 2 "two"
    | _ "other"

const tier = match score
    | v when v >= 90 "A"
    | v when v >= 70 "B"
    | v              "C"

# the main event — result types
match safe_div(10, 0)
    | (:ok, v)  print(v)
    | (:err, e) print(fmt("error: %v", e))
```

# pipe operator

`|>` passes a value as the first argument to the next call. chains read left to right:

```ruby
const double  = fn(x) x * 2
const add_one = fn(x) x + 1

21 |> double      # 42
"hello" |> print

5 |> add_one |> double  # 12
```

# iteration

`map`, `filter`, `reduce`, `each`, `find`, `all`, and `any` work on strings, tuples, and tables:

```ruby
map((1, 2, 3), fn(x) x * 2)               # (2, 4, 6)
filter("hello", fn(c) c != "l")            # "heo"
reduce((1,2,3,4), fn(acc, x) acc + x, 0)  # 10
each({a=1, b=2}, fn(v) print(v))           # side effects, :ok
find((1,2,3,4), fn(x) x > 2)              # 3
all((1,2,3), fn(x) x > 0)                 # :true
any((1,2,3), fn(x) x > 2)                 # :true
```

# metatables

metatables let you customize table behavior through metamethods:

```ruby
const mt = {
    __tostring = fn(self) "MyObj",
    __display  = fn(self) "MyObj",  # used by fmt %v, falls back to __tostring
    __len      = fn(self) 42,
    __add      = fn(a, b) 100,
    __index    = fn(self, key) 0,         # missing field fallback
    __newindex = fn(self, key, val) nil,  # intercept assignment
}
const t = set_metatable({}, mt)

len(t)     # 42
t + 5      # 100
t.missing  # 0
```

plain fields resolve before `__index`, and so do metatable methods — which is how `:method()` works without any extra magic:

```ruby
const mt = {get_x = fn(self) self.x}
const t = set_metatable({x = 12}, mt)
t:get_x()  # 12
```

# fibers and channels

fibers are cooperative, not preemptive. the main fiber runs first, the run queue is FIFO

`spawn` starts a new fiber. `join` blocks until it's done and returns the result:

```ruby
const h = spawn add(20, 22)
join(h)  # 42
```

channels coordinate fibers. unbuffered (`chan(0)`) blocks the sender until a receiver is ready. buffered blocks only when full:

```ruby
# unbuffered
const ch = chan(0)
const s = spawn fn(c) send(c, 42) (ch)
recv(ch)  # 42
join(s)

# buffered — send up to capacity without blocking
const bch = chan(2)
send(bch, 10)
send(bch, 32)
recv(bch) + recv(bch)  # 42
```

`yield` suspends the current fiber and pushes it to the back of the run queue. `sleep(ms)` parks it without blocking others:

```ruby
yield        # give other fibers a turn
sleep(100)   # wait 100ms
```

# stdlib modules

a few modules are available as globals:

`fs` — file and directory access:

```ruby
let f = fs.open("./README.md"):unwrap()
let data = f:read()
f:close()

let dir = fs.open("./src"):unwrap()
let entries = dir:readdir():unwrap()
dir:close()

let stat = fs.open("./README.md"):unwrap():stat():unwrap()
stat.size  # bytes
stat.kind  # :file or :dir
```

`net` — tcp sockets:

```ruby
# server
const listener = net.listen(1337)
const client   = net.accept(listener)
const data     = net.recv(client)
net.send(client, data)
net.close(client)

# client
const conn = net.connect("127.0.0.1", 1337)
net.send(conn, "hello")
const reply = net.recv(conn)
net.close(conn)
```

`os` — system access (stdin, env, etc.)

`@eval` — evaluate a string as revo code at runtime:

```ruby
@eval("print(1 + 2)")  # 3
```

# imports

`import` loads and caches a module — the same path always returns the same table:

```ruby
# counter.rv
let count = 0
{count = count}  # last expression is the module's exported value

# main.rv
const a = import "counter"
a.count = 41
const b = import "counter"
print(b.count)  # 41 — same cached table
```

module-level `let`/`const` are private. only the returned value is shared

# comptime

`comp` runs an expression at compile time and bakes the result into the bytecode:

```ruby
const LIMIT = comp (1024 * 1024)
print(comp ("prefix_" + "suffix"))  # prefix_suffix
print(comp (1 < 2))                 # :true
print(comp io.read())               # runs only at compile time, never at runtime
```

# macros

macros are compile-time transformers. they pattern-match syntax and rewrite it — zero runtime cost:

```ruby
# macro `pattern` `template`
# %e:expr  — any expression
# %n:ident — an identifier
# %s:str   — a string literal

const unless! = macro `(%cond:expr %body:expr)` `if %cond :nil else %body`
unless!(5 < 0, :positive)  # :positive

# repetition groups
# %GROUP(...)* — zero or more
# %GROUP(...)+ — one or more
# %GROUP(...)? — optional

const sum_all! = macro `(%first:expr %REST(%item:expr)*)` `%first %REST(+ %item)`
sum_all!(10, 15, 17)  # 42
```

some macros are preloaded:

```ruby
unless!(:false, 42)                  # 42
all_true!(1, :true, "t", 1)          # :true
all_true!(1, :true, "t", 1, :false)  # :false
```
