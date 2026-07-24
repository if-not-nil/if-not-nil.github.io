---
title: 'standard library'
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  <pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⡶⢦⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡔⢫⣮⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡰⠑⠌⠄⡀⡆⠀⠀⠀⠀⠀⠀⠀⠀⢠⡞⣕⣱⣛⡻⠻⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣧⠐⠃⡀⢃⡙⡀⠀⠀⠀⠀⠀⠀⡰⣫⡞⢩⡞⠁⡀⠀⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢹⣦⠁⡐⠠⠹⣄⠀⠀⠀⠀⠀⡔⢵⡟⠠⠋⡄⠀⠀⡘⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⡇⢢⠀⠘⣇⠀⠀⠀⣰⡫⣻⠀⠀⡸⠀⠀⢘⡒⢼⠠⠒⠚⠻⡍⠋⠛⠒⣶⢤⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡿⠡⡱⡙⢄⠌⢆⠀⢠⠟⡏⢸⡆⠀⠇⠀⣠⣪⠖⣿⠀⠀⠀⡆⠀⠀⠀⠀⠀⠅⢀⡙⢋⠙⠲⡦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠃⠼⡀⡄⣞⠄⣼⣾⣯⠢⣏⣰⠀⡰⣻⠅⣸⡿⠀⠀⡰⠀⣴⠁⢠⠂⡘⠐⠀⠀⠀⠀⠀⠀⠈⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠄⡖⠅⢳⠎⢹⣿⣿⡾⡢⢻⣾⡸⢠⠇⠤⢫⣧⣇⡖⣷⡺⡫⡆⣡⠎⢀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠶⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢾⢦⠃⠀⢃⣾⡛⢿⢻⠇⡨⣻⣷⣏⣠⠊⠍⡼⣿⡇⡘⢀⡕⡱⠀⡠⠂⣈⠔⢁⠔⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣢⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⢀⠄⠔⠀⠘⢻⣧⡟⠇⠘⠳⢨⡟⠁⠠⠊⣸⣿⡏⣰⡧⠛⠀⣤⠏⣠⠞⠁⠔⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⢏⡐⠋⡰⢁⠞⡀⣼⠺⣧⡎⡔⠀⠈⠉⠀⠀⣰⡿⣿⣷⣿⣧⡾⢾⢛⣍⠌⣠⣤⡠⠄⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⡄⠀
⠀⠀⠀⠀⠀⢀⣠⣾⢫⢯⣿⢴⣽⣷⢆⣼⠟⡗⡀⡠⠟⠀⢀⠄⠀⠀⠀⣹⣾⣿⢏⣾⣩⣷⣟⣋⡞⠖⠋⠀⠀⠀⠂⠀⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡀
⠀⠀⠀⠀⢠⡞⣣⣿⢣⣫⡿⣽⠎⢢⠿⢃⠎⠈⡁⠊⠀⡨⠃⠀⠠⢀⡨⠛⣩⣷⣷⠿⣫⡱⠟⠃⠀⠀⣀⡀⠄⠠⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓
⠀⠀⠀⢰⡏⣰⢃⠃⣼⡿⣿⠋⠀⠀⠀⠁⠀⠀⠀⢀⠜⠀⠠⠖⠂⠁⠀⠀⠘⣹⣿⡉⠋⣡⠔⠀⠀⠀⡀⠀⠀⠒⠐⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣸⢴⢳⢹⣧⡟⠁⠃⢀⣔⣶⣦⡤⠀⠈⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣳⣿⠛⠒⠓⢀⠀⡀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⡿⢸⣿⡖⣇⣇⠀⢴⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢯⣾⠟⠃⠀⠔⠁⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣾⢁⣟⣷⣇⠻⠉⢇⠘⠯⣿⣿⡿⠛⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⢀⠼⣗⡊⠉⠉⣄⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢸⡿⢟⣟⠫⢏⡆⠀⠨⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣷⡞⠶⠶⠟⠛⠄⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢸⣷⣹⠐⠁⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠞⠀⠌⠐⠑⠦⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⢾⣿⣿⣴⣤⣧⡶⣦⣤⠐⠂⠤⠄⠀⠄⠀⠀⠀⠀⠀⠀⢀⡋⠉⠉⢤⣌⣈⠢⠀⠠⠤⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⣿⣿⣿⣿⣾⣷⣯⢧⠼⡢⠐⠂⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠰⠦⣿⠁⠒⠗⣤⡀⠀⢢⡀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀
⠀⠀⠈⣿⣿⣆⣻⡿⣹⡀⣦⡚⢦⠁⠁⠀⠀⢠⠀⠐⠀⢐⠀⠀⠈⠂⢄⠙⢧⡍⠑⠠⡉⣷⣤⡠⢭⣆⠱⣕⡖⠂⠀⠀⠀⠀⠀⣤⣿⣷⡯⢍⡓⣤⠀⠀⠀⠀
⠀⠀⠀⡘⠫⠝⠿⣿⣜⣧⣰⢎⢄⢡⠀⠐⠂⠀⠀⠀⠄⠠⢀⠦⣀⡐⠳⣦⣈⡌⣗⣄⣿⣮⡿⣿⡷⢿⢷⠕⡤⢧⡀⠀⠀⠀⣶⣿⣯⣈⡇⢷⠨⣢⡁⣦⡀⠀
⠀⠀⠈⠀⠀⠀⠀⠀⠉⣧⣧⢥⣡⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢩⠏⠻⣮⡹⠦⣵⣼⣿⣿⣿⢿⡜⢾⣜⣦⣿⡜⢿⠢⢵⣤⣷⣿⣿⣏⠻⠿⠦⣄⣟⠁⠀⠈⢁
⠀⠀⠀⠀⠀⠰⠀⠀⠘⠛⠛⠚⠛⣳⣶⣶⣄⠀⠢⡀⠠⠀⢠⠀⢀⢰⣿⣌⣧⣿⡿⠿⠟⠉⠖⢳⠈⠄⡀⢩⢿⣆⣻⣳⣿⣿⣿⣿⣿⢿⡀⣀⣸⡇⢀⠠⠖⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣷⣿⣦⣶⣿⣤⣾⣾⣿⣿⠟⢁⠀⠀⠀⣰⡆⢀⠰⡏⢱⣾⡶⠿⠛⠋⠁⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠟⠿⠿⠿⠿⠿⠿⠿⠿⠟⠒⠻⣀⡶⣳⡿⡇⢀⣿⣣⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠂⠤⠏⠀⠄⠒⠋⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  </pre>
  <div style="flex:1; min-width:250px;">

# revo's core library
> auto-generated from source

please note that the docgen script, used to generate this, is not yet done and information may not align with reality

  </div>

</div>

## globals

#### `fmt`

```rb
fmt(format: string, args: any...) -> string
```

format string with %v, %d, %? specifiers

_(variadic)_

#### `len`

```rb
len(value: any) -> number|:nil
```

returns length of string or table

#### `inspect`

```rb
inspect(value: any) -> any
```

prints one value and returns it back

#### `get_metatable`

```rb
get_metatable(value: any) -> table|atom
```

returns metatable of value or :missing

#### `set_metatable`

```rb
set_metatable(value: any, meta: table|:nil) -> any
```

sets metatable of value

#### `type`

```rb
type(value: any) -> atom
```

returns type of value as atom

#### `typeof`

```rb
typeof(value: any) -> atom
```

returns type of value as atom

#### `number`

```rb
number(value: string) -> !number/string
```

converts string to number

#### `expect`

```rb
expect(value: any) -> !any/:ExpectFailed
```

used in tests, returns value or :err

#### `expect_eq`

```rb
expect_eq(a: any, b: any) -> !any/:NotEqual
```

panics if values are not equal

#### `assert`

```rb
assert(value: any) -> any
```

panics if value is falsy

#### `assert_eq`

```rb
assert_eq(a: any, b: any) -> any
```

panics if values are not equal

#### `set_debug`

```rb
set_debug(flags: table) -> :ok
```

sets debug flags from a table

#### `debug`

```rb
debug() -> table
```

returns debug info as a table

#### `unwrap`

```rb
unwrap(result: tuple) -> any
```

unwraps result tuple, panics if not :ok

#### `chan`

```rb
chan(capacity: number?) -> tuple
```

creates a new channel with optional buffer size

_(variadic)_

#### `send`

```rb
send(chan: tuple, value: any) -> :ok
```

sends value to channel

#### `recv`

```rb
recv(chan: tuple) -> any
```

receives value from channel, parks if empty

#### `sleep`

```rb
sleep(ms: number) -> parked
```

sleeps current fiber for given milliseconds

#### `panic`

```rb
panic(args: any...) -> never
```

panics with given message

_(variadic)_

#### `print`

```rb
print(args: any...) -> :ok
```

prints values to stdout with space separator

_(variadic)_

#### `gensym`

```rb
gensym() -> string
```

returns a unique interned string for use as an identifier

```rb
# in a proc macro: generate a fresh identifier to avoid name capture
proc swap!(iter) do
  let tmp = gensym()
  let a = iter:next()
  let b = iter:next()
  `((do
      let %tmp = %a
      %a = %b
      %b = %tmp
    end))
end

let x = 1
let y = 2
swap!(x, y)
```

#### `string_of`

```rb
string_of(code: any) -> string
```

creates string from ASCII code(s)
  string_of(97) => "a"
  string_of({97, 98}) => "ab"

#### `string_join`

```rb
string_join(table: table, sep: string) -> string
```

joins table elements into string with separator

#### `to_iter`

```rb
to_iter(obj: any) -> function
```

wraps any iterable in a zero-arg callable
built-in types (string, tuple, table) get a position-based iterator
functions return as-is (already callable)
tables with __iter metamethod call __iter(obj)

#### `map`

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

#### `filter`

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

#### `reduce`

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

#### `each`

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

#### `find`

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

#### `all?`

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

#### `any?`

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)

#### `c_use`

```rb
c_use(path: string) -> :nil
```

loads a C extension lib and registers its functions

#### `read`

```rb
read(opts: table?) -> !string
```

reads from stdin or a path 
opts:
 - delimiter: string, :eof or nothing
 - path:      string or nothing

_(variadic)_

#### `cwd`

```rb
cwd() -> string
```

returns current working directory path

#### `system`

```rb
system(args: table) -> (:stdout, :stderr)
```

runs a subprocess and returns (stdout, stderr)

#### `import`

```rb
import(path: string) -> any
```

imports a revo module by path

#### `@dotest`

```rb
@dotest(name: string, body: function) -> :ok
```

internal, do not use unless you know what you're doing. runs a test

#### `@dosuite`

```rb
@dosuite(name: string, body: function) -> :ok
```

internal, pls dont use. runs a test suite


## modules

### compress

#### `base64_encode`

```rb
base64_encode(data: string) -> string
```

encodes data as standard base64 with padding

#### `base64_decode`

```rb
base64_decode(data: string) -> !string
```

decodes standard base64 string

#### `base64url_encode`

```rb
base64url_encode(data: string) -> string
```

encodes data as url-safe base64 without padding

#### `base64url_decode`

```rb
base64url_decode(data: string) -> !string
```

decodes url-safe base64 string

#### `gzip_compress`

```rb
gzip_compress(data: string) -> !string
```

compresses data using gzip format

#### `gzip_decompress`

```rb
gzip_decompress(data: string) -> !string
```

decompresses gzip data

#### `zlib_compress`

```rb
zlib_compress(data: string) -> !string
```

compresses data using zlib format

#### `zlib_decompress`

```rb
zlib_decompress(data: string) -> !string
```

decompresses zlib data

#### `deflate`

```rb
deflate(data: string) -> !string
```

compresses data using raw deflate

#### `inflate`

```rb
inflate(data: string) -> !string
```

decompresses raw deflate data

#### `zstd_decompress`

```rb
zstd_decompress(data: string) -> !string
```

decompresses zstd data

#### `lzma_decompress`

```rb
lzma_decompress(data: string) -> !string
```

decompresses lzma data

#### `xz_decompress`

```rb
xz_decompress(data: string) -> !string
```

decompresses xz data


### file

#### `readdir`

```rb
readdir(self: table) -> !table/atom
```

returns table of directory entries for the dir handle's path

#### `read`

```rb
read(self: table) -> !string/atom
```

reads the full file contents as a string

#### `write`

```rb
write(self: table, data: any, permissions: atom|number?) -> !number/atom
```

overwrites the file with the provided string
optional permissions default to the platform file default

_(variadic)_

#### `append`

```rb
append(self: table, data: any, permissions: atom|number?) -> !number/atom
```

appends data to the file, creating it if needed
optional permissions default to the platform file default

_(variadic)_

#### `stat`

```rb
stat(self: table) -> !table/atom
```

get file metadata as a table

#### `close`

```rb
close(self: table) -> !atom/atom
```

closes a file handle table
this is currently a logical close for wrapper handles


### fs

#### `open`

```rb
open(path: string) -> !table/atom
```

wraps a path in a file handle table
use `file.close()` when you're done with the handle

#### `readdir`

```rb
readdir(path: string) -> !table/atom
```

returns table of directory entries

#### `exists?`

```rb
exists?(path: string) -> !bool/atom
```

does path exist?

#### `remove`

```rb
remove(path: string) -> !atom/atom
```

removes a file or empty directory at path

#### `mkdir`

```rb
mkdir(path: string, permissions: atom|number?) -> !atom/atom
```

creates a directory, using default permissions when omitted

_(variadic)_

#### `rename`

```rb
rename(old_path: string, new_path: string) -> !atom/atom
```

renames a file or directory


### iter

#### `collect`

```rb
collect(iterable: any) -> table
```

collects all values from an iterable into a table
   iter.collect(iterable)


### json

#### `encode`

```rb
encode(value: any) -> !string
```

encodes value as json string

#### `decode`

```rb
decode(source: string) -> !any/string
```

decodes json string into revo value


### math

#### `abs`

```rb
abs(x: number) -> number
```

absolute value

#### `floor`

```rb
floor(x: number) -> number
```

floor of x

#### `ceil`

```rb
ceil(x: number) -> number
```

ceiling of x

#### `sqrt`

```rb
sqrt(x: number) -> number
```

square root, errors if x is negative

#### `pow`

```rb
pow(base: number, exponent: number) -> number
```

base raised to exponent

#### `min`

```rb
min(args: number...) -> number
```

min of all arguments

_(variadic)_

#### `max`

```rb
max(args: number...) -> number
```

max of all arguments

_(variadic)_

#### `sin`

```rb
sin(x: number) -> number
```

sine of x (x in radians)

#### `cos`

```rb
cos(x: number) -> number
```

cosine of x (x in radians)

#### `tan`

```rb
tan(x: number) -> number
```

tangent of x (x in radians)

#### `log`

```rb
log(x: number) -> number
```

natural logarithm, panics if x <= 0

#### `exp`

```rb
exp(x: number) -> number
```

e raised to x


### net

#### `connect`

```rb
connect(host: string, port: number) -> !table/atom
```

connects to a remote host and port, returns a socket handle

#### `listen`

```rb
listen(port: number, backlog: number?) -> !table/atom
```

listens for incoming connections on the given port, returns server socket

_(variadic)_


### revo

#### `eval`

```rb
eval(code: string) -> !any/string
```

evaluates it as a module, gives you back its' return value
you can treat it as a function's body

#### `build`

```rb
build(code: string) -> !string
```

builds it as a module, gives you back its' bytecode in a string
the string is only useful for writing to a file or executing


### socket

#### `accept`

```rb
accept(self: table) -> !table/atom
```

accepts an incoming client connection on a server socket

#### `send`

```rb
send(self: table, data: string) -> !number/atom
```

sends data over the socket, returns number of bytes sent

#### `recv`

```rb
recv(self: table, opts: table) -> !string/atom
```

receives data according to opts.mode (:read_some | :read_all | :read_line)

#### `close`

```rb
close(self: table) -> !atom/atom
```

closes the socket


### string

#### `len`

```rb
len(self: string) -> number
```

returns length of string

#### `upper`

```rb
upper(self: string) -> string
```

converts string to uppercase

#### `lower`

```rb
lower(self: string) -> string
```

converts string to lowercase

#### `sub`

```rb
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

#### `find`

```rb
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

#### `replace`

```rb
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

#### `split`

```rb
split(self: string, delim: string) -> table
```

splits string by delimiter into table

#### `trim`

```rb
trim(self: string) -> string
```

trims whitespace from both ends

#### `starts_with?`

```rb
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

#### `ends_with?`

```rb
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

#### `reverse`

```rb
reverse(self: string) -> string
```

reverses the string

#### `with`

```rb
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

#### `table`

```rb
table(self: string) -> table
```

converts string to table of characters
"asdf":table() => {"a", "s", "d", "f"}

#### `ascii`

```rb
ascii(self: string) -> number
```

returns ASCII code of first character
"a":ascii() => 97

#### `contains?`

```rb
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

#### `index_of`

```rb
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

#### `join`

```rb
join(table: table, sep: string) -> string
```

joins table elements into string with separator

#### `__call`

```rb
__call(value: any) -> string
```

converts value to string: string(x)


### table

#### `rawget`

```rb
rawget(self: table, key: any) -> any
```

gets value without metamethods
returns :undef if key missing

#### `rawset`

```rb
rawset(self: table, key: any, value: any) -> table
```

sets value without metamethods

#### `set_meta`

```rb
set_meta(self: table) -> table
```

sets the metatable of the table

#### `unwrap`

```rb
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

#### `insert`

```rb
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

#### `push`

```rb
push(self: table, values: any...) -> table
```

inserts elements as last

_(variadic)_

#### `remove`

```rb
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

#### `concat`

```rb
concat(self: table, delim: string) -> string
```

concatenates array elements with delimiter

#### `keys`

```rb
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

#### `values`

```rb
values(self: table) -> table
```

returns all values as table

#### `has?`

```rb
has?(self: table, key: any) -> bool
```

checks if key exists in table

#### `copy`

```rb
copy(self: table) -> table
```

creates shallow copy of table

#### `merge`

```rb
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

#### `sort`

```rb
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

#### `sort_by`

```rb
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

#### `first`

```rb
first(self: table) -> any
```

returns first element or nil

#### `last`

```rb
last(self: table) -> any
```

returns last element or nil

#### `reverse`

```rb
reverse(self: table) -> table
```

reverses table array part in place

#### `flatten`

```rb
flatten(self: table) -> table
```

flattens nested tables into single array

#### `index_of`

```rb
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

#### `contains?`

```rb
contains?(self: table, value: any) -> bool
```

checks if table contains value

#### `unique`

```rb
unique(self: table) -> table
```

removes duplicate elements

#### `sum`

```rb
sum(self: table) -> number
```

sums numeric elements

#### `len`

```rb
len(self: table) -> number
```

returns length of table array part

#### `add`

```rb
add(self: table, other: table) -> table
```

merges two tables (union)


### time

#### `now`

```rb
now() -> number
```

returns current wall-clock time in milliseconds

#### `now_ns`

```rb
now_ns() -> number
```

returns current wall-clock time in nanoseconds

#### `monotonic`

```rb
monotonic() -> number
```

returns monotonic clock in milliseconds

#### `monotonic_ns`

```rb
monotonic_ns() -> number
```

returns monotonic clock in nanoseconds

#### `sleep`

```rb
sleep(ms: number) -> parked
```

parks current fiber for given milliseconds


### tuple

#### `len`

```rb
len(self: tuple) -> number
```

returns length of tuple

#### `unwrap`

```rb
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

#### `unwrap_err`

```rb
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

#### `add`

```rb
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

#### `mul`

```rb
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times


## methods

### string methods

#### `len`

```rb
len(self: string) -> number
```

returns length of string

#### `upper`

```rb
upper(self: string) -> string
```

converts string to uppercase

#### `lower`

```rb
lower(self: string) -> string
```

converts string to lowercase

#### `sub`

```rb
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

#### `find`

```rb
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

#### `replace`

```rb
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

#### `split`

```rb
split(self: string, delim: string) -> table
```

splits string by delimiter into table

#### `trim`

```rb
trim(self: string) -> string
```

trims whitespace from both ends

#### `starts_with?`

```rb
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

#### `ends_with?`

```rb
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

#### `reverse`

```rb
reverse(self: string) -> string
```

reverses the string

#### `with`

```rb
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

#### `table`

```rb
table(self: string) -> table
```

converts string to table of characters
"asdf":table() => {"a", "s", "d", "f"}

#### `ascii`

```rb
ascii(self: string) -> number
```

returns ASCII code of first character
"a":ascii() => 97

#### `contains?`

```rb
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

#### `index_of`

```rb
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

#### `__index`

```rb
__index(self: string, idx: number) -> string
```

returns character at index as single-char string

#### `add`

```rb
add(self: string, other: string) -> string
```

concatenates two strings

#### `mul`

```rb
mul(self: string, n: number) -> string
```

repeats string n times

#### `map`

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

#### `filter`

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

#### `reduce`

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

#### `each`

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

#### `find`

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

#### `all?`

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

#### `any?`

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


### table methods

#### `set_meta`

```rb
set_meta(self: table) -> table
```

sets the metatable of the table

#### `unwrap`

```rb
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

#### `insert`

```rb
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

#### `push`

```rb
push(self: table, values: any...) -> table
```

inserts elements as last

_(variadic)_

#### `remove`

```rb
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

#### `concat`

```rb
concat(self: table, delim: string) -> string
```

concatenates array elements with delimiter

#### `keys`

```rb
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

#### `values`

```rb
values(self: table) -> table
```

returns all values as table

#### `has?`

```rb
has?(self: table, key: any) -> bool
```

checks if key exists in table

#### `copy`

```rb
copy(self: table) -> table
```

creates shallow copy of table

#### `merge`

```rb
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

#### `sort`

```rb
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

#### `sort_by`

```rb
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

#### `first`

```rb
first(self: table) -> any
```

returns first element or nil

#### `last`

```rb
last(self: table) -> any
```

returns last element or nil

#### `reverse`

```rb
reverse(self: table) -> table
```

reverses table array part in place

#### `flatten`

```rb
flatten(self: table) -> table
```

flattens nested tables into single array

#### `index_of`

```rb
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

#### `contains?`

```rb
contains?(self: table, value: any) -> bool
```

checks if table contains value

#### `unique`

```rb
unique(self: table) -> table
```

removes duplicate elements

#### `sum`

```rb
sum(self: table) -> number
```

sums numeric elements

#### `len`

```rb
len(self: table) -> number
```

returns length of table array part

#### `add`

```rb
add(self: table, other: table) -> table
```

merges two tables (union)

#### `map`

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

#### `filter`

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

#### `reduce`

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

#### `each`

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

#### `find`

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

#### `all?`

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

#### `any?`

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


### tuple methods

#### `len`

```rb
len(self: tuple) -> number
```

returns length of tuple

#### `unwrap`

```rb
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

#### `unwrap_err`

```rb
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

#### `add`

```rb
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

#### `mul`

```rb
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times

#### `__index`

```rb
__index(self: tuple, idx: number) -> any
```

returns element at index

#### `map`

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

#### `filter`

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

#### `reduce`

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

#### `each`

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

#### `find`

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

#### `all?`

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

#### `any?`

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


