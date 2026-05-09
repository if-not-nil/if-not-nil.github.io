---
title: 'macros'
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
  <pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠢⠒⣲⢄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⢒⢰⠄⠀⠀⠀⢀⠌⠀⠀⠀⡌⠄⣀⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡜⢸⠈⠠⡀⠀⢀⠃⠀⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠎⠀⠀⠀⠣⠈⠀⠀⠸⡘⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢣⠀⢀⠀⠦⡀⢧⡄⠀⣷⠁⢀⡨⠐⠒⠀⠤⢄⡀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠀⠣⡉⠢⡀⠑⡄⠃⠐⠠⠰⢁⠤⠤⠤⠀⠀⠀⠈⠢⡀⠀
⠀⠀⢀⠎⠁⠀⠀⠀⠀⠱⠎⠱⠈⢸⡀⢀⠎⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆
⠀⣀⢎⠾⠑⠃⠈⠁⠀⠰⠖⢉⠉⢐⣠⠖⠐⠢⣀⣀⣀⣀⠤⠒⠒⢄⠀⡇
⠸⠁⠀⣀⣀⠀⠀⢀⠤⠒⠋⢁⠔⡌⢘⢄⠀⠀⠙⡄⠀⠀⠀⠀⢗⠃⢃⠇
⠠⣤⣮⠀⠀⠀⡠⠁⠀⡴⠊⠁⠀⡇⠈⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠈⠁⠀
⠀⠀⠀⠀⠀⢠⠁⠀⠀⠀⠀⠀⢠⠴⡄⠀⠀⠠⡀⠀⠣⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⡀⡎⣴⢒⠊⠉⠀⠀⠀⠑⠢⡀⠑⠄⠀⢱⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠑⠬⠮⠟⠀⠀⠀⠀⠀⠀⠀⠘⠦⠐⠐⠊⠀⠀⠀⠀⠀⠀
  </pre>
  <div style="flex:1; min-width:250px;">

# macros
[docs](docs/basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo) | [license](#license)

> if a language doesn't have metaprogramming, the programmer **will** metaprogram it themselves
  </div>

</div>

they're compile-time transformers that rewrite anything-to-anything

they are also how you do variable-argument functions (since only native functions can do that (on accident) (and will one day lose the ability to do so))

# proc macros
they are just normal functions that run in the separate vm,
and only have access to other macros. they give you a tree represented as a table array of tuples

**how to write them?**

i prefer to make two pieces of code - the original one, and the expected one

```ruby
proc what!(m) do
    # %? is the debug formatter
    print(fmt("%?", m.items))
end

# case I (imagine the what! is your macro name)
what!("first %v second %v", "foo", "bar")
# result
what!(print(fmt("first %v second %v", "foo", "bar")))

# case II
what!(1, 2, 3)
# what it expands do
what!(print(1, 2, 3))
```

that results in an ever so helpful output of:
```ruby
what: { (:string, "first %v second %v"), (:string, "foo"), (:string, "bar"), }
what: { (:call, (:ident, "print"), { (:call, (:ident, "fmt"), { (:string, "first %v second %v"), (:string, "foo"), (:string, "bar"), }, :false), }, :false), }
what: { (:number, 1), (:number, 2), (:number, 3), }
what: { (:call, (:ident, "print"), { (:number, 1), (:number, 2), (:number, 3), }, :false), }
```

**when to use them**
when you wanna mess around with things the language prevents you from doing. for example, a function can't require a module and import all of its keys into the local scope. but macros can

# ast macros
... are the easier way of doing macros. they just get an ast, which you then substitute directly
very similar to rust's macro_rules!

they still are less stable than proc macros today and need some work done

```ruby
# macro `pattern` `template`
# %e:expr  - any expression
# %n:ident - an identifier
# %s:str   - a string literal

const unless! = macro `(%cond:expr %body:expr)` `if %cond :nil else %body`
unless!(5 < 0, :positive)  # :positive

# repetition groups
# %GROUP(...)* - zero or more
# %GROUP(...)+ - one or more
# %GROUP(...)? - optional

const sum_all! = macro `(%first:expr %REST(%item:expr)*)` `%first %REST(+ %item)`
sum_all!(10, 15, 17)  # 42
```
