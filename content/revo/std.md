---
title: 'standard library'
---


# revo's std lib
> auto generated from source

# core

### fmt(format: string, args: any...) -> string
format string with %v, %d, %? specifiers
%v: display value, %d: as number, %?: debug repr

```
fmt("hello %v", "world")
fmt("val: %v, num: %d", "x", 42)
```
### table:len() -> number
returns length of table array part
### get_metatable(arg0: any)
### set_metatable(tbl: table, meta: table) -> table
returns table with the mt set

```
t = {}
mt = {__len = fn() 42}
set_metatable(t, mt)
```
### typeof(arg0: any) -> string
returns type of arg0 as string
possible values: nil, number, string, atom, function, table, tuple
### table:tostring() -> string
converts table to display string
### tonumber(arg0: any) -> NativeResult
converts value to number
accepts number (passthrough) or string (parsed)
errors on other types
### assert(arg0: any) -> NativeResult
asserts value is truthy
errors with "assertion failed" if value is false or nil
### set_debug(arg0: table)
### @range(start: number, step: number, stop: number) -> tuple
creates a range tuple (start, step, stop)
### @range_from(start: number, step: number) -> tuple
creates a range tuple (start, step) without stop
### @struct_new(arg0: table, arg1: table)
### @try(result: tuple) -> any
unwraps result tuple, panics if not :ok
### @eval(arg0: string)
### chan(capacity?: number) -> tuple
creates a new channel with optional buffer size

```
chan()        # unbuffered
chan(5)       # buffer of 5
```
### send(chan: tuple, value: any) -> atom
sends value to channel
### recv(chan: tuple) -> any
receives value from channel, parks if empty
### sleep(ms: number) -> parked
sleeps current fiber for given milliseconds
parks fiber instead of blocking
### print(args: any...) -> atom
prints values to stdout with space separator

```
print("hello", 42, "world")
```
### panic(args: any...) -> error
panics with given message

```
panic("something went wrong")
```
---
# string

### string_of(code: number | tuple) -> string
creates string from ASCII code(s)
string_of(97) => "a"
string_of({97, 98}) => "ab"
### string.join(table: table, sep: string) -> string
joins table elements into string with separator
### table:len() -> number
returns length of table array part
### string:upper() -> string
converts string to uppercase
### string:lower() -> string
converts string to lowercase
### string:sub(start: number, length: number) -> string
extracts substring from start with given length
### string:find(needle: string) -> number|atom
finds first occurrence of needle in string
returns index or :missing if not found
### string:replace(old: string, new: string) -> string
replaces all occurrences of old with new
### string:split(delim: string) -> table
splits string by delimiter into table
### string:trim() -> string
trims whitespace from both ends
### string:starts_with(prefix: string) -> bool
checks if string starts with prefix
### string:ends_with(suffix: string) -> bool
checks if string ends with suffix
### table:reverse() -> table
reverses table array part in place
### string:with(idx: number, char: string|number) -> string
replaces character at index with given char or byte
index is 0-based
### string:table() -> table
converts string to table of characters
"asdf":table() => {"a", "s", "d", "f"}
### string:ascii() -> number
returns ASCII code of first character
"a":ascii() => 97
### table:contains(value) -> bool
checks if table contains value
### table:index_of(value) -> number | nil
returns 1-based index of value or nil if not found
### string[idx: number] -> string
returns character at index as single-char string
### string + other: string -> string
concatenates two strings
### string * n: number -> string
repeats string n times
### string:tostring() -> string
returns string as-is (identity for tostring)
---
# table

### table:insert(pos: number, value: any) -> atom
inserts value at position, shifting elements right
### table:as_tuple() -> tuple
converts table array part to tuple
### table:remove(pos: number) -> any
removes element at position, returns removed value
### table:concat(delim: string) -> string
concatenates array elements with delimiter
### table:keys() -> table
returns all keys as table (array indices + hash keys)
### table:values() -> table
returns all values as table
### table:has(key: any) -> bool
checks if key exists in table
### table:copy() -> table
creates shallow copy of table
### table:merge(other: table) -> table
merges second table into first
later values overwrite earlier ones
### table:sort() -> table
sorts table array part in ascending order (numbers < strings)
### table:sort_by(fn) -> table
sorts table array part using comparison function fn(a, b) -> bool (true if a < b)
### table:first() -> any
returns first element or nil
### table:last() -> any
returns last element or nil
### table:reverse() -> table
reverses table array part in place
### table:flatten() -> table
flattens nested tables into single array
### table:index_of(value) -> number | nil
returns 1-based index of value or nil if not found
### table:contains(value) -> bool
checks if table contains value
### table:unique() -> table
removes duplicate elements
### table:sum() -> number
sums numeric elements
### table:len() -> number
returns length of table array part
### table + other: table -> table
merges two tables (union)
### table:tostring() -> string
converts table to display string
### table:__debug() -> string
converts table to debug string
---
# iter

### map(collection: string|tuple|table, fn: function) -> string|tuple|table
transforms each element by applying function

```
map("hello", fn(c) = c:upper())
map((1,2,3), fn(x) = x * 2)
map({a=1, b=2}, fn(v) = v + 10)
```
### filter(collection: string|tuple|table, fn: function) -> string|tuple|table
keeps only elements where function returns true

```
filter("hello", fn(c) = c != "l")
filter((1,2,3,4), fn(x) = x > 2)
filter({a=1, b=2}, fn(v) = v > 1)
```
### reduce(collection: string|tuple|table, fn: function, init: any) -> any
folds/accumulates elements using function and initial value

```
reduce((1,2,3,4), fn(acc, x) = acc + x, 0)
reduce("hello", fn(acc, c) = acc + 1, 0)
reduce({a=1, b=2}, fn(acc, v) = acc + v, 0)
```
### each(collection: string|tuple|table, fn: function) -> atom
iterates over elements, calling function for side effects, returns :ok

```
each("hello", fn(c) = print(c))
each((1,2,3), fn(x) = print(x))
each({a=1, b=2}, fn(v) = print(v))
```
### find(collection: string|tuple|table, fn: function) -> any
returns first element where function returns true, or :missing if not found

```
find("hello", fn(c) = c == "l")
find((1,2,3,4), fn(x) = x > 2)
find({a=1, b=2}, fn(v) = v > 1)
```
### all(collection: string|tuple|table, fn: function) -> boolean
returns true if function returns true for all elements

```
all((1,2,3), fn(x) = x > 0)
all("hello", fn(c) = c != " ")
all({a=1, b=2}, fn(v) = v > 0)
```
### any(collection: string|tuple|table, fn: function) -> boolean
returns true if function returns true for any element

```
any((1,2,3), fn(x) = x > 2)
any("hello", fn(c) = c == "l")
any({a=1, b=2}, fn(v) = v > 1)
```
