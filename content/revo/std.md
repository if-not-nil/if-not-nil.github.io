---
title: 'standard library'
---

<style>
.anchor {
    opacity: 0.2;
    text-decoration: none;
    margin-left: 0.3em;
    color: var(--purple);
    transition: opacity 0.15s ease;
}

h4:hover .anchor,
.anchor:target {
    opacity: 1;
}

details hr {
    border: none;
    border-top: 1px solid var(--border, rgba(255,255,255,0.1));
    margin: 1.5em 0;
}

details summary {
    cursor: pointer;
    font-size: 0.9em;
    color: var(--muted);
    padding: 0.25em 0;
    user-select: none;
}
details summary:hover {
    color: var(--text);
}

blockquote {
    border-left: 3px solid var(--warning, #f0ad4e);
    padding-left: 0.75em;
    margin: 0.5em 0;
    color: var(--muted);
}
</style>

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
>
> you'll see some metamethods here (functions prepended with `__`)
> `number.__call("42")`       is `number(42)`
> `string.__index("qwer", 2)` is `string[2]`

  </div>

</div>

<!-- docgen:start -->
## globals

[@dosuite](#dosuite) | [@dotest](#dotest) | [assert](#assert) | [assert_eq](#assert_eq) | [chan](#chan) | [cwd](#cwd) | [debug](#debug) | [expect](#expect) | [expect_eq](#expect_eq) | [fmt](#fmt) | [gensym](#gensym) | [get_metatable](#get_metatable) | [import](#import) | [inspect](#inspect) | [len](#len) | [panic](#panic) | [print](#print) | [read](#read) | [recv](#recv) | [send](#send) | [set_debug](#set_debug) | [set_metatable](#set_metatable) | [sleep](#sleep) | [system](#system) | [to_iter](#to_iter) | [type](#type) | [typeof](#typeof) | [unwrap](#unwrap)

<details>
<summary>28 entries</summary>

#### @dosuite

```ruby
@dosuite(name: string, body: function) -> :ok
```

internal, pls dont use. runs a test suite

---

#### @dotest

```ruby
@dotest(name: string, body: function) -> :ok
```

internal, do not use unless you know what you're doing. runs a test

---

#### assert

```ruby
assert(value: any) -> any
```

panics if value is falsy

---

#### assert_eq

```ruby
assert_eq(a: any, b: any) -> any
```

panics if values are not equal

---

#### chan

```ruby
chan(capacity: number?...) -> tuple
```

creates a new channel with optional buffer size

---

#### cwd

```ruby
cwd() -> string
```

returns current working directory path

---

#### debug

```ruby
debug() -> table
```

returns debug info as a table

---

#### expect

```ruby
expect(value: any) -> !any/:ExpectFailed
```

used in tests, returns value or :err

---

#### expect_eq

```ruby
expect_eq(a: any, b: any) -> !any/:NotEqual
```

panics if values are not equal

---

#### fmt

```ruby
fmt(format: string, args: any...) -> string
```

format string with %v, %d, %?, %p specifiers
string literals also support `#{expr}`, `#{expr:?}`, and `#{expr:p}` interpolation

---

#### gensym

```ruby
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

---

#### get_metatable

```ruby
get_metatable(value: any) -> table|atom
```

returns metatable of value or :missing

---

#### import

```ruby
import(path: string) -> any
```

imports a revo module by path

---

#### inspect

```ruby
inspect(value: any) -> any
```

prints one value and returns it back

---

#### len

```ruby
len(value: any) -> number|:nil
```

returns length of string or table

---

#### panic

```ruby
panic(args: any...) -> never
```

panics with given message

---

#### print

```ruby
print(args: any...) -> :ok
```

prints values to stdout with space separator

---

#### read

```ruby
read(opts: table...) -> !string
```

reads from stdin or a path 
opts:
 - delimiter: string, :eof or nothing
 - path:      string or nothing

---

#### recv

```ruby
recv(chan: tuple) -> any
```

receives value from channel, parks if empty

---

#### send

```ruby
send(chan: tuple, value: any) -> :ok
```

sends value to channel

---

#### set_debug

```ruby
set_debug(flags: table) -> :ok
```

sets debug flags from a table

---

#### set_metatable

```ruby
set_metatable(value: any, meta: table|:nil) -> any
```

sets metatable of value

---

#### sleep

```ruby
sleep(ms: number) -> parked
```

sleeps current fiber for given milliseconds

---

#### system

```ruby
system(args: table) -> !(string, string)
```

runs a subprocess and returns (stdout, stderr)

---

#### to_iter

```ruby
to_iter(obj: any) -> function
```

wraps any iterable in a zero-arg callable
built-in types (string, tuple, table) get a position-based iterator
functions return as-is (already callable)
tables with __iter metamethod call __iter(obj)

---

#### type

```ruby
type(value: any) -> atom|type
```

returns type of value as atom; struct values return the type itself, which is callable

---

#### typeof

```ruby
typeof(value: any) -> atom|type
```

returns type of value as atom: nil, number, string, atom, function, table, tuple, type, foreign; struct values return the struct type, which is callable

---

#### unwrap

```ruby
unwrap(result: tuple) -> any
```

unwraps result tuple, panics if not :ok

</details>

## modules

### compress

[base64_decode](#base64_decode) | [base64_encode](#base64_encode) | [base64url_decode](#base64url_decode) | [base64url_encode](#base64url_encode) | [deflate](#deflate) | [gzip_compress](#gzip_compress) | [gzip_decompress](#gzip_decompress) | [inflate](#inflate) | [lzma_decompress](#lzma_decompress) | [xz_decompress](#xz_decompress) | [zlib_compress](#zlib_compress) | [zlib_decompress](#zlib_decompress) | [zstd_decompress](#zstd_decompress)

<details>
<summary>13 entries</summary>

#### base64_decode

```ruby
base64_decode(data: string) -> !string
```

decodes standard base64 string

---

#### base64_encode

```ruby
base64_encode(data: string) -> string
```

encodes data as standard base64 with padding

---

#### base64url_decode

```ruby
base64url_decode(data: string) -> !string
```

decodes url-safe base64 string

---

#### base64url_encode

```ruby
base64url_encode(data: string) -> string
```

encodes data as url-safe base64 without padding

---

#### deflate

```ruby
deflate(data: string) -> !string
```

compresses data using raw deflate

---

#### gzip_compress

```ruby
gzip_compress(data: string) -> !string
```

compresses data using gzip format

---

#### gzip_decompress

```ruby
gzip_decompress(data: string) -> !string
```

decompresses gzip data

---

#### inflate

```ruby
inflate(data: string) -> !string
```

decompresses raw deflate data

---

#### lzma_decompress

```ruby
lzma_decompress(data: string) -> !string
```

decompresses lzma data

---

#### xz_decompress

```ruby
xz_decompress(data: string) -> !string
```

decompresses xz data

---

#### zlib_compress

```ruby
zlib_compress(data: string) -> !string
```

compresses data using zlib format

---

#### zlib_decompress

```ruby
zlib_decompress(data: string) -> !string
```

decompresses zlib data

---

#### zstd_decompress

```ruby
zstd_decompress(data: string) -> !string
```

decompresses zstd data

</details>

### file

[append](#append) | [close](#close) | [read](#read-1) | [readdir](#readdir) | [stat](#stat) | [write](#write)

<details>
<summary>6 entries</summary>

#### append

```ruby
append(self: table, data: any, permissions: atom|number?...) -> !number
```

appends data to the file, creating it if needed
optional permissions default to the platform file default

---

#### close

```ruby
close(self: table) -> !atom
```

closes a file handle table
this is currently a logical close for wrapper handles

---

#### read

```ruby
read(self: table) -> !string
```

reads the full file contents as a string

---

#### readdir

```ruby
readdir(self: table) -> !table
```

returns table of directory entries for the dir handle's path

---

#### stat

```ruby
stat(self: table) -> !table
```

get file metadata as a table

---

#### write

```ruby
write(self: table, data: any, permissions: atom|number?...) -> !number
```

overwrites the file with the provided string
optional permissions default to the platform file default

</details>

### fs

[exists?](#exists) | [mkdir](#mkdir) | [open](#open) | [readdir](#readdir-1) | [remove](#remove) | [rename](#rename)

<details>
<summary>6 entries</summary>

#### exists?

```ruby
exists?(path: string) -> !bool
```

does path exist?

---

#### mkdir

```ruby
mkdir(path: string, permissions: atom|number?...) -> !atom
```

creates a directory, using default permissions when omitted

---

#### open

```ruby
open(path: string) -> !table
```

wraps a path in a file handle table
use `file.close()` when you're done with the handle

---

#### readdir

```ruby
readdir(path: string) -> !table
```

returns table of directory entries

---

#### remove

```ruby
remove(path: string) -> !atom
```

removes a file or empty directory at path

---

#### rename

```ruby
rename(old_path: string, new_path: string) -> !atom
```

renames a file or directory

</details>

### iter

[all?](#all) | [any?](#any) | [chunk](#chunk) | [collect](#collect) | [collect_string](#collect_string) | [count](#count) | [drop](#drop) | [each](#each) | [enumerate](#enumerate) | [filter](#filter) | [find](#find) | [flat_map](#flat_map) | [fold](#fold) | [map](#map) | [range](#range) | [reduce](#reduce) | [sum](#sum) | [take](#take) | [to_iter](#to_iter-1) | [zip](#zip)

<details>
<summary>20 entries</summary>

#### all?

```ruby
all?(collection: any, pred: function) -> boolean
```

returns true if function returns true for all elements
   iter.all?((1, 2, 3), fn(x) x > 0)

---

#### any?

```ruby
any?(collection: any, pred: function) -> boolean
```

returns true if function returns true for any element
   iter.any?((1, 2, 3), fn(x) x > 2)

---

#### chunk

```ruby
chunk(collection: any, n: number) -> function
```

returns a lazy iterator of n-element table chunks
   iter.collect(iter.chunk((1, 2, 3, 4, 5), 2))   # ({1, 2}, {3, 4}, {5})

---

#### collect

```ruby
collect(iterable: any) -> table
```

collects all values from an iterable into a table
   iter.collect(iterable)

---

#### collect_string

```ruby
collect_string(iterable: any) -> string
```

collects string/number elements from an iterable into a string
numbers are clamped to byte values
   iter.collect_string(iter.filter("hello", fn(c) c != "l"))

---

#### count

```ruby
count(collection: any, pred: function...) -> number
```

returns the number of elements, or of those where pred is truthy
   iter.count((1, 2, 3, 4))
   iter.count((1, 2, 3, 4), fn(x) x > 2)

---

#### drop

```ruby
drop(collection: any, n: number) -> function
```

returns a lazy iterator without the first n elements
   iter.collect(iter.drop((1, 2, 3, 4), 2))

---

#### each

```ruby
each(collection: any, fn: function) -> :ok
```

iterates over elements, calling function for side effects, returns :ok
an arity-2 fn receives (value, index/key)
   iter.each({a = 1}, fn(v, k) print(k, v))

---

#### enumerate

```ruby
enumerate(collection: any) -> function
```

returns a lazy iterator of (index, value) tuples
   iter.collect(iter.enumerate((5, 7)))   # ((0, 5), (1, 7))

---

#### filter

```ruby
filter(collection: any, fn: function) -> function
```

returns a lazy iterator that only yields values where fn is truthy
an arity-2 fn receives (value, index/key)
   iter.collect(iter.filter((1, 2, 3, 4), fn(x) x > 2))

---

#### find

```ruby
find(what: any, fn: function) -> any
```

returns first element where function returns true, or nil
   iter.find((1, 2, 3, 4), fn(x) x > 2)

---

#### flat_map

```ruby
flat_map(collection: any, fn: function) -> function
```

maps each element to an iterable and yields its elements lazily
   iter.collect(iter.flat_map((1, 2), fn(x) (x, x * 10)))   # (1, 10, 2, 20)

---

#### fold

```ruby
fold(collection: any, fn: function) -> any
```

like reduce but without an initial value; first element seeds the fold
returns nil for empty collections
   iter.fold((1, 2, 3, 4), fn(acc, x) acc + x)

---

#### map

```ruby
map(collection: any, fn: function) -> function
```

returns a lazy iterator that transforms each element
an arity-2 fn receives (value, index/key); materialize with iter.collect()
   iter.collect(iter.map((1, 2, 3), fn(x) x * 2))

---

#### range

```ruby
range(end: number, rest: number...) -> function
```

generates a lazy arithmetic sequence
   range(3)           # 0, 1, 2
   range(1, 4)        # 1, 2, 3
   range(0, 10, 2)    # 0, 2, 4, 6, 8
   range(5, 0, -1)    # 5, 4, 3, 2, 1

---

#### reduce

```ruby
reduce(collection: any, fn: function, init: any) -> any
```

folds/accumulates elements using function and initial value
   iter.reduce((1, 2, 3, 4), fn(acc, x) acc + x, 0)
   iter.reduce(iter.map((1, 2), fn(x) x * 2), fn(acc, x) acc + x, 0)

---

#### sum

```ruby
sum(collection: any) -> number
```

sums numeric elements, skipping non-numbers
   iter.sum((1, 2, "x", 3))

---

#### take

```ruby
take(collection: any, n: number) -> function
```

returns a lazy iterator of the first n elements
   iter.collect(iter.take((1, 2, 3, 4), 2))

---

#### to_iter

```ruby
to_iter(obj: any) -> function
```

wraps any iterable in a zero-arg callable
built-in types (string, tuple, table) get a position-based iterator
functions return as-is (already callable)
tables with __iter metamethod call __iter(obj)

---

#### zip

```ruby
zip(first: any, rest: any...) -> function
```

returns a lazy iterator of tuples, one element from each iterable
stops at the shortest
   iter.collect(iter.zip((1, 2), (3, 4)))   # ((1, 3), (2, 4))

</details>

### json

[decode](#decode) | [encode](#encode)

<details>
<summary>2 entries</summary>

#### decode

```ruby
decode(source: string) -> !any/string
```

decodes json string into revo value

---

#### encode

```ruby
encode(value: any) -> !string
```

encodes value as json string

</details>

### math

[abs](#abs) | [ceil](#ceil) | [cos](#cos) | [exp](#exp) | [floor](#floor) | [log](#log) | [max](#max) | [min](#min) | [pow](#pow) | [sin](#sin) | [sqrt](#sqrt) | [tan](#tan)

<details>
<summary>12 entries</summary>

#### abs

```ruby
abs(x: number) -> number
```

absolute value

---

#### ceil

```ruby
ceil(x: number) -> number
```

ceiling of x

---

#### cos

```ruby
cos(x: number) -> number
```

cosine of x (x in radians)

---

#### exp

```ruby
exp(x: number) -> number
```

e raised to x

---

#### floor

```ruby
floor(x: number) -> number
```

floor of x

---

#### log

```ruby
log(x: number) -> number
```

natural logarithm, panics if x <= 0

---

#### max

```ruby
max(args: number...) -> number
```

max of all arguments

---

#### min

```ruby
min(args: number...) -> number
```

min of all arguments

---

#### pow

```ruby
pow(base: number, exponent: number) -> number
```

base raised to exponent

---

#### sin

```ruby
sin(x: number) -> number
```

sine of x (x in radians)

---

#### sqrt

```ruby
sqrt(x: number) -> number
```

square root, errors if x is negative

---

#### tan

```ruby
tan(x: number) -> number
```

tangent of x (x in radians)

</details>

### net

[connect](#connect) | [listen](#listen)

<details>
<summary>2 entries</summary>

#### connect

```ruby
connect(host: string, port: number) -> !table
```

connects to a remote host and port, returns a socket handle

---

#### listen

```ruby
listen(port: number, backlog: number?...) -> !table
```

listens for incoming connections on the given port, returns server socket

</details>

### number

[__call](#__call) | [abs](#abs-1) | [ceil](#ceil-1) | [floor](#floor-1) | [is_finite?](#is_finite) | [is_inf?](#is_inf) | [is_nan?](#is_nan) | [round](#round)

<details>
<summary>8 entries</summary>

#### __call

```ruby
__call(value: any) -> number
```

metatable key: `__call`

converts value to number: number("12") => 12

---

#### abs

```ruby
abs(self: number) -> number
```

absolute value

---

#### ceil

```ruby
ceil(self: number) -> number
```

smallest integer >= self

---

#### floor

```ruby
floor(self: number) -> number
```

largest integer <= self

---

#### is_finite?

```ruby
is_finite?(self: number) -> bool
```

checks if number is finite

---

#### is_inf?

```ruby
is_inf?(self: number) -> bool
```

checks if number is infinite

---

#### is_nan?

```ruby
is_nan?(self: number) -> bool
```

checks if number is NaN

---

#### round

```ruby
round(self: number) -> number
```

rounds to nearest integer

</details>

### re

[compile](#compile) | [find](#find-1) | [find_all](#find_all) | [free](#free) | [is_match](#is_match)

<details>
<summary>5 entries</summary>

#### compile

```ruby
compile(pattern: string) -> table
```

compile a regex pattern into a reusable handle

---

#### find

```ruby
find(regex: table | string, haystack: string) -> string | :nil
```

return first match or nil; pass a string for one-shot compile

---

#### find_all

```ruby
find_all(regex: table | string, haystack: string) -> function
```

return an iterator over all matches; pass a string for one-shot compile

---

#### free

```ruby
free(regex: table) -> :nil
```

free a compiled regex handle

---

#### is_match

```ruby
is_match(regex: table | string, haystack: string) -> bool
```

test if regex matches anywhere in haystack; pass a string for one-shot compile

</details>

### revo

[build](#build) | [eval](#eval) | [version](#version)

<details>
<summary>3 entries</summary>

#### build

```ruby
build(code: string) -> !string
```

builds it as a module, gives you back its' bytecode in a string
the string is only useful for writing to a file or executing

---

#### eval

```ruby
eval(code: string) -> !any/string
```

evaluates it as a module, gives you back its' return value
you can treat it as a function's body

---

#### version

```ruby
version() -> string
```

version of your revo installation, like "revo v1.2.3"

</details>

### rng

[choice](#choice) | [rand](#rand) | [rand_float](#rand_float) | [range](#range-1) | [revert_seed](#revert_seed) | [set_seed](#set_seed)

<details>
<summary>6 entries</summary>

#### choice

```ruby
choice(input: table) -> any
```

Returns a random element from a table (note: this function *ignores* key value pairs.)

---

#### rand

```ruby
rand(upper_bound: number) -> number
```

Returns a random integer in the range [0, upper_bound]

---

#### rand_float

```ruby
rand_float() -> number
```

Returns a random float in the range [0, 1]

---

#### range

```ruby
range(lower_bound: number, upper_bound: number) -> number
```

Returns a random integer in the range [lower_bound, upper_bound]

---

#### revert_seed

```ruby
revert_seed()
```

Reverts seed back to using the current time at the time of generation.

---

#### set_seed

```ruby
set_seed(seed: number)
```

Statically sets the seed used for generation of pseudo-random numbers.

</details>

### socket

[accept](#accept) | [close](#close-1) | [recv](#recv-1) | [send](#send-1)

<details>
<summary>4 entries</summary>

#### accept

```ruby
accept(self: table) -> !table
```

accepts an incoming client connection on a server socket

---

#### close

```ruby
close(self: table) -> !atom
```

closes the socket

---

#### recv

```ruby
recv(self: table, opts: table) -> !string
```

receives data according to opts.mode (:read_some | :read_all | :read_line)

---

#### send

```ruby
send(self: table, data: string) -> !number
```

sends data over the socket, returns number of bytes sent

</details>

### string

[__call](#__call-1) | [ascii](#ascii) | [contains?](#contains) | [ends_with?](#ends_with) | [find](#find-2) | [index_of](#index_of) | [join](#join) | [len](#len-1) | [lower](#lower) | [of_ascii](#of_ascii) | [replace](#replace) | [reverse](#reverse) | [split](#split) | [starts_with?](#starts_with) | [sub](#sub) | [table](#table) | [trim](#trim) | [upper](#upper) | [with](#with)

<details>
<summary>19 entries</summary>

#### __call

```ruby
__call(value: any) -> string
```

metatable key: `__call`

converts value to string: string(x)

---

#### ascii

```ruby
ascii(self: string) -> number
```

returns ASCII code of first character

```revo
"a":ascii() => 97
```

---

#### contains?

```ruby
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

---

#### ends_with?

```ruby
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

---

#### find

```ruby
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

---

#### index_of

```ruby
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

---

#### join

```ruby
join(table: table, sep: string) -> string
```

joins table elements into string with separator

---

#### len

```ruby
len(self: string) -> number
```

returns length of string

---

#### lower

```ruby
lower(self: string) -> string
```

converts string to lowercase

---

#### of_ascii

```ruby
of_ascii(code: number) -> string
```

creates string from ASCII code(s)

```revo
of_ascii(97) => "a"
```

---

#### replace

```ruby
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

---

#### reverse

```ruby
reverse(self: string) -> string
```

reverses the string

---

#### split

```ruby
split(self: string, delim: string) -> table
```

splits string by delimiter into table

---

#### starts_with?

```ruby
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

---

#### sub

```ruby
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

---

#### table

```ruby
table(self: string) -> table
```

converts string to table of characters

```revo
"asdf":table() => {"a", "s", "d", "f"}
```

---

#### trim

```ruby
trim(self: string) -> string
```

trims whitespace from both ends

---

#### upper

```ruby
upper(self: string) -> string
```

converts string to uppercase

---

#### with

```ruby
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

</details>

### table

[add](#add) | [contains?](#contains-1) | [copy](#copy) | [first](#first) | [flatten](#flatten) | [has?](#has) | [index_of](#index_of-1) | [insert](#insert) | [join](#join-1) | [keys](#keys) | [last](#last) | [len](#len-2) | [merge](#merge) | [push](#push) | [rawget](#rawget) | [rawset](#rawset) | [remove](#remove-1) | [reverse](#reverse-1) | [set_meta](#set_meta) | [sort](#sort) | [sort_by](#sort_by) | [unique](#unique) | [unwrap](#unwrap-1) | [values](#values)

<details>
<summary>24 entries</summary>

#### add

```ruby
add(self: table, other: table) -> table
```

merges two tables (union)

---

#### contains?

```ruby
contains?(self: table, value: any) -> bool
```

checks if table contains value

---

#### copy

```ruby
copy(self: table) -> table
```

creates shallow copy of table

---

#### first

```ruby
first(self: table) -> any
```

returns first element or nil

---

#### flatten

```ruby
flatten(self: table) -> table
```

flattens nested tables into single array

---

#### has?

```ruby
has?(self: table, key: any) -> bool
```

checks if key exists in table

---

#### index_of

```ruby
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

---

#### insert

```ruby
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

---

#### join

```ruby
join(self: table, delim: string) -> string
```

joins array elements with delimiter

---

#### keys

```ruby
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

---

#### last

```ruby
last(self: table) -> any
```

returns last element or nil

---

#### len

```ruby
len(self: table) -> number
```

returns length of table array part

---

#### merge

```ruby
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

---

#### push

```ruby
push(self: table, values: any...) -> table
```

inserts elements as last

---

#### rawget

```ruby
rawget(self: table, key: any) -> any
```

gets value without metamethods
returns :undef if key missing

---

#### rawset

```ruby
rawset(self: table, key: any, value: any) -> table
```

sets value without metamethods

---

#### remove

```ruby
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

---

#### reverse

```ruby
reverse(self: table) -> table
```

reverses table array part in place

---

#### set_meta

```ruby
set_meta(self: table) -> table
```

sets the metatable of the table

---

#### sort

```ruby
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

---

#### sort_by

```ruby
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

---

#### unique

```ruby
unique(self: table) -> table
```

removes duplicate elements

---

#### unwrap

```ruby
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

---

#### values

```ruby
values(self: table) -> table
```

returns all values as table

</details>

### time

[monotonic](#monotonic) | [monotonic_ns](#monotonic_ns) | [now](#now) | [now_ns](#now_ns) | [sleep](#sleep-1)

<details>
<summary>5 entries</summary>

#### monotonic

```ruby
monotonic() -> number
```

returns monotonic clock in milliseconds

---

#### monotonic_ns

```ruby
monotonic_ns() -> number
```

returns monotonic clock in nanoseconds since the first call

---

#### now

```ruby
now() -> number
```

returns current wall-clock time in milliseconds

---

#### now_ns

```ruby
now_ns() -> number
```

returns current wall-clock time in nanoseconds since the first call

---

#### sleep

```ruby
sleep(ms: number) -> parked
```

parks current fiber for given milliseconds

</details>

### tuple

[add](#add-1) | [len](#len-3) | [mul](#mul) | [unwrap](#unwrap-2) | [unwrap_err](#unwrap_err)

<details>
<summary>5 entries</summary>

#### add

```ruby
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

---

#### len

```ruby
len(self: tuple) -> number
```

returns length of tuple

---

#### mul

```ruby
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times

---

#### unwrap

```ruby
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

---

#### unwrap_err

```ruby
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

</details>

## methods

### number

[abs](#abs-2) | [ceil](#ceil-2) | [floor](#floor-2) | [is_finite?](#is_finite-1) | [is_inf?](#is_inf-1) | [is_nan?](#is_nan-1) | [round](#round-1)

<details>
<summary>7 entries</summary>

#### abs

```ruby
abs(self: number) -> number
```

absolute value

---

#### ceil

```ruby
ceil(self: number) -> number
```

smallest integer >= self

---

#### floor

```ruby
floor(self: number) -> number
```

largest integer <= self

---

#### is_finite?

```ruby
is_finite?(self: number) -> bool
```

checks if number is finite

---

#### is_inf?

```ruby
is_inf?(self: number) -> bool
```

checks if number is infinite

---

#### is_nan?

```ruby
is_nan?(self: number) -> bool
```

checks if number is NaN

---

#### round

```ruby
round(self: number) -> number
```

rounds to nearest integer

</details>

### string

[__index](#__index) | [add](#add-2) | [ascii](#ascii-1) | [contains?](#contains-2) | [ends_with?](#ends_with-1) | [find](#find-3) | [index_of](#index_of-2) | [len](#len-4) | [lower](#lower-1) | [mul](#mul-1) | [replace](#replace-1) | [reverse](#reverse-2) | [split](#split-1) | [starts_with?](#starts_with-1) | [sub](#sub-1) | [table](#table-1) | [trim](#trim-1) | [upper](#upper-1) | [with](#with-1)

<details>
<summary>19 entries</summary>

#### __index

```ruby
__index(self: string, idx: number) -> string
```

metatable key: `__index`

returns character at index as single-char string

---

#### add

```ruby
add(self: string, other: string) -> string
```

concatenates two strings

---

#### ascii

```ruby
ascii(self: string) -> number
```

returns ASCII code of first character

```revo
"a":ascii() => 97
```

---

#### contains?

```ruby
contains?(self: string, substr: string) -> bool
```

checks if string contains substring

---

#### ends_with?

```ruby
ends_with?(self: string, suffix: string) -> bool
```

checks if string ends with suffix

---

#### find

```ruby
find(self: string, needle: string) -> number|atom
```

finds first occurrence of needle in string
returns index or :missing if not found

---

#### index_of

```ruby
index_of(self: string, substr: string) -> number|:nil
```

ret 0-based index of substring or nil

---

#### len

```ruby
len(self: string) -> number
```

returns length of string

---

#### lower

```ruby
lower(self: string) -> string
```

converts string to lowercase

---

#### mul

```ruby
mul(self: string, n: number) -> string
```

repeats string n times

---

#### replace

```ruby
replace(self: string, old: string, new: string) -> string
```

replaces all occurrences of old with new

---

#### reverse

```ruby
reverse(self: string) -> string
```

reverses the string

---

#### split

```ruby
split(self: string, delim: string) -> table
```

splits string by delimiter into table

---

#### starts_with?

```ruby
starts_with?(self: string, prefix: string) -> bool
```

checks if string starts with prefix

---

#### sub

```ruby
sub(self: string, start: number, length: number) -> string
```

extracts substring from start with given length

---

#### table

```ruby
table(self: string) -> table
```

converts string to table of characters

```revo
"asdf":table() => {"a", "s", "d", "f"}
```

---

#### trim

```ruby
trim(self: string) -> string
```

trims whitespace from both ends

---

#### upper

```ruby
upper(self: string) -> string
```

converts string to uppercase

---

#### with

```ruby
with(self: string, idx: number, char: string|number) -> string
```

replaces character at index with given char or byte
index is 0-based

</details>

### table

[add](#add-3) | [contains?](#contains-3) | [copy](#copy-1) | [first](#first-1) | [flatten](#flatten-1) | [has?](#has-1) | [index_of](#index_of-3) | [insert](#insert-1) | [join](#join-2) | [keys](#keys-1) | [last](#last-1) | [len](#len-5) | [merge](#merge-1) | [push](#push-1) | [remove](#remove-2) | [reverse](#reverse-3) | [set_meta](#set_meta-1) | [sort](#sort-1) | [sort_by](#sort_by-1) | [unique](#unique-1) | [unwrap](#unwrap-3) | [values](#values-1)

<details>
<summary>22 entries</summary>

#### add

```ruby
add(self: table, other: table) -> table
```

merges two tables (union)

---

#### contains?

```ruby
contains?(self: table, value: any) -> bool
```

checks if table contains value

---

#### copy

```ruby
copy(self: table) -> table
```

creates shallow copy of table

---

#### first

```ruby
first(self: table) -> any
```

returns first element or nil

---

#### flatten

```ruby
flatten(self: table) -> table
```

flattens nested tables into single array

---

#### has?

```ruby
has?(self: table, key: any) -> bool
```

checks if key exists in table

---

#### index_of

```ruby
index_of(self: table, value: any) -> number|:nil
```

ret 0-based index of value or nil if not found

---

#### insert

```ruby
insert(self: table, pos: number, value: any) -> atom
```

inserts value at position, shifting elements right

---

#### join

```ruby
join(self: table, delim: string) -> string
```

joins array elements with delimiter

---

#### keys

```ruby
keys(self: table) -> table
```

returns all keys as table (array indices + hash keys)

---

#### last

```ruby
last(self: table) -> any
```

returns last element or nil

---

#### len

```ruby
len(self: table) -> number
```

returns length of table array part

---

#### merge

```ruby
merge(self: table, other: table) -> table
```

merges second table into first
later values overwrite earlier ones

---

#### push

```ruby
push(self: table, values: any...) -> table
```

inserts elements as last

---

#### remove

```ruby
remove(self: table, pos: number) -> any
```

removes element at position, returns removed value

---

#### reverse

```ruby
reverse(self: table) -> table
```

reverses table array part in place

---

#### set_meta

```ruby
set_meta(self: table) -> table
```

sets the metatable of the table

---

#### sort

```ruby
sort(self: table) -> table
```

sorts table array part in ascending order (numbers < strings)

---

#### sort_by

```ruby
sort_by(self: table, fn: function) -> table
```

sorts table array part using comparison function fn(a, b) -> bool (true if a < b)

---

#### unique

```ruby
unique(self: table) -> table
```

removes duplicate elements

---

#### unwrap

```ruby
unwrap(self: table) -> any
```

unwraps result tuple, panics if not :ok

---

#### values

```ruby
values(self: table) -> table
```

returns all values as table

</details>

### tuple

[__index](#__index-1) | [add](#add-4) | [len](#len-6) | [mul](#mul-2) | [unwrap](#unwrap-4) | [unwrap_err](#unwrap_err-1)

<details>
<summary>6 entries</summary>

#### __index

```ruby
__index(self: tuple, idx: number) -> any
```

metatable key: `__index`

returns element at index

---

#### add

```ruby
add(self: tuple, other: tuple) -> tuple
```

concatenates two tuples

---

#### len

```ruby
len(self: tuple) -> number
```

returns length of tuple

---

#### mul

```ruby
mul(self: tuple, n: number) -> tuple
```

repeats tuple n times

---

#### unwrap

```ruby
unwrap(self: tuple) -> any
```

unwraps result tuple, panics if not :ok

---

#### unwrap_err

```ruby
unwrap_err(self: tuple) -> any
```

extracts error from result tuple, panics if not :err

</details>
<!-- docgen:end -->
