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

```rb
fmt(format: string, args: any...) -> string # variadic
```

format string with %v, %d, %?, %p specifiers
string literals also support `{expr}`, `{expr:?}`, and `{expr:p}` interpolation

```rb
len(value: any) -> number|:nil
```

returns length of string or table

```rb
inspect(value: any) -> any
```

prints one value and returns it back

```rb
get_metatable(value: any) -> table|atom
```

returns metatable of value or :missing

```rb
set_metatable(value: any, meta: table|:nil) -> any
```

sets metatable of value

```rb
type(value: any) -> atom
```

returns type of value as atom

```rb
typeof(value: any) -> atom
```

returns type of value as atom

```rb
number(value: string) -> !number/string
```

converts string to number

```rb
expect(value: any) -> !any/:ExpectFailed
```

used in tests, returns value or :err

```rb
expect_eq(a: any, b: any) -> !any/:NotEqual
```

panics if values are not equal

```rb
assert(value: any) -> any
```

panics if value is falsy

```rb
assert_eq(a: any, b: any) -> any
```

panics if values are not equal

```rb
set_debug(flags: table) -> :ok
```

sets debug flags from a table

```rb
debug() -> table
```

returns debug info as a table

```rb
unwrap(result: tuple) -> any
```

unwraps result tuple, panics if not :ok

```rb
chan(capacity: number?) -> tuple # variadic
```

creates a new channel with optional buffer size

```rb
send(chan: tuple, value: any) -> :ok
```

sends value to channel

```rb
recv(chan: tuple) -> any
```

receives value from channel, parks if empty

```rb
sleep(ms: number) -> parked
```

sleeps current fiber for given milliseconds

```rb
panic(args: any...) -> never # variadic
```

panics with given message

```rb
print(args: any...) -> :ok # variadic
```

prints values to stdout with space separator

```rb
gensym() -> string
```

returns a unique interned string for use as an identifier

```revo
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

```rb
string_of(code: any) -> string
```

creates string from ASCII code(s)
  string_of(97) => "a"
  string_of({97, 98}) => "ab"

```rb
string_join(table: table, sep: string) -> string
```

joins table elements into string with separator

```rb
to_iter(obj: any) -> function
```

wraps any iterable in a zero-arg callable
built-in types (string, tuple, table) get a position-based iterator
functions return as-is (already callable)
tables with __iter metamethod call __iter(obj)

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)

```rb
compile(pattern: string) -> table
```

compile a regex pattern into a reusable handle

```rb
is_match(regex: table | string, haystack: string) -> bool
```

test if regex matches anywhere in haystack; pass a string for one-shot compile

```rb
find(regex: table | string, haystack: string) -> string | :nil
```

return first match or nil; pass a string for one-shot compile

```rb
find_all(regex: table | string, haystack: string) -> function
```

return an iterator over all matches; pass a string for one-shot compile

```rb
free(regex: table) -> :nil
```

free a compiled regex handle

```rb
c_use(path: string) -> :nil
```

loads a C extension lib and registers its functions

```rb
read(opts: table?) -> !string # variadic
```

reads from stdin or a path 
opts:
 - delimiter: string, :eof or nothing
 - path:      string or nothing

```rb
cwd() -> string
```

returns current working directory path

```rb
system(args: table) -> (:stdout, :stderr)
```

runs a subprocess and returns (stdout, stderr)

```rb
import(path: string) -> any
```

imports a revo module by path

```rb
@dotest(name: string, body: function) -> :ok
```

internal, do not use unless you know what you're doing. runs a test

```rb
@dosuite(name: string, body: function) -> :ok
```

internal, pls dont use. runs a test suite


## modules

### compress

```rb
base64_encode(data: string) -> string
```

encodes data as standard base64 with padding

```rb
base64_decode(data: string) -> !string
```

decodes standard base64 string

```rb
base64url_encode(data: string) -> string
```

encodes data as url-safe base64 without padding

```rb
base64url_decode(data: string) -> !string
```

decodes url-safe base64 string

```rb
gzip_compress(data: string) -> !string
```

compresses data using gzip format

```rb
gzip_decompress(data: string) -> !string
```

decompresses gzip data

```rb
zlib_compress(data: string) -> !string
```

compresses data using zlib format

```rb
zlib_decompress(data: string) -> !string
```

decompresses zlib data

```rb
deflate(data: string) -> !string
```

compresses data using raw deflate

```rb
inflate(data: string) -> !string
```

decompresses raw deflate data

```rb
zstd_decompress(data: string) -> !string
```

decompresses zstd data

```rb
lzma_decompress(data: string) -> !string
```

decompresses lzma data

```rb
xz_decompress(data: string) -> !string
```

decompresses xz data


### file

```rb
readdir(self: table) -> !table/atom
```

returns table of directory entries for the dir handle's path

```rb
read(self: table) -> !string/atom
```

reads the full file contents as a string

```rb
write(self: table, data: any, permissions: atom|number?) -> !number/atom # variadic
```

overwrites the file with the provided string
optional permissions default to the platform file default

```rb
append(self: table, data: any, permissions: atom|number?) -> !number/atom # variadic
```

appends data to the file, creating it if needed
optional permissions default to the platform file default

```rb
stat(self: table) -> !table/atom
```

get file metadata as a table

```rb
close(self: table) -> !atom/atom
```

closes a file handle table
this is currently a logical close for wrapper handles


### fs

```rb
open(path: string) -> !table/atom
```

wraps a path in a file handle table
use `file.close()` when you're done with the handle

```rb
readdir(path: string) -> !table/atom
```

returns table of directory entries

```rb
exists?(path: string) -> !bool/atom
```

does path exist?

```rb
remove(path: string) -> !atom/atom
```

removes a file or empty directory at path

```rb
mkdir(path: string, permissions: atom|number?) -> !atom/atom # variadic
```

creates a directory, using default permissions when omitted

```rb
rename(old_path: string, new_path: string) -> !atom/atom
```

renames a file or directory


### iter

```rb
collect(iterable: any) -> table
```

collects all values from an iterable into a table
   iter.collect(iterable)


### json

```rb
encode(value: any) -> !string
```

encodes value as json string

```rb
decode(source: string) -> !any/string
```

decodes json string into revo value


### math

```rb
abs(x: number) -> number
```

absolute value

```rb
floor(x: number) -> number
```

floor of x

```rb
ceil(x: number) -> number
```

ceiling of x

```rb
sqrt(x: number) -> number
```

square root, errors if x is negative

```rb
pow(base: number, exponent: number) -> number
```

base raised to exponent

```rb
min(args: number...) -> number # variadic
```

min of all arguments

```rb
max(args: number...) -> number # variadic
```

max of all arguments

```rb
sin(x: number) -> number
```

sine of x (x in radians)

```rb
cos(x: number) -> number
```

cosine of x (x in radians)

```rb
tan(x: number) -> number
```

tangent of x (x in radians)

```rb
log(x: number) -> number
```

natural logarithm, panics if x <= 0

```rb
exp(x: number) -> number
```

e raised to x


### net

```rb
connect(host: string, port: number) -> !table/atom
```

connects to a remote host and port, returns a socket handle

```rb
listen(port: number, backlog: number?) -> !table/atom # variadic
```

listens for incoming connections on the given port, returns server socket


### re

```rb
compile(pattern: string) -> table
```

compile a regex pattern into a reusable handle

```rb
is_match(regex: table | string, haystack: string) -> bool
```

test if regex matches anywhere in haystack; pass a string for one-shot compile

```rb
find(regex: table | string, haystack: string) -> string | :nil
```

return first match or nil; pass a string for one-shot compile

```rb
find_all(regex: table | string, haystack: string) -> function
```

return an iterator over all matches; pass a string for one-shot compile

```rb
free(regex: table) -> :nil
```

free a compiled regex handle


### revo

```rb
eval(code: string) -> !any/string
```

evaluates it as a module, gives you back its' return value
you can treat it as a function's body

```rb
build(code: string) -> !string
```

builds it as a module, gives you back its' bytecode in a string
the string is only useful for writing to a file or executing


### socket

```rb
accept(self: table) -> !table/atom
```

accepts an incoming client connection on a server socket

```rb
send(self: table, data: string) -> !number/atom
```

sends data over the socket, returns number of bytes sent

```rb
recv(self: table, opts: table) -> !string/atom
```

receives data according to opts.mode (:read_some | :read_all | :read_line)

```rb
close(self: table) -> !atom/atom
```

closes the socket


### string

```rb
len(self: string) -> number
```

returns length of string

```rb
upper(self: string) -> string
```

converts string to uppercase

```rb
lower(self: string) -> string
```

converts string to lowercase

```rb
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

```rb
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

```rb
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

```rb
split(self: string, delim: string) -> table
```

splits string by delimiter into table

```rb
trim(self: string) -> string
```

trims whitespace from both ends

```rb
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

```rb
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

```rb
reverse(self: string) -> string
```

reverses the string

```rb
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

```rb
table(self: string) -> table
```

converts string to table of characters
"asdf":table() => {"a", "s", "d", "f"}

```rb
ascii(self: string) -> number
```

returns ASCII code of first character
"a":ascii() => 97

```rb
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

```rb
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

```rb
join(table: table, sep: string) -> string
```

joins table elements into string with separator

```rb
__call(value: any) -> string
```

converts value to string: string(x)


### table

```rb
rawget(self: table, key: any) -> any
```

gets value without metamethods
returns :undef if key missing

```rb
rawset(self: table, key: any, value: any) -> table
```

sets value without metamethods

```rb
set_meta(self: table) -> table
```

sets the metatable of the table

```rb
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

```rb
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

```rb
push(self: table, values: any...) -> table # variadic
```

inserts elements as last

```rb
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

```rb
concat(self: table, delim: string) -> string
```

concatenates array elements with delimiter

```rb
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

```rb
values(self: table) -> table
```

returns all values as table

```rb
has?(self: table, key: any) -> bool
```

checks if key exists in table

```rb
copy(self: table) -> table
```

creates shallow copy of table

```rb
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

```rb
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

```rb
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

```rb
first(self: table) -> any
```

returns first element or nil

```rb
last(self: table) -> any
```

returns last element or nil

```rb
reverse(self: table) -> table
```

reverses table array part in place

```rb
flatten(self: table) -> table
```

flattens nested tables into single array

```rb
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

```rb
contains?(self: table, value: any) -> bool
```

checks if table contains value

```rb
unique(self: table) -> table
```

removes duplicate elements

```rb
sum(self: table) -> number
```

sums numeric elements

```rb
len(self: table) -> number
```

returns length of table array part

```rb
add(self: table, other: table) -> table
```

merges two tables (union)


### time

```rb
now() -> number
```

returns current wall-clock time in milliseconds

```rb
now_ns() -> number
```

returns current wall-clock time in nanoseconds

```rb
monotonic() -> number
```

returns monotonic clock in milliseconds

```rb
monotonic_ns() -> number
```

returns monotonic clock in nanoseconds

```rb
sleep(ms: number) -> parked
```

parks current fiber for given milliseconds


### tuple

```rb
len(self: tuple) -> number
```

returns length of tuple

```rb
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

```rb
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

```rb
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

```rb
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times


## methods

### string methods

```rb
len(self: string) -> number
```

returns length of string

```rb
upper(self: string) -> string
```

converts string to uppercase

```rb
lower(self: string) -> string
```

converts string to lowercase

```rb
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

```rb
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

```rb
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

```rb
split(self: string, delim: string) -> table
```

splits string by delimiter into table

```rb
trim(self: string) -> string
```

trims whitespace from both ends

```rb
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

```rb
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

```rb
reverse(self: string) -> string
```

reverses the string

```rb
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

```rb
table(self: string) -> table
```

converts string to table of characters
"asdf":table() => {"a", "s", "d", "f"}

```rb
ascii(self: string) -> number
```

returns ASCII code of first character
"a":ascii() => 97

```rb
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

```rb
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

```rb
__index(self: string, idx: number) -> string
```

returns character at index as single-char string

```rb
add(self: string, other: string) -> string
```

concatenates two strings

```rb
mul(self: string, n: number) -> string
```

repeats string n times

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


### table methods

```rb
set_meta(self: table) -> table
```

sets the metatable of the table

```rb
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

```rb
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

```rb
push(self: table, values: any...) -> table # variadic
```

inserts elements as last

```rb
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

```rb
concat(self: table, delim: string) -> string
```

concatenates array elements with delimiter

```rb
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

```rb
values(self: table) -> table
```

returns all values as table

```rb
has?(self: table, key: any) -> bool
```

checks if key exists in table

```rb
copy(self: table) -> table
```

creates shallow copy of table

```rb
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

```rb
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

```rb
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

```rb
first(self: table) -> any
```

returns first element or nil

```rb
last(self: table) -> any
```

returns last element or nil

```rb
reverse(self: table) -> table
```

reverses table array part in place

```rb
flatten(self: table) -> table
```

flattens nested tables into single array

```rb
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

```rb
contains?(self: table, value: any) -> bool
```

checks if table contains value

```rb
unique(self: table) -> table
```

removes duplicate elements

```rb
sum(self: table) -> number
```

sums numeric elements

```rb
len(self: table) -> number
```

returns length of table array part

```rb
add(self: table, other: table) -> table
```

merges two tables (union)

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


### tuple methods

```rb
len(self: tuple) -> number
```

returns length of tuple

```rb
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

```rb
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

```rb
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

```rb
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times

```rb
__index(self: tuple, idx: number) -> any
```

returns element at index

```rb
map(collection: any, fn: function) -> string|tuple|table
```

transforms each element by applying function
   map("hello", fn(c) = c:upper())
   map((1,2,3), fn(x) = x * 2)
   map({a=1, b=2}, fn(v) = v + 10)

```rb
filter(collection: any, fn: function) -> function
```

returns a new iterator that only yields values where pred returns truthy
   filter((1,2,3,4), fn(x) = x > 2)

```rb
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
   reduce("hello", fn(acc, c) = acc + 1, 0)
   reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)

```rb
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
   each("hello", fn(c) = print(c))
   each((1,2,3), fn(x) = print(x))
   each({a=1, b=2}, fn(v) = print(v))

```rb
find(what: any, fn: function) -> any
```

returns first element where function returns true, or :missing if not found
   find("hello", fn(c) = c == "l")
   find((1,2,3,4), fn(x) = x > 2)
   find({a=1, b=2}, fn(v) = v > 1)

```rb
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   all?((1,2,3), fn(x) = x > 0)
   all?("hello", fn(c) = c != " ")
   all?({a=1, b=2}, fn(v) = v > 0)

```rb
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   any?((1,2,3), fn(x) = x > 2)
   any?("hello", fn(c) = c == "l")
   any?({a=1, b=2}, fn(v) = v > 1)


