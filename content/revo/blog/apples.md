---
date: '2026-05-05T22:07:13+03:00'
title: 'revo, the programming language'
---
<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⢔⣒⠂⣀⣀⣤⣄⣀⠀⠀
⠀⠀⠀⠀⠀⠀⣴⣿⠋⢠⣟⡼⣷⠼⣎⣼⢇⣿⣄⠱⣄
⠀⠀⠀⠀⠀⠀⠹⣿⡀⣆⠙⠢⠐⠉⠉⣴⣾⣽⢟⡰⠃
⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣦⠀⠤⢴⣿⠿⢋⣴⡏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⡙⠻⣿⣶⣦⣭⣉⠁⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠈⠉⠉⠉⠉⠇⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠀⠀⣘⣦⣀⠀⠀⣀⡴⠊⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⢻⣿⣿⣿⣿⠻⣧⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠫⣿⠉⠻⣇⠘⠓⠂⣀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠈⠉⠉⠉⠀⡠
⢶⣾⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠈⠀
⠀⠹⣿⣿⣿⣿⣿⣿⣿⣧⠀⢸⣿⠀⠀⠀⠀⢀⠆⠀⠀
⠀⠀⠈⠙⠻⢿⣿⣿⠿⠛⣄⢸⡇⠀⠀⡀⠀⠈⢀⠀⢨
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⢦⣃
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
  </pre>
  <div style="flex:1; min-width:250px;">

# revo, the programming language

> software that doesn't hate you

[-> take a look at examples first](../..)
  </div>
</div>
<details>
<summary>toc</summary>

- [revo, the programming language](#revo-the-programming-language)
- [the death of the general-purpose programming language](#the-death-of-the-general-purpose-programming-language)
- [the general purpose programming language](#the-general-purpose-programming-language)
- [dogmatism](#dogmatism)
- [linguistics](#linguistics)
- [addition as subtraction](#addition-as-subtraction)
   * [where this comes from](#where-this-comes-from)
- [so for revo](#so-for-revo)
   * [semantic freedom](#semantic-freedom)
   * [everything is an expression](#everything-is-an-expression)
   * [pipes chain values naturally](#pipes-chain-values-naturally)
   * [pattern matching](#pattern-matching)
   * [errors as values](#errors-as-values)
   * [no unnecessary edge cases](#no-unnecessary-edge-cases)
- [async concurrency without threads](#async-concurrency-without-threads)
   * [a rich standard library](#a-rich-standard-library)
   * [the atoms & the tuples](#the-atoms-the-tuples)
   * [tables](#tables)
   * [c ffi](#c-ffi)
   * [macros](#macros)
   * [optional static typing](#optional-static-typing)
   * [first-class tests](#first-class-tests)
   * [bytecode compilation](#bytecode-compilation)
   * [tooling](#tooling)
- [so](#so)
</details>

many cool and interesting ideas go unimplemented. we have enough compute to build ourselves something we've always wanted at the cost of performance, but we often prefer to pay that same price to make something generally disliked, and then to patch holes in it

lua has been my favourite language for a bit, and i could not for the life of me figure out why that is. it's precisely the fact that it's not "the best" at anything that made it confusing

i think this whole time the reason was:

# the death of the general-purpose programming language

a python or a ruby are not the inspiration anymore, because they're not **the best** at a given, concrete thing

it's not common to give you a minimum viable set of fundamentals done just the right way, where the same tool lets you write a script, a web server, and have a blast doing so start-to-finish. it's very important that a project gets done

it's very important to me that you don't start your weekend project with a rewrite in mind (or rewrite it midway through)
it's very important to me that your small script is copy-pasteable, declaring external dependencies inside of itself without spanning multiple files
it's very important to me that when your project grows, you can still keep it structured

Rails wasn't started because Ruby won a ton of benchmarks, it's just what the creator liked writing code and getting things done in, which then proved true for its' users too

minecraft was not started in c++ -- java was just the familiar thing. it let notch share a single `.jar` file to people on configurations unheard of, letting those people load their classes in at runtime

you can just prove so many ideas, quickly!

it's important to me you wake up tomorrow and don't dread finishing yesterday's cool thing

# the general purpose programming language
...is for those who don't enjoy external testing libraries or js frontend frameworks

a model general-purpose programming language is not necessarily *more good* but *good more*

i've gladly spent hundreds of hours on zig and lua, and i would happily do it for rust any day, but there's less about what comes after.
when i get nerdsniped tomorrow, i'll pick different tools for a cli program, an http testing framework, a macro, a text format parser, and a server

but there's a new ideology!

odin knows you want to use raylib, so they just give you raylib. and why not? it costs nothing and it makes everybody involved just happier

zig just gives you a formatter, a build system, an outstanding testing framework, and even a json parser -- just a great toolchain all around. it doesn't force you to use codegen, because they know metaprogramming is important.
run `zig std` right now

it helps a lot not to have 50 different implementations of the same thing. you can just not use it if you don't need it, and it won't be split between fifty different groups

when something is written in an unbalanced language, today that just means people will maintain it with ai. i want people to have both the artisanal and result-oriented loops go on

it shouldn't make you write good code by making it difficult to write any code. most of your code doesn't need to be zerocost
let me instead give you a nice set of syntax in which you can represent nice things

ok, so what is an unbalanced language?

<div style="display:flex; gap:1rem; flex-wrap:wrap;">
  <div style="flex:1">

# dogmatism

is a space, and to describe a language's design is to put where you stand on it

that position is a set of sums of the values of those decisions

in software, the tree starts at a decision to create that software and ends even beyond lovelace's findings

nobody can set hard binaries on general decisions, and all you can do is pick a position inbetween. go is both "more static" than lisp but "more dynamic" than haskell, blurring the line by having the `any` type

rust is purposefully not the safest possible language, because taking away `unsafe` narrows the limits of other sliders - control, applicability via ffi, and performance
  </div>
  <pre>

```markdown
...
- have modules?
 - [yes] pulled from?
  - [web and local]
   - store local/global?
    - [yes] cache per-user/per-system?
    - [no] ...
   - store compiled?
    - ...
  - [local only] ...
  - [web only(?)] ...
  - [ai generated on the fly(?)] ...
  - ...
 - [no] ...
...
```
  </pre>
</div>

any fundamental decision a project makes lies in evaluating how to best adjust those sliders

some values are clearly better than others - having a standard lsp or a standard package manager potentially lifts the skill ceiling and tooling complexity, but the difference is negligible in comparison to the added benefits

any radical difference between ideas is a difference of choice at the top of the tree. any experiment is making the best choices along picking

and to have a well-defined language is to get to the bottom of those trees

carelessly yanking those sliders is what throws off the ever so important balance, which is why javascript-with-ecosystem is considered so complex

an opensource project with a diverse community is the best way to either establish a configuration the right way or defer until the right way is sure

it's important you be careful with the process of adopting a decision that's already worked out somewhere else

# linguistics

intersect deeply

**i could never let go of the fact that perl was created by a linguist**

i like natural languages a lot. i had to adopt three languages as native and now i have to do a fourth one. i've always loved moving words around, putting them into structures that rhyme

some extra special structures could be sorta incoherent but interesting, counting syllables to make it all flow just a little nicer - making sentences that don't look like they compile, but they do

and we're all doing that unconsciously. isn't it beautiful? things just cascade and imply each other naturally

any language has prose and poetry. they all have structure and melody, flow and rhyme, arms and legs, and etc

and i love the well-defined c and lua, both being the fastest in their respective categories

`while (*t++ = *s++) ;;` is incoherent to someone who doesn't speak c, but natural in it and its sister languages once you get to know it

in analogy, typescript to javascript is what legalese english is to common english

and for lua, especially, much of the beauty comes from understanding something like this:

```lua
local res = switch{
    "hi",
    case("hi") >> function()
        local x <close> =
            open_all{ "file.txt", "other.txt", delim = "===" }
              % function(v) return v.read end
              % string.upper
              % string.reverse
              % nil

        _ = cout << x.value << endl
        return some(x.value)
    end,
    case(nil) >> none,
}
```

what makes every bit of this possible? what does it even do, and how would you implement this yourself?

but notice that this is not the lua code you're used to reading. this is because it doesn't force you to do it, it's just fine without it. it already gives you a good set of procedural fundamentals which you can, without internet access, just mess around with and find out

## in english, the word "run" has over 645 meanings, while there is no common word for "the day after tomorrow"
we love toki pona for the efforts not to let nature take over

in c, the type `void*` has infinite meanings, but there is no universally implemented `defer` keyword

proto-indo-european had you verbosely describe words equivalent to one chinese logograph, every time, until "god be with ye" turned into "goodbye"

i believe that the more clear, **non-overlapping** goals your fundamentals achieve, the simpler your language becomes, the less the user has a need to allocate a table for a switch statement

the less meanings you assign to `static`, the clearer small bits of code become

# addition as subtraction

the good thing about doing the base part completely from scratch is that you get to think out concrete models which everything else will be based upon later, without accumulating 30-40 years of debt. none of us get to pick esperanto as our native language

this is what i think simplicity really is about
> perfection is not when theres nothing left to add but when there's nothing left to take away

but what do you consider an addition? if you can't print tables - sorry, that's an addition. people will just do it on their own out of necessity, and they're not just gonna get together and do it once either

this gets worse than having to install a second package manager - consider the c ecosystem's meta-meta-build systems, the lack of standard deferred cleanup until c29, and non-existent namespacing

all of these have been fought tooth and nail to add

and it's too late: win32 will always have a `HGDIOBJ` type, you will need multiple build and meta-build systems installed on your machine for 20 more years. just a massive headache for everyone involved

it's important keep things as simple as possible, but not more

## where this comes from

this is effectively [a lua library](https://github.com/if-not-nil/soup)'s sibling, because modifying the lua vm to use fibers, atoms and tuples, and making the associated decisions, is rebuilding the whole thing

# so for revo

## semantic freedom

the bare minimum for a function is a signature and a body

```ruby
fn(x) x * 2
```

often, you want it to execute multiple expressions. a do-end block is not specific to loops or functions - it's a generic piece of syntax that binds multiple expressions together and evaluates to its last expression

```ruby
fn(x) do
  let a = x * 2
  a
end

# or, return explicitly
fn(x) do
  if x == 0 return 0
  let a = x * 2
  return a
end
```

then, you sometimes need to bind it

```ruby
const double = fn(x) x * 2

# or the sugared version
fn double(x) x * 2

let tbl = {}
fn tbl.double(x) x * 2
```

that's it. they're separate pieces of the language with no special cases. and since all functions are anonymous:

```ruby
"hello" |> inspect
21 |> double
```

multiline strings do not really need to exist either. a newline is skipped, so:

```ruby
"a b
c"
```

is perfectly valid, and:

```ruby
do
  let a = """
  hello
  world
  """
end
```

just trims leading whitespace

pipe passes a value as the first argument, but pipe only works because everything returns something. assignments return values. control flow returns values. even blocks return values. the only exceptions are values you just can't possibly use - `return` and `break`

## everything is an expression

returning values by default is surprisingly effective in keeping flow composable and predictable. assignments and most control forms produce values, so `:nil` is the explicit case rather than the default

and what does it hurt you to return something actually useful? `:nil` or `:ok` costs just as much as anything else - you already do this when returning proper http status codes

```ruby
(let a = 41) == 41
(a += 1) == 42
(do 1 2 3 end) == 3

let b = while :true do
  if a >= 50 break
  a += 1
end
b == 50
```

and that means we can build on that! so, every piece of control flow can be reasoned about through just expressions and bindings

## pipes chain values naturally

pass values forward like unix pipes. they compose with error handling too

```ruby
tonumber("42")
  |> bind(fn(n) n + 1)  # only runs if ok
  |> or_else(fn(err) 0) # only runs if err
  |> assert_eq(42)
```

## pattern matching

match against any shape

```ruby
match result
  | (:ok, v) when v > 0 "positive"
  | (:ok, v)            "zero or negative"
  | (:err, :notfound)   "not found"
  | (:err, e)           fmt("error: %v", e)
```

## errors as values

no exceptions hiding in your code. i use `(:ok, value)` and `(:err, reason)` tuples with pattern matching. the `?` operator propagates errors up, `orelse` gives defaults

```ruby
fn load_config(path) do
  const f = fs.open(path)?
  const raw = f:read() orelse "<none>"
  parse_json(raw)?
end
```

## no unnecessary edge cases

everything can be written in one line and all whitespace is equal. i even made semicolons illegal in case they might want to appear somewhere else later. functions don't accept anything special, they just accept an expression; multiple of which can be composed with a do...end

this is the same for all control flow and is what i really love about c

```ruby
"hello" |> print

fn double(x) x * 2
21 |> double

const (x, y) = (10, 20)
```

i really tried to make it glaringly obvious when special syntax occurs

# async concurrency without threads

your blocking code is actually async

revo runs fibers cooperatively! when a fiber hits i/o, it parks; the scheduler runs another ready fiber. when i/o completes, the fiber wakes up. this does not require threads - though the posix backend can spawn worker threads under the hood to handle 41k requests/second

```ruby
fn serve(peer) do
  while :true do
    peer:send("$ ")
    match peer:recv({ mode = :read_line })
    | (:ok, "exit") do
        peer:send("goodbye\n")?
        peer:close()?
        return :nil
      end
    | (:ok, "ping") do
        peer:send("pong\n")?
      end
    | (:ok, line) do
        peer:send(line + "\n")?
      end
    | (:err, :socketclosed) do
        peer:close()?
        return :nil
      end
    | (:err, reason) do
        print!("recv failed: %s", tostring(reason))
        peer:close()?
        return :nil
      end
  end
end

const server = net.listen(6767)?
while :true do
  let conn = server:accept()?
  spawn serve(conn)
end
```

that `spawn` call is all you need to run infinite clients; they all work with no callbacks, no await keywords, no thread pool config

channels coordinate fibers. send and recv block cleanly - when one side isn't ready, it parks without blocking others

```ruby
const ch = chan(4)
spawn fn() do
  for i in 0..4
    send(ch, i * i)
end

for _ in 0..4
  print(recv(ch))
```

## a rich standard library

you should always have the best http client and server just there. because otherwise, the effort of 100 people will be split across 5 implementations, and you dont want that

people will write everything they can in the language they like, because that's the best way to actually finish it. and there's no shame in giving them the means to do that

```ruby
const config = 
  fs.open("config.json")?
  |> fn(f) f:read()?
  |> json.decode()?

const co = spawn fn() do
  const conn = net.connect(config.host, config.port)?
  const resp = net.send(conn, "hello")?
  net.close(conn)?
  return resp
end

const result = join(co)
```

while more complex packages, like generic game engines and web frameworks should at least exist as second-party

## the atoms & the tuples

fixed-shape, immutable data! the advantage is not as much safety as it is predictability -- all possible atoms in a module are known at compile-time, and so are tuple lengths

this is what really makes error handling predictable and allows for gradual typing, once someone experienced enough feels like implementing that

```ruby
const point = (10, 20)
const (x, y) = point

fn vector_mul(a, b, factor) do
  (a * factor, b * factor)
end

const (vx, vy) = vector_mul(4, 6, 2)
```

so take a look for yourself! any contributions are welcome, the project has been a massive effort to keep sane. help it get where it wants to get. thanks for telling a friend!

## tables

tables are lua's best feature! but nobody cares

they represent arrays, maps, and modules exports (for now). structs are their own whole thing

i've always used them to replace my toml/json/yaml/whatever configs, and i believe it's an even
better deal now with revo's macros and extensions.

it also has metatables! the most significant are __tostring (rust's Display), __debug (rust's Debug)
, __index and __newindex for get-set

there are no data structures you can't represent with them

## c ffi

this might be by far the most useful feature. embedding into zig and c is first-class,
and c interop is two-way. like you can call C in revo, and call revo in C

this is surprisingly convenient, with the only tradeoff being that you'll have to use an already-compiled revo
executable in c

## macros

proc macros are really cool:
```ruby
proc print!(iter) do
  let fmt = iter:next_of(:string)
  let args = {}
  let i = 0
  args[i] = (:string, fmt)
  i += 1
  while iter:peek() != :nil do
    args[i] = iter:next()
    i += 1
  end
  {(:call, (:ident, "print"), {(:call, (:ident, "fmt"), args, :false)}, :false)}
end

print!("hello, %v!", "world")
```
i made them require valid AST and parens so that they wouldn't turn your codebase into DSL, but i might
actually just let you have the whole build pipeline in them, if it doesn't end up being a horrible idea

normal macros exist, too! they're much simpler and operate on normal AST
,,,very alike rust's macro_rules

```ruby
macro `(%fmt:str %ARGS(, %arg:expr)*)` `(print(fmt(%fmt %ARGS(, %arg))))`
```

## optional static typing

```ruby
type Status = :done|:in_progress|:cancelled

fn get_status() -> Result
    :done

# question mark implies `-> bool`
fn is_done?(status)
    status == done
```
i've loved godot's optional typing to pieces, and this the end goal here is to have that and more

what's different is the first-classness of it

dynamic code works just fine, but becomes faster and safer when typed. the program doesn't compile
on a type error, and type information is inferred when possible. even if you write fully dynamic code,
you still get some of that safety, entirely for free

```ruby
struct User {
  name: string = "me",
  age: number = 222,
  
  fn get_age(self) self.age
}

const u = User{}
print(u:get_age())
```

## first-class tests

when you run a file with `--test`, something happens
```ruby
test "asdf" do
  print("will only get printed with a --test flag")
end

print('this always gets printed')

suite "tests" do
    const message = "this will not get declared without the --test flag"

    test "asdf" do
      print(message)
    end

    test/skip "future feature" do
      print(message)
    end
end
```
because what i've always loved to do is to describe a complex function with tests first, and only 
then think of how i would satisfy them


## bytecode compilation

`revo -b script.rv` gives you a `.rvo` file. and there's a reason for that

the `comp` block will get executed at build time, meaning you can use this for configuration!
or even a build system!

```ruby
const x = comp read()

const y = comp do
    let acc = 0
    for x in 1..1000 do
        acc += x
    end
end
# both execute once at build time, and then everyhing is baked into the .rvo file
# they execute before any other execution even has an opportunity to run at all
```

## tooling

it's, again, very very important that a toolchain is exhaustive. because everyone needs an lsp and
a formatter, so why not just have that out of the box

so i have that. well, at least an LSP

# so
so do take a look at the project! it's very early in development, and you have a lot of say in its direction
