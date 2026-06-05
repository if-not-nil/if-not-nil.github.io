---
title: 'type system'
---
# types

the compiler infers them, tracks them, and uses them to pick fast paths.
they fall back to `any` when they can't be inferred.
{{< ref "pub const TypeInfo" >}}
{{< ref "pub fn inferExprType(" >}}
{{< ref "pub fn inferBinaryOp(" >}}

```ruby
struct Point { x: number, y: number }
let p: Point = Point{ x: 0, y: 0 }
# error: field `x` on `Point` expected int, got string
p.x = "bad"
```

atoms are a type of their own: `:true`'s type is `:true` (or a
catchall `atom`).
{{< ref "atom: []const u8," >}}

**function argument validation**

when calling a typed function, each argument is checked.
{{< ref "pub fn compileCall(" >}}

```ruby
fn double(n: int) -> int
    n * 2
# error: argument 1 to `double` wants int, got string
double("hello")

const f: function = fn(x: int) x
# error: wants int, got string
f("hello")
```

**return type validation**

functions with `-> type` get their returns checked.
{{< ref "pub fn compileFn(" >}}

```ruby
# error: return type mismatch: wanted int, got string
fn bad() -> int do "hello" end

# this also catches the block tail expression
fn also_bad() -> int do
    let x = "hello"
    x  # <-- error here
end
```

**named `?` suffix convention**

functions whose name ends with `?` must return bool.
{{< ref "pub fn compileFn(" >}}

```ruby
# error: function ending with ? must return bool
fn is_ok?() do :ok end

# ok
fn is_ok?() -> bool do :true end
```

when no return type is written, the compiler auto-injects `-> bool`

## coercion

{{< ref "pub fn canCoerce(" >}}

**can**
- any -> itself
- any <-> `any`
- int -> float
- `:true`/`:false` -> bool
- union -> any of its variants

**can't**
- float -> int

**covariant/contravariant**
- function -> function

{{< ref "// function subtyping:" >}}

```ruby
type Animal = :cat | :dog
type Dog = :dog

# contravariant: accepts animal, returns dog
const feed = fn(a: Animal) -> Dog do :dog end

# covariant: only accepts dogs, may return any animal
const walk = fn(d: Dog) -> Animal do d end
```

function types use standard subtyping: contravariant in params,
covariant in return. `any` function matches everything

## struct

typed structs skip hash lookups entirely. `struct_layout.zig`
does fixed offsets at compilation.
{{< ref "pub fn registerType(" >}}
{{< ref "pub fn resolveTypedStructFieldOffset(" >}}

```ruby
struct Point {
    x: number = 0,
    y: number = 0,
}

let p: Point = Point{}
p.x = 3
p.y = 4
# access compiles to struct_get_offset instead of table_get_atom
```

each field is a `Data` value (nanboxed `u64`, 8 bytes)
{{< ref "pub const Data" >}}
{{< ref "struct_get_offset" >}}

**struct constructors**

validated at runtime.
{{< ref "fn structFieldValueMatches(" >}}

```ruby
struct Person { name: string, age: number }

# ok
let p = Person{ name: "alice", age: 30 }

# runtime error: unknown field
Person{ bad: 42 }

# runtime error: missing required field
Person{ name: "bob" }
```

field writes also validate at runtime if the struct has field types.
{{< ref "fn structFieldValueMatches(" >}}

```ruby
struct Point { x: number, y: number }
let p = Point{ x: 0, y: 0 }
# runtime TypeError: field `y` expected number, got string
p.y = "bad"
```

structs can have methods defined with `fn Type:method(params) body`.
{{< ref "pub fn compileStruct(" >}}

```ruby
struct Counter { n: number }

fn Counter:inc(self, amount) do
    self.n = self.n + amount
end
```

methods compile to field assignments on the struct

## type hints

the compiler tracks per-variable type hints through scopes. hints
are set during binding, assignment, and analysis, and
restored when scopes close

{{< ref "pub const TypeHint" >}}
{{< ref "pub fn setLocalTypeHint(" >}}
{{< ref "pub fn resolveLocalTypeHint(" >}}

**condition-based type narrowing**

type predicates in conditions narrow the type within the branch.
{{< ref "fn conditionTypeHint(" >}}

```ruby
let x = some_value
if number?(x)
    # x is treated as numeric here
    x + 1
else
    # x is whatever it was before
    x
end
```

supported predicates: `number?`, `string?`, `bool?`, `table?`

### type hint scoping

hints are scoped: entering a `do` block pushes the scope, leaving
restores it. nested scopes shadow outer hints

## type aliases are not runtime values

using a type name as an expression produces an error.
{{< ref "// type used as value" >}}

```ruby
type MyInt = int
# error: type name `MyInt` used as a value
let x = MyInt
```

## runtime type predicates

there are built-in predicates! this is of course not to stay here forever,
    an `is` keyword may become a thing at some point
{{< ref "pub fn typeUtils(" >}}

```ruby
number?(42)
string?("hi")
bool?(:true)
table?({})
atom?(:ok)
function?(fn() 42)
tuple?((1, 2))
struct?(val)
type?(val)
```

## type built-in

`type(x)` returns the runtime type as an atom
{{< ref "pub fn typeof_(" >}}

```ruby
type(42)       # :number
type("hi")     # :string
type(:ok)      # :atom
type(fn() nil) # :function
type({})       # :table
type((1, 2))   # :tuple
```

## struct type pool

structs are registered in a global pool that maps name -> descriptor.
{{< ref "pub const StructTypePool" >}}

each descriptor holds field atoms, default values, and method tables.
the VM uses this pool for:

- constructor argument validation
- field assignment type checking
- method dispatch
- struct offset resolution

## semantic checker (pre-pass)

before compilation, a semantic pass (`semantic.zig`) validates.
{{< ref "pub fn analyze(" >}}

- binding type annotations match values
- assignment types match
- return types match
- call argument counts and types
- struct field types resolve
- type alias definitions are valid
- undefined names are reported
