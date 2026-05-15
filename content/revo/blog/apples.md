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
{{% date %}}
{{< codeberg user="lung" repo="revo" >}}

  </div>
</div>

> software that doesn't hate you
[-> what it looks like](#what-that-looks-like-in-practice)

many cool and interesting ideas go unimplemented. we have enough compute to build ourselves something we've always wanted at the cost of performance, but we often prefer to pay that same price to make something generally disliked, and then to patch holes in it

lua has been my favourite language for a bit, and i could not for the life of me figure out why that is. it's precisely the fact that it's not "the best" at anything that made it confusing.

i think this whole time the reason was

# the death of the general-purpose programming language

few projects today are Python, Go, or C++. largely because those aren't necessarily **the best** at any one thing. and how can you get people to use something that isnt the best?

,,,but that's why i love them. you can sit down, and, start-to-finish, just do your the damn thing without thinking about the 50 different implementations of http/2 (or thinking about making a new one). you can expect not to get limited by the things that make them the best.

in go, you can make any piece of software and have a blast while doing so - because the people who are developing the language are best friends with those making the lsp, the best http implementation, the image processer and the build/test systems

everyone loves to hate on notch’s decision to use java for minecraft, but really, the game wouldn't exist today if had he started in c++. java is a dynamic (yes, at runtime), garbage-collected, bytecode language with a rich standard library. it's cross-platform by default. it lets you ignore the details because they really don't matter for your usecase and, again, just build the damn thing. you can decompile a java program to mod it or literally make classes at runtime

and only then, 17 years later, when the decision is already proven, when everybody has already enjoyed the same jar file on configurations unheard of, with less untraceable bugs to deal with at the cost of running at 400fps instead of 700, move from opengl to vulkan

you can just prove so many ideas, quickly

so java is the best language! well, not for everybody, but it served notch's project and community the best

a model general-purpose is good more often because it isn't hostile toward any specific use case. it gets you a hearty soup with a side dish. it makes more sense to make *a luajit*, *the `std/http`*, *the game engine*, *the gopls* as first-party bits of the ecosystem because there are already people who want to make them and they are only going to die with the language itself

what i'm saying is, **don't start a webdev project in rust**

---

in contrast, it's super difficult to get the word out there for a language that isn't so special, one that isn't the best at something specific. don't get me wrong, i love zig and gleam, but i wouldn't spend 100 hours on gleam today like i would on even lua. because there is less about those 100 hours and what comes after

and Odin has inspired me a lot. they know you want to user raylib, so they just give you the raylib. and why not! it costs nothing and it makes everybody involved just happier

this also very much applies to the little things about zig. it's llvm, so it makes sense to just let you cross-compile. you can always type in `zig std` and have a full manual in your browser. i'd even go offline on purpose and only orient on that. and that's the bit about making use of all you got, if something is in the language, is very compact or easy to implement, just do it. don't make me worry about 50 json implementations with 50 different apis. if the stdlib exists, it should be a handful of obvious globals: `fs`, `net`, `json`, `time`, and the string/table helpers. you have them so quit being greedy and let me have them too

the real power, though, is balancing the whole "batteries-included"ness with semantic freedom.
when something is written in an unbalanced language, today that just means people will maintain it with ai. i want people to have both the artisanal and result-oriented loops go on

it shouldn't make you write good code by making it difficult to write any code

ok, so what is an unbalanced language?

<div style="display:flex; gap:1rem; flex-wrap:wrap;">
  <div style="flex:1">

# dogmatism
is a space, and to describe a language's design is to put where you stand on it.

that position is a set of sums of the values of those decisions

in software, the tree starts at a decision to create that software to make and ends even beyond Lovelace's findings

nobody can set hard binaries on general decisions, and all you can do is pick a position inbetween, e.g.:
go is both "more static" than lisp, but "more dynamic" than haskell, it blurs the line by having the `any` type
, rust is purposefully not the safest possible language, because taking away `unsafe` not takes away but narrows the limits of other sliders - control, applicability (via ffi), and performance
  </div>
  <pre>

```txt
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

some values are clearly better than others - having a standard LSP, a standard package manager, potentially lifts the skill ceiling and tooling complexity (both depending on their respective trees), but the difference is negligible in comparison to the added benefits
, any radical difference between ideas is a difference of choice at the top of the tree. any experiment is making the best choices along picking

and to have a well-defined language is to get to the bottom of those trees

carelessly yanking those sliders is what throws off the ever so important balance,
which is why javascript-with-ecosystem is considered so complex

# linguistics
intersect deeply

**i could never let go of the fact that perl was created by a linguist**

i like natural languages a lot. i had to adopt three languages as native and now i have to do a fourth one. i've always loved moving words around, putting them into structures that rhyme. and some extra special structures could be sorta incoherent but interesting, counting syllables to make it all flow just a little nicer. making sentences that don't look like they compile. but they do

and we're all doing that unconciously. isn't it beautiful? things just cascade and imply eachother naturally

any language has prose and poetry. they all have structure and melody, flow and rhyme, arms and legs, and etc.

and i love the well-defined c and lua. while both being the fastest in their respective categories,

`while (*t++ = *s++) ;;` is incoherent to someone who doesn't speak C, but natural in it and its' sister- and children- languages once you get to know it
in analogy, Typescript to Javascript is what legalese english is to common english

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
        return Some(x.value)
    end,
    case(nil) >> None,
}
```

what makes every bit of this possible? what does it even do and how would you implement this yourself?

but notice that this is not the lua code you're used to reading. this is because it doesn't force you to do it, it's just fine without it. it already gives you a good set of procedural fundamentals which you can, without internet access, just mess around with and find out.

--- 
## in English, the word "run" has over 645 meanings, while there is no common word for "the day after tomorrow"
in C, the type `void*` has infinite meanings, but there is no universally implemented `defer` keyword

Toki Pona will have you verbosely describe words equivalent to one chinese logograph, every time, until "God be with ye" turns into "goodbye"

i believe that the more clear, **non-overlapping** goals your fundamentals achieve, the simpler your language becomes, the less the user has a need to allocate a table for a switch statement

the less meanings you assign to `static`, the clearer small bits of code become

# addition as subtraction

the good thing about doing the base part completely from scratch is that you get to think out concrete models which everything else will be based upon later. without accumulating 30-40 years of debt. none of us got the choice to pick esperanto as our native language

this is what i think simplicity really is about

> perfection is not when theres nothing left to add but when there's nothing left to take away

but what do you consider an addition? if you can't print tables, sorry, that's an addition: people will just do it on their own out of necessity. and they're not just gonna get together do it once either

this gets worse than having to install a second (after your distrubution's) package manager - consider C ecosystem's meta-meta-build systems, lack of standard deferred cleanup until C29, and the non-existing namespacing
all of these have been fought tooth and nail to add

and it's too late: win32 will always have a `HGDIOBJ` type, you will need multiple build- and meta-build- systems installed on your machine for 20 more years. just a massive headache for everyone involved

```txt
# TODO section on readability
shape recognition, pattern matching, semantic freedom, significance of syntax highlighting and how do-end vs no do-end shape all above and replaces and functional-ness, argument for lua's long "function" keyword, argument against multiple same-level fn defs (in overrides and pattern matching)
```

---

## where this comes from

this is effectively [a lua library](https://github.com/if-not-nil/soup)'s sibling, because modifying the Lua VM to use fibers, atoms and tuples, and making the associated decisions, is rebuilding the whole thing

---

# what that looks like in practice

**structs, methods, control flow, concurrency**

```ruby
struct Version {
    major: number,
    minor: number,
    fn is_beta(self) self.major < 1,
    fn of_string(str) do
        const res = str:split(".")
        |> map(fn(c) tonumber(c):unwrap())

        return (:ok, Version{major = res[0], minor = res[1]})
    end,
    fn to_string(self) fmt("%v.%v", self.major, self.minor)
}

suite "semver" do
    test "parses" do
        const v = Version.of_string("1.2"):unwrap()
        expect!(v.major == 1)
        expect!(v.minor == 2)
    end
    test ""
end

let c = chan()

fn worker(n) do
    sleep(n * 50)
    send(c, n * 10)
end

for i in 0..10
    spawn worker(i)

loop match recv(c)
     | 90 break()
     | x print("<- %v", x)
```

---

## the principles

**everything is an expression**

returning values by default is surprisingly effective in keeping flow composable and predictable. assignments and most control forms produce values, so `:nil` is the explicit case rather than the default

and what does it hurt you to return something actually useful! `:nil` or `:ok` costs just as much as anything else! you already do this when returning proper HTTP status codes

that makes this snippet only natural

```ruby
struct Counter {
  count: number = 0,

  fn inc(self) do
      self.count += 1,
  end,
  fn val(self) do
      return self.count
  end,
}

let c = Counter{count = 5}
c:inc() # 6
assert!(c:inc() == c:val())
```

`inc()/1`'s last node is an assignment, which you can only expect to return its right-hand. with that, `:nil` is the explicit one, not the other way around

and that means we can build on that! so, every piece of control flow can be reasoned about through just expressions and bindings

**which then led me to write a lisp** (and scrap it once i had to maintain it). but it's possible!

here is me in my early notes banging my head on the wall while making `3 = 5` possible

```ruby
(let (+ 1 2) 5) # let 3 = 5
# is equivalent to
# here, let:fn()/2; 1: num, +: fn()/2, 2: num, 5: num
let (1 + 2) 5
# 5 + 1 is not 6, it's [num, fn, num]
let (1 + 2) 5 + 1
```

---

**take advantage of every decision thoroughly**

if you're dynamic, just make the best of it rather than pretending to be static. you're missing out otherwise

that gives you safety for free, which you can then trade for ergonomics. if you already decided to have tuples, tables and atoms, you turn down the need a runtime type system. something to satisfy the programmer's need for it

which is how you have tagged unions and structs! structs are just wrappers over tables. and all tagged unions are just tuples and atoms

isn't it beautiful

---

**no unnecessary edge cases**

everything can be written in one line and all whitespace is equal. i even made semicolons illegal in case they might want to appear somewhere else later. functions don't accept anything special, they just accept an expression. multiple of which can be composed with a do...end

this is the same for all control flow and is what i really love about c. this is as far as i could get before finally caving in and reusing the squiggly bracket syntax

```ruby
const a = {1,2,3}
# tables cant have this
struct Point { a: number = 5, fn asdf() 5 }

Point({a = 7})
# and this is only possible because you don't have to use
# parens when the first argument is a table or string literal
Point{a = 6}
```

i really tried to make it glaringly obvious when special syntax occurs

---

**no ideology**

```ruby
const x =
    # asks for input at build
    # then keeps the result at run
    match io:read():unwrap() |> string.upper
    | "HELLO" when io:read:unwrap():len() < 2
        {}:set_meta({
            __index = fn(self, k) k * 2
        })
    | x
    when do
        let u = x:upper() 
        string?(x) and u == x
    end do
        :ok
    end
```

yeah maybe this is stupid. but isn't it cool? the fact you can still read it

and this applies to everything

---

**a rich standard library**

you should always have the best http client and server just there. because otherwise, the effort of 100 people will be split across 5 implementations, making them 5 times less tested and optimized

people WILL write everything they can in the language they like, because that's the best way to actually finish it

---

## what you'll enjoy

**the flow**

it's important you give implicit returns, pipes, tuples, matching and one-liners a shot
once you do, they're really nice

**embed, extend, finish**

of course, it's best with Zig, but it's comparably easy to make and use C code that gives you regular-looking functions. it's trivial to just compile the library as `liberevo.a` and put it somewhere along with a header as an embedded language

there are some caveats of course (this doesn't yet work on wasm and the c api does not cover the 100%), but they are a matter of time spent. contributions always welcome!

---

## weird takeaways

many of these are ones i already had and only got confirmed, but the most controversial ones are:

**write docs first**

it's like you solve a maze by going from the exit to the start. very introspective and helps you really think of what it's gonna feel like before even doing it

also helps them not be an afterthought

---

**use less pointers**

handles are severely underused, and are especially helpful in languages with distinct integer type aliases like odin

55 pointers into a slice will die on reallocating that slice, while 55 indices auxilary to the slice will require you to always provide the information necessary to access it. a handle will be scoped to an object, which makes it just a little bit easier to reason about

a slice can reasonably be assumed not to exceed a length of 2 billion items, which makes it possible to cut down the length of what would otherwise be 32b/64b to 32b

cutting down the length of something is, of course, not usually important by itself, but in terse contexts it could kinda improve cache performance

---

**ignore allocated memory**

you will often see C++ code which allocates small objects and destroys them right after they stop being used. and \[de\]allocation, like many other syscalls, is one of the most expensive operations you can do

this is my biggest problem with OOP, the fact that you're only encouraged to use one way of managing memory (and never told about others). i also believe that's why many use rust is so attractive to those who learned C++ by 90s books, because fighting to allocate and free many small objects separately (which you have already established to be the only way to manage memory), seems much more attractive. which, combined with the fact you're expected to track all lifetimes by hand, is why manual memory management is presented as so daunting

but it doesn't have to be this way!

the only advantage you're getting from it is the fact that you end up using less memory. which is not important at all in the context of a procedure that ends up allocating less than 16mb in less than 10ms

and this is what arenas really are useful for! you can save about a thousand CPU cycles per syscall, which is massive in structures like parsers or lexers that allocate a ton of <64B objects and just free them at the end. this also guarantees all memory under the allocator has a clear and simple lifetime, starting and ending in one place

when you think deeper about allocators on your own, you might get some ideas, most of which already exist in zig

```zig
var buf: [1024]u8 = undefined;
std.heap.FixedBufferAllocator.init(&buf); // uses buf as the allocator space,
                                          // doesn't even require your kernel to implement heap

std.heap.stackFallback(8, gpa); // tries to use 8 bytes of space on the stack, otherwise falls back to gpa of Allocator
```

---

**overscope**

it's only overscoping if it blocks you. provision everything, make stubs, leave space, just delete it later. most code written does not matter and you'll never know otherwise

rewritten code is just better in general, because you did all the thinking beforehand and the second pass is only forcing yourself to refactor
