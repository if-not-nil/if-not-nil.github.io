+++
date = '2026-08-25T13:01:09+03:00'
title = "expression-based languages"
# description = "expr langs"
+++

It seems like expression-based languages have become a lost art. And there are clear reasons for that to be the case (notably, clarity and optimization)

They are still a fascinating branch of language design that can not go ignored. By declaring "everything must a value", you give the reader a uniform and massively simplified model of reasoning about any given piece of code, naturally eliminate edge casws and imply answers to questions that have not yet been asked

## Language comparisons

Revo, the language i'm currently making is attempting to push the idea as much as is reasonable, so we'll be using this snippet as a test for all languages. It's quite loaded so I'll try to break it up & explain it:

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

We'll also note whether
the parser distinguishes statements, expressions and items,
the whole thing can be written in one line (like ML/Lua. Both newlines and semicolons count),
and give bonus points for using existing concepts cleverly
  (a file is a closure/a module is a map, a binding can be represented as a pair of atom-value, etc.)

### Rust

It comes first, as it's often the introduction to the concept for C++/JS refugees
This is not a fair comparison, because being compiled brings fundamental limitations

```rust
use std::collections::HashMap;

// both `fn` and `use` are neither expressions nor statements - they're items
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

Zig is a surprising one for a language as procedural as it is, because of how much can carry a value. It succeeds in achieving simplicity by moving big parts of the language into structs - a namespace is a struct with no values, therefore a module is a struct. Types, slices, etc. are interacted with as a struct in user code. Errors are tagged unions of the value + what is essentially an atom

They mostly exist within the functional/lisp realm, but it doesn't have to be like this!

## The problems

### optimizations

### ambiguity
