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
{{< header >}}
{{% date %}}
{{< github user="if-not-nil" repo="revo" >}}

software that doesn't hate you
[-> what it looks like](../..)
  </div>
</div>


We have enough compute to build ourselves something we've always wanted at the cost of performance, but we often prefer to pay that same price to make something generally disliked, and then to patch holes in it

Lua has been my favourite language for a bit, and i could not for the life of me figure out why that is. it's precisely the fact that it's not "the best" at anything that made it confusing.

I think this whole time the reason was

# the death of the general-purpose programming language
> You wouldn't memory-manage a shell script

Few projects today are a `Python`, a `Go`, or a `C++.` Largely because those aren't necessarily **the best** at any one thing. And how can you get people to use something that isnt the best?

,,,But that's why i love them. You can sit down, and, start-to-finish, just do your the damn thing without picking one of 50 different implementations of http/2. You can expect not to get limited by the things that make them the best.

In Go, you can make any piece of software and have a blast while doing so - because the people who are developing the language are best friends with those making the LSP, the best HTTP implementation, the image processer and the build/test systems

Everyone loves to hate on Notch’s decision to use java for Minecraft, but really, the game wouldn't exist today if had he started in `C++`. `Java` is a dynamic (yes, at runtime), garbage-collected, bytecode language with a rich standard library. It's cross-platform by default. It lets you ignore the details because they really don't matter for your usecase and, again, just build the damn thing. You can decompile a Java program to mod it or literally make classes at runtime

And only then, 17 years later, when the decision is already proven, when everybody has already enjoyed the same jar file on configurations unheard of, with less untraceable bugs to deal with at the cost of running at 400fps instead of 700, move from OpenGL to Vulkan

You can just prove so many ideas, quickly

So `Java` is the best language! Well, not for everybody, but it served Notch's project and community the best

A model general-purpose is good more often because it isn't hostile toward any specific use case. It gets you a hearty soup with a side dish. It makes more sense to make *`a` LuaJIT*, *`the` std/http*, *`the` game engine*, *`the` gopls* as first-party bits of the ecosystem because there are already people who want to make them and they are only going to die with the language itself

What i'm saying is, **don't start a webdev project in Rust**

---

In contrast, it's super difficult to get the word out there for a language that isn't so special, one that isn't the best at something specific. Don't get me wrong, i love `Zig` and `Gleam`, but I wouldn't spend 100 hours on Gleam today like i would on even `Lua`. Because there is less about those 100 hours and what comes after

And `Odin` has inspired me a lot. They know you want to use `Raylib`, so they just give you the `Raylib`. And why not! It costs nothing and it makes everybody involved just happier

This also very much applies to the little things about `Zig`. It's `LLVM`, so it makes sense to just let you cross-compile. You can always type in `zig std` and have a full manual in your browser. It's not even unreasonable go offline on purpose and only orient on that. And that's the bit about making use of all you got, if something is in the language, is very compact or easy to implement, just do it. Don't make me worry about 50 json implementations with 50 different apis. If the stdlib exists, it should be a handful of obvious globals: `fs`, `net`, `json`, `time`, and the string/table helpers. You have them so quit being greedy and let me have them too

The real power, though, is balancing the whole "batteries-included"ness with semantic freedom.
when something is written in an unbalanced language, today that just means people will maintain it with AI. I want people to have both the artisanal and result-oriented loops go on

It shouldn't make you write good code by making it difficult to write any code

OK, so what is an unbalanced language?

<div style="display:flex; gap:1rem; flex-wrap:wrap;">
  <div style="flex:1">

# Dogmatism
Is a space, and to describe a language's design is to put where you stand on it.

That position is a set of sums of the values of those decisions

In software, the tree starts at a decision to create that software to make and ends even beyond Lovelace's findings

Nobody can set hard binaries on general decisions, and all you can do is pick a position inbetween, e.g.:
go is both "more static" than Lisp, but "more dynamic" than Haskell, it blurs the line by having the `any` type
, Rust is purposefully not the safest possible language, because taking away `unsafe` not takes away but narrows the limits of other sliders - control, applicability (via ffi), and performance
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
Any fundamental decision a project makes lies in evaluating how to best adjust those sliders

Some values are clearly better than others - having a standard LSP, a standard package manager, potentially lifts the skill ceiling and tooling complexity, but the difference is negligible in comparison to the added benefits
, any radical difference between ideas is a difference of choice at the top of the tree. Any experiment is making the best choices along picking

And to have a well-defined language is to get to the bottom of those trees

Carelessly yanking those sliders is what throws off the ever so important balance,
which is why JavaScript-with-ecosystem is considered so complex

# Linguistics
Intersect deeply

**I could never let go of the fact that perl was created by a linguist**

I like natural languages a lot. I had to adopt three languages as native and now i have to do a fourth one. I've always loved moving words around, putting them into structures that rhyme. And some extra special structures could be sorta incoherent but interesting, counting syllables to make it all flow just a little nicer. Making sentences that don't look like they compile. But they do

And we're all doing that unconciously. Isn't it beautiful? things just cascade and imply eachother naturally

Any language has prose and poetry. They all have structure and melody, flow and rhyme, arms and legs, and etc.

And i love the well-defined c and lua. While both being the fastest in their respective categories,

`while (*t++ = *s++) ;;` is incoherent to someone who doesn't speak C, but natural in it and its' sister- and children- languages once you get to know it
in analogy, Typescript to Javascript is what legalese english is to common english

And for Lua, especially, much of the beauty comes from understanding something like this:

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

What makes every bit of this possible? what does it even do and how would you implement this yourself?

But notice that this is not the lua code you're used to reading. This is because it doesn't force you to do it, it's just fine without it. It already gives you a good set of procedural fundamentals which you can, without internet access, just mess around with and find out.

> In English, the word "run" has over 645 meanings, while there is no common word for "the day after tomorrow"
>
> In C, the type `void*` has infinite meanings, but there is no universally implemented `defer` keyword

Toki Pona will have you verbosely describe words equivalent to one chinese logograph, every time, until "God be with ye" turns into "goodbye"

I believe that the more clear, **non-overlapping** goals your fundamentals achieve, the simpler your language becomes, the less the user has a need to allocate a table for a switch statement

The less meanings you assign to `static`, the clearer small bits of code become

# Addition as subtraction

The good thing about doing the base part completely from scratch is that you get to think out concrete models which everything else will be based upon later. Without accumulating 30-40 years of debt. None of us got the choice to pick esperanto as our native language
This is what i think simplicity really is about,

> Perfection is not when theres nothing left to add but when there's nothing left to take away

But what do you consider an addition? If you can't print tables, sorry, that's an addition: people will just do it on their own out of necessity. And they're not just gonna get together do it once either

This gets worse than having to install a second (after your distrubution's) package manager - consider C ecosystem's meta-meta-build systems, lack of standard deferred cleanup until C29, and the non-existing namespacing
All of these have been fought tooth and nail to add

And it's too late: win32 will always have a `HGDIOBJ` type, you will need multiple build- and meta-build- systems installed on your machine for 20 more years. Just a massive headache for everyone involved

```txt
# TODO section on readability
shape recognition, pattern matching, semantic freedom, significance of syntax highlighting and how do-end vs no do-end shape all above and replaces and functional-ness, argument for lua's long "function" keyword, argument against multiple same-level fn defs (in overrides and pattern matching)
```

```txt
# TODO section on accessible testing
it's eaasier to develop
```

# Where this comes from

This is effectively [a Lua library](https://github.com/if-not-nil/soup)'s sibling, because modifying the Lua VM to use fibers, atoms and tuples, and making the associated decisions, is rebuilding the whole thing

# Decisions taken

**Everything is an expression**

returning values by default is surprisingly effective in keeping flow composable and predictable! assignments and most control forms produce values, so `:nil` is the explicit case rather than the default

And what does it hurt you to return something actually useful! `:nil` or `:ok` costs just as much as anything else! you already do this when returning proper HTTP status codes

That makes this snippet only natural

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

`inc()/1`'s last node is an assignment, which you can only expect to return its right-hand. With that, `:nil` is the explicit one, not the other way around

And that means we can build on that! So, every piece of control flow can be reasoned about through just expressions and bindings

---

**Take advantage of every decision thoroughly**

If you're dynamic, just make the best of it rather than pretending to be static. You're missing out otherwise

That gives you safety for free, which you can then trade for ergonomics. If you already decided to have tuples, tables and atoms, you turn down the need for a runtime type system. Something to satisfy the programmer's need for it

which is how you have tagged unions and structs! structs are just wrappers over tables. And all tagged unions are just tuples and atoms

isn't it beautiful

---

**no unnecessary edge cases**

everything can be written in one line and all whitespace is equal. I even made semicolons illegal in case they might want to appear somewhere else later. Functions don't accept anything special, they just accept an expression. Multiple of which can be composed with a do...end

this is the same for all control flow and is what i really love about c. This is as far as i could get before finally caving in and reusing the squiggly bracket syntax

```ruby
const a = {1,2,3}
# tables cant have this
struct Point { a: number = 5, fn asdf() 5 }

Point({a = 7})
# and this is only possible because you don't have to use
# parens when the first argument is a table or string literal
Point{a = 6}
```

I really tried to make it glaringly obvious when special syntax occurs

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

Yeah, maybe this is stupid. But isn't it cool? the fact you can still read it

And this applies to everything

---

**a rich standard library**

you should always have the best http client and server just there. Because otherwise, the effort of 100 people will be split across 5 implementations, making them 5 times less tested and optimized

people WILL write everything they can in the language they like, because that's the best way to actually finish it

---

## what you'll enjoy

**the flow**

it's important you give implicit returns, pipes, tuples, matching and one-liners a shot
once you do, they're really nice

**embed, extend, finish**

of course, it's best with Zig, but it's comparably easy to make and use C code that gives you regular-looking functions. It's trivial to just compile the library as `liberevo.a` and put it somewhere along with a header as an embedded language

there are some caveats of course (this doesn't yet work on wasm and the c api does not cover the 100%), but they are a matter of time spent. Contributions always welcome!

---

## weird takeaways
the most important ones are:

**write docs first**

It's like you solve a maze by going from the exit to the start. Very introspective and helps you really think of what it's gonna feel like before even doing it

Also helps them not be an afterthought

**test**

It's only overscoping if it blocks you. Provision everything, make stubs, leave space, just delete it later. Most code written does not matter and you'll never know otherwise

Rewritten code is just better in general, because you did all the thinking beforehand and the second pass is only forcing yourself to refactor

**overscope**

It's only overscoping if it blocks you. Provision everything, make stubs, leave space, because you can delete it later. Most code written does not matter and you'll never know otherwise

Rewritten code is just an improvement in general, because you already have the retrospective information
