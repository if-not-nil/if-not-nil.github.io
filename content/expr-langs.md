+++
date = '2026-08-25T13:01:09+03:00'
title = "Expression-based languages"
description = "love them to death"
+++

It seems like expression-based languages have become a lost art. We've tragically lost them to the monolithization of the thought in language design. But they still are a fascinating branch of language design that can not go ignored.

By declaring "everything must a value", you give the reader a massively simplified model of reasoning about code. Answers to questions nobody has yet asked started answering themselves, and the answers were reasonable

An expression-based language wants to be malleable, interpreted with an optional type system, and it wants to make as much as possible first-class
It will give you just enough ways of representing data & operating on it to make it comfortable
It will ensure every line of code yields something useful, something loggable and debuggable

The MLs, Algols (Elixir) and Lisps will come to mind first, but nothing is stopping the more procedural languages from following

## malleability

> The examples will are written in [revo](https://revo.lung.fyi), because it's the easiest to embed and I made it
> Many things are said in the context of all of Elixir, revo, and Fennel

I can not overstate the value of "being able to take a thing and put it somewhere else".

```revo
#           an atom is a value which represents its name
let done = :false
# if-expressions are nice, but can be substituted by a ternary operator
let status = if (done) :done else :unfinished

# ...but not everything can be accounted for with special syntax
let response = match status
    | :done       => "Done!"
    | :unfinished => "In progress"
    | :planned    => "Did not start"

let last_res = 0
let res = (match response
           | "Done!" => 200
           | "In progress" => 300)
    |> do last_res = _ end # it can't account for "jumping in the middle of something"
    |> inspect()           # or trying to quickly print-debug something

return (res, last_res)
```

It gives you access to a pipelined way of thinking, in which you can think of a program in a top-to-down manner.

The example above contradicts the last sentence - we just gave last_res a sentinel value of 0. What if 0 becomes a valid state later? There is intentionally no way to make an empty binding, because there's always a better way

We could make it into `let last_res: num? = :nil` and check whether it's nil on every use

Or, we could initialize a variable only when we have a meaningful value for it. `let` expressions carry a value, so let's use that:

```revo
let last_res: number =
    let res = (match "Misc"
               | "Done!" => 200
               | "In progress" => 300
               | _ => 404)

return (res, last_res)
```

We also saw an LSP inlay hint tell us `last_res` is of type `number | :nil`
This is not the expected behaviour, so we explicitly gave it a type

Turns out, the match was not exhaustive and could fall through to returning the atom `:nil` (of type `:nil`). We're forced to handle this, because we later use it in contexts that only accept type `number`

A module, if inside a file, will look something like this

```revo
pub fn foo() do
    print(return 5) # prints "5"
end # => 5

pub const res = foo() == 5
```

`pub const x = 42` is just a shorthand for "`@exports.x = 42` and make sure you return @exports at the end of the file"
A file is just a closure

If we don't use `pub` (and if we want the browser demo to work), we can rewrite it as

```revo
pub fn foo() do
    print(return 5) # prints "5"
end # => 5

pub const res = foo() == 5
```

And a file is really nothing more than a function we run for a value.
This is why we can use the "unwrap-or-return" operator here to end up with an erroneous topmost value, the one you'd only use inside a function in Rust/Zig

```revo
(:err, :Dead)?
```

"What about `return`/`break`?" Traditionally, it can larp an expression by just executing before anything that uses it. It's

```revo
fn foo() do
    inspect(return 5) # does not print 5
end # => 5

foo() == 5
```

There is nothing stopping us from following Lua traditions!

```revo
let mod1 = {}
mod1.out = fn()
    print("foo bar")

mod1.version = "0.1.1"
mod1

# which we can then just copy-paste into...
const mod2 = do
    let M = {}
    M.out = fn()
        print("foo bar")

    M.version = "0.1.1"
    M
end
```

The language **has** to stay simple enough for you to be able to do this
The uniformal concept of "taking data and doing stuff with it" now applies to modules, instead of leaving them a secret third thing. We can make universal transformers to patch said data

```revo
let base = { version = "0.1.1", out = fn(self) print(self.version) }
    # pretend we imported it

#* returns a patched copy of a module *#
fn set_ver(mod: table) -> table do
    let m = mod:copy()
    m.preserved = {version = m.version}
    m.version = revo.version()
    m
end

let mod = set_ver(base:copy())
mod:out()
mod
```

### errors-as-values

One of the bigger fundamental shifts in programming in recent years has been the universal
adoption of errors-as-values. So common, they've lost the exclusivity of domain

```revo
# :err and :ok are atoms/symbols. they're equal to their value
fn fine(input) -> (:err | :ok, string) do
    (:ok, input)
end

print(fine("should be fine"))

                 # expands to the error union above
fn bad(input) -> !string
    (:err, input)
    # a function's body is always one expression
    # do-end is an expression just like this one, so we don't need it

print(bad("should error"))
```

The `(:ok, v)`/`(:err, e)` shape has proven itself in Erlang/Elixir before making its way outside of the BEAM realm, popularized by Rust

It makes it _exceptionally_ easy to make much safer software by making the bad paths obvious.
You're forced to acknowledge an error before using a value

Some 20 years ago, this wouldn't have caught on as much as it did at all - the inconvenience was just too much when up against exceptions. It's not a thing in "languages with no types"

Today, it's the standard for a language to include at least an optional type system and an LSP

They're typed data whose type can be narrowed down by playing "guess who" with the compiler, and you need proper means of deduction to work with them

One of those are match expressions:

```revo
fn might_err(input: string) -> !string do
    # uses a fixed seed
    if rng.choice({:true, :false})
      (:ok, input)
    else (:err, "bad result")
end

# we're sure it's string, because...
const res: string = match might_err("hello")
    | (:ok, v)  => v  # it's a string if the first value is :ok
    | (:err, e) => panic(e)  # nothing is reachable after `panic() -> noreturn` anyways
    # all branches handled
```

What we really did here, is narrow down the type of one value and return another

This means we can also write our own error handling flows, often more tailored to our usecase.
Combined with the features above, we can freely define our own forms of monadic/railway error handling!

```revo
#* applies function to :ok tuple, passes down if given an :err tuple, func is not applied *#
fn try(val, func) match val
    | (:ok, v)  => func(v)
    | (:err, e) => (:err, e)
    | x => panic("unexpected: #{x}")

#* applies function to :err tuple, passes down if given an :ok tuple, func is not applied *#
fn catch(val, func) match val
    | (:ok, v)  => (:ok, v)
    | (:err, e) => func(e)
    | x => panic("unexpected: #{x}")

#* applies func to success values without manual tuple wrapping *#
fn map(val, func) match val
    | (:ok, v)  => (:ok, func(v))
    | (:err, e) => (:err, e)
    | x => panic("unexpected: #{x}")

#* applies func to error payload without switching tracks *#
fn map_err(val, func) match val
    | (:ok, v)  => (:ok, v)
    | (:err, e) => (:err, func(e))
    | x => panic("unexpected: #{x}")

#* side-effect logger; leaves payload untouched *#
fn tap(val, func) match val
    | (:ok, v)  => do func(v); (:ok, v)  end
    | (:err, e) => do func(e); (:err, e) end
    | x => panic("unexpected: #{x}")

#* exits monad with value or fallback *#
fn unwrap_or(val, default) match val
    | (:ok, v) => v
    | (:err, _) => default
    | x => panic("unexpected: #{x}")


let result = (:ok, "user_123")
    |> tap(fn(id) print("fetching: #{id}"))
    |> map(fn(id) string.upper(id))
    |> try(fn(_) (:err, :db_timeout))        # switches to error track
    |> try(fn(_) panic("skipped execution")) # short-circuits
    |> map_err(fn(e) "fatal failure: #{e}")  # transforms error message
    |> catch(fn(e) (:ok, :guest_session))    # recovers to success track
    |> unwrap_or(:fallback_user)             # extracts raw value
``` 

Now, this makes `nil` is a strange value. There can be no functions that return nothing
If you think you've found a way, no. It still returns something

```revo
fn blank() ()
blank() |> print
do end  |> print
```

This is where `:nil`, the value, might appear. It's not its own type but instead an atom, which means we can avoid having an **actual** nil, and use something more appropriate

```revo
let t = {}
print("t[10] is #{t[10]}") # :undef
fn opt(?arg) do
    print("arg is #{arg}") # :none
end
opt()
opt(1)
let it = {1, 2} |> to_iter()
print("""
    iterating over the table:
    #{it()} # first
    #{it()} # second
    #{it()} # iterator stopped! (:done)
    #{it()} # calling it again  (:done)
""")
```

Atoms being ordinary values helps a lot with letting us do this. `nil` usually lies about having a type, but `:nil` is an ordinary value of an ordinary type. These can be better deduced by compilers

The nil-avoidance above is really resolving one distinction three different ways without naming it: `unit` (a real, meaningful "nothing happened" value - Rust's `()`, Zig's `void`), `bottom` (a value that means "this point is never reached" - Rust/OCaml's `!`/`raise`, revo's `return`/`break`), and `null` (a value that lies about having a type it doesn't). revo and Elixir's atoms sidestep the third by making `:nil` an ordinary value of an ordinary type instead of a hole in the type system.

### Program structure & conversational development

These languages mostly exist within the functional/lisp realm, but aren't exclusive to it. It helps to think of them as lisps: your program is a tree of expressions, all converging into one value.

Backtick revo code to get its AST as tuples:

```revo
`
let a = 5; a += 10
if :true # semicolons are whitespace
   a * 2; else 10
`
```

Trim and format as a list:

```lisp
(do (decl :let a 5) ; 5
    (assign a (+ a 10)) ; 15
    (if (:true) (* a 2) 10) ; 30
    ) ; 30
```

No parser split means no privileged "top" of the tree.
Any node is a valid unit to hand to the interpreter, and it's guaranteed to come back with a value.
`(assign a (+ a 10))` on its own is exactly as legal a program as the whole block is.

We can start a REPL that runs indefinitely, into which we can feed these units. They may have side-effects, which may be the modification of anything we can hold in the environment - the basis of conversational development

This breaks and tightens the traditional loop of writing a program, starting it, and restarting it entirely when you make changes, since you will now have the ability to only change the bits you need.

I've personally been highly impressed by

- Conjure (for neovim)
- Emacs:
  It was made for Lisp during its' prime
  `C-c C-e` will evaluate the current buffer/selection for any supported language. [It's trivial to add support for any language you want](https://github.com/if-not-nil/revo/blob/main/Emacs.org?plain=1)
  Making Emacs able to evaluate a language also means making it available in interactive Org-mode snippets or fully literate Org notes, which can be trimmed back into just the source

- iex: Elixir's REPL
  If you've haven't yet had the pleasure of working with Phoenix through it, I highly recommend you do. You are able to start a server inside of a repl and do whatever you want with the process - overwrite a specific handler, run it manually to see what the output looks like, query Postgres on the same connection the server uses, etc.

## Language comparisons

Revo is attempting to push the idea as much as is reasonable, so we'll be using this snippet as a test for all languages. It's quite loaded so I'll try to break it up & explain it:

```revo
# lua-ish table, not a criteria. languages without them can just use maps
let table = {
    # element 0:
    # we need assignments and bindings to carry a value
    let x =       # we need functions to be first-class
          let y = fn(x)
                      # we need files to always return a value
            (x * 2) ~ revo.dofile("./mod.qux")?, # => "4lastvalofmod.qux"
                                           # `?` unwraps an error tuple
                                           # errors have to be values

    # element [5] (hashmap part):
    # do-end blocks groups expressions,
    # returns the last value, and is an expression in itself
    # it's important for it to be optional
    do 5 end ## => 5 ## = 
        # `a` is a label you can break into
        do/a 
          break/a 10
        end, # => 10 
        # key 5 of the table 10

    # element 3:
    (fn() do
           # `return` and `break` should be expressions too!
        print(return 10)
    end)() # => 10
} # => that table
```

Then, the file needs to have a value as well

We'll also note whether:
the parser distinguishes statements, expressions and items,
the whole thing can be written in one line (like ML/Lua. Both newlines and semicolons count),
and give bonus points for using existing concepts cleverly
  (a file is a closure/a module is a map, a binding can be represented as a pair of atom-value, etc.)

### Rust

It comes first, as it's often the introduction to the concept for C++/JS refugees
This is not a fair comparison, because being compiled brings fundamental limitations

```rust
use std::collections::HashMap;

// both `fn` and `use` are neither expressions nor statements, they're items
fn hi() -> HashMap<String, String> {
    // "let" is a statement
    let x = { // blocks to group expressions
        let y = |x: i32| x * 2; // closures, do exist
        // no dofile! closest is include_str!/a build script, neither of which is a runtime call
        format!("{}{}", y(2), "lastvalofmod")
    };
    let mut table = HashMap::new();
    table.insert("5".to_string(), {
        'a: { break 'a 10; } // block label, much appreciated
    }.to_string());

    table.insert("x".to_string(), x);

    // print(return 10) is illegal
    println!("{}", 10); 
    table
}
```

- Has the parser split
- One-lining is impossible
- Modules have no runtime value

It comes out stronger than most mainstream compiled languages as loops, if-else, match, and blocks are all expressions. Errors are values and are handled as such

Yes, all loops have values. Most return `()`, but `loop` can be broken out of with one

[from rust docs](https://doc.rust-lang.org/reference/expressions/loop-expr.html#r-expr.loop.break-value.intro)

```rust
let result = loop {
    break 10;
};
assert_eq!(result, 10);
```

### OCaml

OCaml is a good but slightly frustrating comparison. A file folds into one first-class value, that being a struct instead of whatever the last expression was.
The parser is still split, but in its own way - it differentiates only between top-level and function-level. Once inside a function, the body is an expression

```ocaml
let hi () =
  let table = Hashtbl.create 8 in

  (* element 0 *)
  let x =
    let y x = x * 2 in
    (* no runtime dofile! modules are resolved at compile time, not called.
       the closest is `#use "mod.ml"`, and that only exists at toplevel *)
    Printf.sprintf "%d%s" (y 2) "lastvalofmod.ml"
  in

  (* element [5]: begin/end is just parens *)
  Hashtbl.replace table "5"
    (string_of_int begin
       (* no labeled break exists, but a local works for a "jumping out with a value" *)
       let exception Value of int in
       try raise (Value 10) with Value v -> v
     end); (* => 10 *)

  Hashtbl.replace table "x" x;

  table (* => the table *)
```

### Elixir

Elixir is the strongest candidate, as it really does not have any statements. The grammar does not distinguish any of the

```elixir
defmodule Table do
  def hi() do
    x =
      (
        y = fn x -> x * 2 end
        # Code.eval_file is exactly what we need!
        {mod_val, _bindings} = Code.eval_file("mod_qux.exs")
        "#{y.(2)}#{mod_val}"
      )

    table_val =
      try do
        # closest real analog to a labeled break-with-value,
        # but is technically a valid form of cflow
        throw(10)  
      # yes, try-catch is the "native" error handling mechanism
      # but the much-more-common approach is an error tuple
      # which is exactly what we want
      catch
        v -> v
      end

      # return
      # pls: 5 needs to be returned by something like a do-end, you need not to have the code "do the same thing" but to demonstrate the functionality and how much can be represented through expressions
      %{5 => table_val, "x" => x}
      |> do # pls: how do we do this
          ret = 10
          IO.puts(ret)
          ret
      end
    end
end
```

### Zig

Zig is a surprising one for a language that markets itself as procedural as much as it dows,
but a massive amount of it can be represented as values. It managed to simplify itself by
being able to represent everything as a struct

Types, slices, etc. are all structs. A namespace is a method-only struct
Errors are tagged unions of value plus what is essentialy an atom

```zig
const std = @import("std");

// notice how this is not in a function
// we're instead doing everything at top-level, forcing a comptime-only context
pub const Table = struct {
    pub const zero = blk: {
        // there are no closures in zig,
        // functions are only define-able at the top-level
        // the top-level in zig is a struct, which you can define anywhere anonymously
        const y = struct {
            fn f(x: i32) i32 {
                return x * 2;
            }
        }.f;

        // this is not runtime, however namespaces are structs
        // and structs are types, which are values
        const mod = @import("./mod.zig");

        // we know mod.impl() is a function that can be executed at comptime, since
        // we are not passing an allocator or an Io in. this is a convention not
        // strictly enforced, but much enocouraged since zig 0.16.0
        
        // std.fmt.comptimePrint evaluates to a []const u8 directly at compile-time
        const formatted_val = std.fmt.comptimePrint("{}", .{y(2)});

        // since mod.impl() returns a regular string (not an error union),
        // we call it directly without `catch` or `try`
        break :blk formatted_val ++ mod.impl();
    };

    // zig has a way to define structs where field names are comptime strings
    // it's too verbose for me to include here       vvvvvvvvvvvvvvvvvvvv
    // @Struct(comptime layout, comptime BackingInt, comptime field_names, comptime field_types, comptime field_attrs)

    pub const five = blk: {
        break :blk 5;
    };

    pub const three = three_block: {
     // @compileLog usually executes a statement and kills the program
     // here, the break is evaluated before it. this is, however, valid code
        @compileLog(break :three_block 10);
    };
};

pub fn main() void {
    std.debug.print("{s}\n", .{Table.zero});
    std.debug.print("{}\n", .{Table.five});
    std.debug.print("{}\n", .{Table.three});
}
```

- Has the parser split
- One-lining is impossible
- Modules are structs

### Julia

```julia
table = Dict(
    0 => let
        y = x -> x * 2
			# modules do have a value and can be returned from!
        mod = include("./mod.jl");
        # we're returning a tuple instead of a string here to show off an intrinsic
        # this makes the semicolon above required, but only when merging the two lines into one
        #
        # this, as far as i know, solves the only ambiguity present in lua's inlining
        # where (fn() end) (fn() end) behaves differently from (fn() end)\n(fn() end)
        (y(2), mod)
	end, # => (4, "lastvalofmod.jl")

    # begin-end matches what we need from a do block
    begin 5 end =>
        # btu there is no block break functionality, we have to make an IIFE
        (() -> begin
            return 5
        end)(),

    3 => (() -> begin
                # this is legal, but `return` is executed first
                # so you don't get println's side-effect
        println(return 10)
    end)(), # => 10
) # => the dict
```

- Has the parser split
- One-lining might require disambiguations
- Modules are structs

REVO REF

```revo
# some common traits you might love are if-expressions
let x = if (:true) 5 else 10

# value-blocks
let y = do
    let a = 5
    a + 5
end |> expect_eq(10)
    # pipes

# more complicated pipes
const z =
    rng.choice({"foo", "bar", "baz"})
    |> fn() do
        _
    end # closures & upvalues

const res = # match expressions
    match rng.choice({"foo", "bar", "baz"})
    | "foo" => 1
    | "bar" => 2
    | x when x == "baz" => 3

# which can narrow types
const r: num = res
```

The REPL motivation from the top is worth returning to: expression-orientation and REPL-friendliness are the same design pressure wearing two hats. A language where every line yields a value is, almost by definition, a language where every line is worth typing into a prompt one at a time - which is probably why Lisps and MLs converged on it independently rather than copying each other.
