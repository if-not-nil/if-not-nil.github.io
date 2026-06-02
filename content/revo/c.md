---
title: two-way c interop
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
<div style="flex:1; min-width:250px;">

# two-way c<->revo interop
[docs](docs/basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo) | [license](#license)

> c is the only language that has everything a computer can do implemented in it
</div>

<pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢀⣠⢤⡤⡤⠤⣤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⢾⣥⢻⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⡱⣆⠤⡁⢎⡡⢵⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠆⣾⠸⣿⡎⢿⣿⣶⡀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⢘⣠⠞⡧⣙⠤⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⢸⢿⡇⣿⣿⡘⣿⣿⣿⡀⠀⠀⠀⠀⢠⣼⣿⣿⣿⣿⡿⣃⣿⠣⢤⣤⢛⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⢥⣃⣏⣷⡜⣿⣧⠹⣿⣿⣿⡄⠀⠀⣴⣿⣿⣿⣿⣿⣯⢾⣿⣿⣾⡿⠶⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠵⣣⣟⣼⣷⣻⠸⣿⣦⠹⣿⣿⣿⡄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠭⣘⠻⣿⣧⣿⣾⣧⠘⣿⡿⣹⣽⣿⡟⢿⣿⣿⣿⣿⣿⣿⣿⡧⣼⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠠⠤⡤⢤⠶⡤⣆⣤⡀⡄⠀⠀⠀⠈⠐⠃⢈⠻⢿⣿⣿⡇⠘⡍⡷⢘⣿⣌⡄⠀⣼⣿⣿⣿⣿⣿⡗⠺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠰⠀⣀⠦⣑⢦⡙⡲⢍⡶⣋⠶⣡⠞⡝⢯⢷⣞⣶⢠⠀⠀⠀⠠⠀⠙⢿⡝⡄⡇⢱⢸⡏⢸⠆⢸⡟⣿⣿⣿⣿⣿⣟⠥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠆⠀⠌⡄⡙⡘⠎⢷⡩⢏⠶⣩⠳⣡⠛⢬⢣⡍⠺⢞⢇⣾⠿⠆⠀⢎⡀⡄⠙⢡⣎⠞⡘⢿⡐⢀⡟⣲⢻⣿⣿⣿⣿⣏⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠀⢂⠌⡑⢹⣛⢦⠹⢜⡲⡡⠜⡤⢃⠀⠁⠺⢑⢪⣌⢋⣄⠀⠡⠈⠳⣦⠅⠀⠻⡆⠇⣾⡄⢸⠘⢰⣼⣿⣿⣿⡟⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠠⠂⠍⢢⠘⢎⠵⢢⠔⣉⡘⠔⠫⠜⢦⠠⡄⢌⠂⠳⣎⠷⣄⡀⠀⠀⠙⣆⠐⣿⡆⣿⠀⡧⠰⣟⣿⣻⣿⡟⠑⠀⢀⡀⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⡄⠉⠎⡔⢃⠎⡱⠌⣙⠒⡆⣆⠀⠈⠃⠙⠀⠙⢼⣉⠷⢦⡐⠢⡘⢆⠙⢿⣿⠐⣱⠿⣀⣡⡶⠇⠀⢀⡐⣤⣻⣽⣯⣿⣶⣥⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠃⡴⢠⢈⡐⠡⠒⠤⡈⢄⡘⢀⠀⠆⡡⠤⣀⣄⠰⠬⠡⢙⡳⢾⣮⣡⢌⠻⠀⡿⠙⡳⢃⠉⠀⠀⠈⣁⢋⠟⡻⠿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠲⢤⠓⣌⠲⠤⣄⣈⢂⠒⡌⢰⡐⠤⡈⢍⡛⡫⢭⣍⣓⢾⣿⣝⢷⠤⠀⠀⠀⠤⢒⡈⣋⢛⡒⠾⠶⣴⣦⣀⡈⠍⠛⢿⣿⣽⢦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠚⠥⡳⡄⣙⢪⣝⠺⣧⢟⣷⡾⣧⣱⣦⠚⢀⣉⣓⣊⡙⣻⣆⠒⠄⡀⠈⢆⢳⡸⢯⣿⣿⣷⣶⣬⣙⣛⠻⢦⣤⣌⠛⣯⠓⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣀⠃⠮⢣⡹⢦⣛⠶⠛⠋⠀⢠⣳⡿⠟⠉⡼⢳⢌⡃⠌⠐⠀⠀⠎⠳⡛⠿⠛⡟⠿⠻⠿⢶⣻⠰⢦⡻⣝⢠⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠄⢢⠐⠈⠄⠀⢄⠠⠀⢀⠀⡔⢁⠣⢃⠁⡐⢨⠑⡱⢊⠔⠈⠀⠀⢠⡈⡆⢁⣤⠡⠄⠄⠆⢁⡂⠰⠨⣥⢛⠬⡣⠍⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⢂⠔⠈⣠⢮⡑⠊⠁⠈⠀⡠⠂⣸⠁⠨⠑⡂⢌⠀⢄⢣⣿⢨⠀⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⠺⠥⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⢡⡞⣨⣾⣿⡗⠈⠁⠄⡡⢐⡁⢀⡏⣘⠀⢰⢁⡂⠀⣺⣼⣵⡎⠡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⢡⡗⣰⣿⣿⣿⣼⣷⡏⣄⠣⢠⠂⢸⣷⣿⡀⣿⡘⢇⢲⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⡟⣰⣿⣿⣿⣿⣿⡿⣟⡽⡂⠧⠀⣾⣿⣿⡟⣿⡇⣾⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡧⢁⣿⡟⣽⣿⣿⣿⡿⣉⡴⠳⠀⠀⣿⣿⣿⣧⢻⣇⢿⢾⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⢻⡼⣽⣿⣿⣿⡿⠓⠈⠀⠀⠀⠀⢸⡟⢿⣿⣟⣿⣷⡌⢹⣿⣿⢿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠻⣜⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠘⣿⣼⣿⣿⡿⣽⣷⠀⡟⢿⣽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢣⡝⣿⣷⣿⣿⣧⠙⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠭⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢾⣿⣿⣷⣿⣿⡄⣻⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠌⠛⠿⡏⠙⠁⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>
</div>

despite being written in zig, revo gives you a real c api for embedding and extensions
the header is auto-generated from zig `callconv(.c)` functions, always in sync with what the library actually exports

## build

first, build the library and header:

```bash
zig build lib
```

you get a static library and an auto-generated header:
- `zig-out/lib/liberevo.a`
- `zig-out/include/revo.h`


## examples

- `examples/c/basic.c` for vm lifecycle, numbers, strings, globals, tables, value helpers
- `examples/c/extension.c` for loadable c extension

## vm lifecycle

```c
#include "revo.h"

ErevoVM *vm = erevo_vm_create();
if (!vm) return 1;

// ... use vm ...

erevo_vm_destroy(vm);

// don't forgwt about cleanup attribute
__attribute__((cleanup(erevo_vm_destroy))) ErevoVM *vm = erevo_vm_create();
```

`ErevoVM` is an opaque handle. `erevo_vm_create()` uses the system page allocator.

## compile, run, eval

```c
ErevoProgram *program = erevo_compile(vm, "main.rv", "1 + 2");
if (!program) {
  puts(erevo_vm_last_error(vm));
  return 1;
}

ErevoData result;
if (!erevo_run(vm, program, &result)) {
  puts(erevo_vm_last_error(vm));
}

// eval does compile + run + free in one step
if (!erevo_eval(vm, "main.rv", "1 + 2", &result)) {
  puts(erevo_vm_last_error(vm));
}

erevo_program_destroy(program);
```

`erevo_compile` takes a module name and source text, returns an opaque `ErevoProgram*`
`erevo_run` executes a compiled program and writes the result value
`erevo_eval` is a shortcut: compile, run, free. useful for one-shots

## errors

```c
const char *msg = erevo_vm_last_error(vm);
```

returns a null-terminated string. valid until the next api call on the same vm

## value type

all values are `RevoData`: a 16-byte struct with a `tag` and a `value` field
this is likely to change

```c
typedef struct {
  uint64_t tag;
  uint64_t value;
} RevoData;
```

the tag tells you what kind of value it is:

```c
typedef enum {
  revo_number, revo_string, revo_atom, revo_function,
  revo_table, revo_tuple,
} RevoType;
```

### value helpers

```c
// constructors
RevoData v = revo_nil();              // nil atom
RevoData v = revo_bool(1);            // true/false atom
RevoData v = R_STRING(string_id);     // build from string id
RevoData v = revo_num(3.14);          // number
RevoData v = revo_atom_val(atom_id);  // atom by raw id

// extractors
double n       = revo_num_value(d);
uint64_t sid   = revo_string_id(d);

// type checks
int is_nil    = revo_is_nil(d);
int is_num    = revo_is_number(d);
int is_str    = revo_is_string(d);
int is_atom   = revo_is_atom(d);
int is_table  = revo_is_table(d);
int is_bool   = revo_is_bool(d);
```

built-in atoms have guaranteed ids in the `RevoAtom` enum

## strings

strings are interned, so every unique string has a stable `uint64_t` id
use `revo_intern` to create or look up a string by its text:

```c
uint64_t sid = revo_intern(vm, (uint64_t)(uintptr_t)"hello", 5);
RevoData val = R_STRING(sid);
```

the pointer must stay valid for the duration of the call

to read string data back from an id:

```c
const char *data = revo_string_data(vm, sid);
size_t len = revo_string_length(vm, sid);
```

`revo_string_data` returns a pointer to the internal string buffer
(valid until the string is gc'd)
`revo_string_length` returns the byte count (no terminator)

## globals

```c
// get global variable by name (:nil is returned if missing)
RevoData val = revo_getglobal(vm, (uint64_t)(uintptr_t)"name", 4);

// set global variable
revo_setglobal(vm, (uint64_t)(uintptr_t)"name", 4, some_value);
```

## tables

```c
// get table entry by key
RevoData val = revo_table_get(vm, table_id, key);

// set table entry
revo_table_set(vm, table_id, key, value);
```

## your first c extension

extensions are shared libraries (`.so` / `.dylib`) that export a
`revo_bindings` array. every c function follows this signature:

```c
typedef void (*RevoFn)(void *vm, size_t argc, RevoData *argv, RevoData *out_result);
```

that means a simple function looks like this:

```c
#include "revo.h"

static void my_fn(void *vm, size_t argc, RevoData *argv, RevoData *out_result) {
  *out_result = revo_num(42.0);
}
```

parameter names are `vm`, `argc`, `argv`, `out_result`

### data conversion

when revo calls your c function, all arguments are converted to `RevoData`:

| revo type        | c tag         | c value |
|------------------|---------------|---------|
| `42` (number)    | `revo_number` | bitcast of f64 |
| `"hi"` (string)  | `revo_string` | interned string id |
| `:atom`          | `revo_atom`   | atom id |
| `fn()`           | `revo_function` | function id |
| `{}` (table)     | `revo_table`  | table id |
| `(1, 2)` (tuple) | `revo_tuple`  | tuple id |

return values by setting `*out_result`:

```c
// return a number
double result = 3.14;
*out_result = revo_num(result);

// return nil (most common)
*out_result = revo_nil();

// return a stable atom
*out_result = revo_atom_val(ra_true);
```

strings must be interned before returning:

```c
const char *result = "hello";
uint64_t id = revo_intern(vm, (uint64_t)(uintptr_t)result, 5);
*out_result = R_STRING(id);
```

or pass through an existing string argument unchanged:

```c
if (argv[0].tag == revo_string) {
  *out_result = argv[0];
}
```

### registering bindings

export a public `const RevoBinding revo_bindings[]` array, terminated
with `{NULL, NULL}`:

```c
__attribute__((visibility("default"))) const RevoBinding revo_bindings[] = {
  {"greet", greet_fn},
  {"add", add_fn},
  {NULL, NULL},
};
```

`__attribute__((visibility("default")))` makes the symbol visible to
the dynamic linker so `cload()` can find it

### building

```bash
# on linux
cc -shared -fPIC -o extension.so extension.c -I/path/to/zig-out/include

# on macos
cc -shared -fPIC -o extension.dylib extension.c -I/path/to/zig-out/include
```

nothing prevents you from using make:

```Makefile
LDFLAGS := -shared -Wall -Wextra -O2
UNAME := $(shell uname -s)
ifeq ($(UNAME), Darwin)
  LDFLAGS += -undefined dynamic_lookup
endif

all: extension.so

%.so: %.c
  clang $(LDFLAGS) -o $@ $^

clean:
  rm -f *.so *.dylib
```

### loading from revo

load an extension via `import` or `c_use`:

```ruby
const c = import("extension.so")
c.greet "world"
# => "hello, world!"

# or load into global scope:
c_use "extension.so"
greet "world"
```

use `const c` when the module is the primary interface
use `c_use` for convenience helpers that deserve global names

when `cload()` loads a shared library, it scans for the `revo_bindings`
symbol and registers each function by name

## best practices

### validate arguments

for now, functions are variadic. check everything manually:

```c
if (argv[i].tag != revo_number) {
  *out_result = revo_nil();
  return;
}
```

### always set out_result

even if you return nil, always set the output.
if the function can fail, returning an error tuple is the convention

### use pic

`-fPIC` for shared libraries.
if you're hitting some boundary issue, not using pic is often the reason

### handle null carefully

be defensive about pointers.
anything you're given is valid for the duration of your function,
but may be invalid later if you keep it around. don't store revo values
(ids/handles) for later use outside the FFI call. if you need to persist
state, make a table in revo and pass it as context
