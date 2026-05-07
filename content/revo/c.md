---
title: loading c functions
---

<div style="display:flex; gap:1rem; align-items:flex-start; flex-wrap:wrap;">
  
<div style="flex:1; min-width:250px;">

# loading c functions
[docs](docs/basics) | [codeberg](https://codeberg.org/lung/revo) | [github (mirror)](https://github.com/if-not-nil/revo) | [license](#license)

> c is the only language that has everything a computer can do implemented in it

everything is an expression, and everything is pipe-able and chain-able - you would want to assume that everything returns what you expect. if not, it's probably a design flaw and you should open an issue
  </div>

<pre class="ascii small">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢔⣶⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠗⡿⣾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠓⡞⢩⣯⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠰⡹⠁⢰⠃⣩⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣿⠿⣉⣩⠛⠲⢶⡠⢄⠐⣣⠃⣰⠗⠋⢀⣯⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣯⣠⠬⠦⢤⣀⠈⠓⢽⣾⢔⣡⡴⠞⠻⠙⢳⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣵⣳⠖⠉⠉⢉⣩⣵⣿⣿⣒⢤⣴⠤⠽⣬⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢻⣟⠟⠋⢡⡎⢿⢿⠳⡕⢤⡉⡷⡽⠁
⣧⢮⢭⠛⢲⣦⣀⠀⠀⠀⠠⡀⠀⠀⠀⡾⣥⣏⣖⡟⠸⢺⠀⠀⠈⠙⠋⠁⠀⠀
⠈⠻⣶⡛⠲⣄⠀⠙⠢⣀⠀⢇⠀⠀⠀⠘⠿⣯⣮⢦⠶⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢻⣿⣥⡬⠽⠶⠤⣌⣣⣼⡔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⣿⣧⣤⡴⢤⡴⣶⣿⣟⢯⡙⠒⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣗⣞⣢⡟⢋⢜⣿⠛⡿⡄⢻⡮⣄⠈⠳⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⠮⠴⠵⢋⣇⡇⣷⢳⡀⢱⡈⢋⠛⣄⣹⣲⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣱⡇⣦⢾⣾⠿⠟⠿⠷⠷⣻⠧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠽⠞⠊⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢔⣶⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠗⡿⣾⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠓⡞⢩⣯⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠰⡹⠁⢰⠃⣩⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢷⣿⠿⣉⣩⠛⠲⢶⡠⢄⠐⣣⠃⣰⠗⠋⢀⣯⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣯⣠⠬⠦⢤⣀⠈⠓⢽⣾⢔⣡⡴⠞⠻⠙⢳⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣵⣳⠖⠉⠉⢉⣩⣵⣿⣿⣒⢤⣴⠤⠽⣬⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢻⣟⠟⠋⢡⡎⢿⢿⠳⡕⢤⡉⡷⡽⠁
⣧⢮⢭⠛⢲⣦⣀⠀⠀⠀⠠⡀⠀⠀⠀⡾⣥⣏⣖⡟⠸⢺⠀⠀⠈⠙⠋⠁⠀⠀
⠈⠻⣶⡛⠲⣄⠀⠙⠢⣀⠀⢇⠀⠀⠀⠘⠿⣯⣮⢦⠶⠃⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢻⣿⣥⡬⠽⠶⠤⣌⣣⣼⡔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⣿⣧⣤⡴⢤⡴⣶⣿⣟⢯⡙⠒⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⣗⣞⣢⡟⢋⢜⣿⠛⡿⡄⢻⡮⣄⠈⠳⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠻⠮⠴⠵⢋⣇⡇⣷⢳⡀⢱⡈⢋⠛⣄⣹⣲⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣱⡇⣦⢾⣾⠿⠟⠿⠷⠷⣻⠧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠽⠞⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</pre>
</div>

despite being written in zig, revo lets you call c functions from within your revo code.

this is important for extending functionality and perf-critical code 

the c ffi works by you compiling your c code into a shared library (`.so`, `.dylib`, `.dll`) and loading it at runtime by either

in this tutorial, you will write c functions that match the revo ffi signature, compile them to a shared object, and register them for use in revo code

you will have two ways of using your library:

```ruby
# just import import just like any other module
const c = import("libprint.so")
# or, the helpful c_use
c_use("regex.so")
# which registers all of them as globals
# although globals are generally advised against,
# you might find use for it when trying to add fundamental features to the language
```

### important

this is much different from Lua - no side effects happen in c fns, other than the ones defined in revo.h.
all c fns are given a variadic number of arguments and a scratch data to write into, which, when the function returns, will become the return value of the call

this also means you will have to manage state inside of the c library and pass handles to it around.
there is no explicit representation of void* within revo, but - any revo Data is a usize value,
to which you can assign any arbitrary data.

doing so with any type other than number is undefined behaviour and will crash sooner or later,
and not in a fun, far-lands way, but due to a segfault.

they all follow this signature:
```c
void echo(void *vm, size_t argc, RevoData *argv, RevoData *out_result)
```

# your first C module

## header file

include `revo.h` from the spoiler below somewhere in your C code. it's also available at the root of the repository

<details>
<summary>revo.h</summary>

```c
#ifndef REVO_FFI_H
#define REVO_FFI_H

#include <stddef.h>
#include <stdint.h>

// mapping of a CRevoData
typedef struct {
  uint64_t tag;
  uint64_t value;
} RevoData;

// function signature all c functions must use
typedef void (*RevoFn)(void *vm, size_t argc, RevoData *argv,
                       RevoData *out_result);

// binding registration
typedef struct {
  const char *name;
  RevoFn fn;
} RevoBinding;
#define REVO_BINDINGS_END {NULL, NULL}

// types
typedef enum {
  revo_number = 0, // bitcasted f64
  revo_string,     // string ptr
  revo_atom,       // atom ID
  revo_function,   // function ID
  revo_table,      // table ID
  revo_tuple       // tuple ID
} RevoType;

// refer to src/root.zig:pub const core_atoms = enum(AtomID);
// by accident, ra_nil is false (but ra_false is not)
typedef enum {
  ra_nil,
  ra_missing,
  ra_undef,
  ra_none,
  ra_no_result,
  ra_false,
  ra_true,
  ra_range,
  ra_ok,
  ra_err,
  ra_some,
} RevoAtom;

// it is often you would want to return these
#define R_NIL()                                                                \
  (RevoData) { .tag = revo_atom, .value = ra_nil }
#define R_BOOL(v)                                                              \
  (RevoData) { .tag = revo_atom, .value = v ? ra_true : ra_false }

// intern a c-allocated string into revo's string pool
// vm must be the pointer passed to your RevoFn
// ptr must be allocated with malloc (revo will free it)
// len is the string length (without null terminator)
// returns the StringID to pass to R_STRING()
typedef uint64_t (*RevoInternFn)(void *vm, uint64_t ptr, size_t len);
extern RevoInternFn revo_intern;

// return a string from a C function
// use with the StringID returned by revo_intern()
#define R_STRING(id)                                                           \
  (RevoData) { .tag = revo_string, .value = id }

// get a global variable by name
// vm must be the pointer passed to your RevoFn
// name_ptr is a pointer to a C string (passed as u64)
// name_len is the string length (without null terminator)
// returns the value, or nil if not found
typedef RevoData (*RevoGetGlobalFn)(void *vm, uint64_t name_ptr, size_t name_len);
extern RevoGetGlobalFn revo_getglobal;

// set a global variable by name
// vm must be the pointer passed to your RevoFn
// name_ptr is a pointer to a C string (passed as u64)
// name_len is the string length (without null terminator)
// value is the value to set
typedef void (*RevoSetGlobalFn)(void *vm, uint64_t name_ptr, size_t name_len, RevoData value);
extern RevoSetGlobalFn revo_setglobal;

// get a value from a table
// vm must be the pointer passed to your RevoFn
// table_id is the table ID (as returned by revo_table in previous calls)
// key is the key to lookup
// returns the value, or nil if not found
typedef RevoData (*RevoTableGetFn)(void *vm, uint64_t table_id, RevoData key);
extern RevoTableGetFn revo_table_get;

// set a value in a table
// vm must be the pointer passed to your RevoFn
// table_id is the table ID
// key is the key to set
// value is the value to set
typedef void (*RevoTableSetFn)(void *vm, uint64_t table_id, RevoData key, RevoData value);
extern RevoTableSetFn revo_table_set;

#define R_EXPORT(...)                                                          \
  __attribute__((visibility("default")))                                       \
  const RevoBinding revo_bindings[] = {__VA_ARGS__, {NULL, NULL}};

#define R_SIG(fname)                                                           \
  void fname(void *vm, size_t argc, RevoData *argv, RevoData *out_result)

#endif
```

</details>

### examples

here are the terse core examples from examples.c:

```c
#include "revo_ffi.h"
#include <string.h>

/// > echo(s) -> string
R_SIG(echo) {
  if (argc < 1 || argv[0].tag != revo_string) {
    *out_result = R_NIL();
    return;
  }
  *out_result = argv[0];
}

/// > strlen(s) -> number
R_SIG(strlen_fn) {
  if (argc < 1 || argv[0].tag != revo_string) {
    *out_result = (RevoData){.tag = revo_number, .value = 0};
    return;
  }
  const char *str = (const char *)(uintptr_t)argv[0].value;
  double len = strlen(str);
  *out_result = (RevoData){.tag = revo_number, .value = *(uint64_t *)&len};
}

/// > add(a, b) -> number
R_SIG(add) {
  if (argc < 2) {
    *out_result = (RevoData){.tag = revo_number, .value = 0};
    return;
  }
  double a = argv[0].tag == revo_number ? *(double *)&argv[0].value : 0;
  double b = argv[1].tag == revo_number ? *(double *)&argv[1].value : 0;
  double result = a + b;
  *out_result = (RevoData){.tag = revo_number, .value = *(uint64_t *)&result};
}

R_EXPORT({"echo", echo}, {"strlen_fn", strlen_fn}, {"add", add})
```

call from revo:

```ruby
c_use("examples.so")
print(echo("hello"))        # hello
print(strlen_fn("revo"))    # 4
print(add(5, 3))            # 8
```

### compile

a helpful cross-platform makefile for arm64-mac and linux is provided
this should have you set up forever

```Makefile
LDFLAGS := -shared -Wall -Wextra -O2
UNAME := $(shell uname -s)
ifeq ($(UNAME), Darwin)
	LDFLAGS += -undefined dynamic_lookup -target arm64-apple-macos11
endif

all: printf_wrapper.so examples.so

%.so: %.c
	clang $(LDFLAGS) -o $@ $^

clean:
	rm -f *.so *.dylib
```

nothing prevents you from compiling it with gcc, but

## load

### loading an extension

use `c_use()` to load a compiled extension:

```ruby
c_use("./my_extension.so")

printf("Hello from C!\n")
printf("Number: %d\n", 42)
```

## data type conversion

### passing data to c

when you call a c function from revo, all arguments are magically converted to `revodata` structs:

| revo type          | c tag           | c value    |
|--------------------|-----------------|------------|
| `42` (number)      | `revo_number`   | bitcast of f64 |
| `"hello"` (string) | `revo_string`   | ptr to string data |
| `:atom` (atom)     | `revo_atom`     | atom ID |
| `fn()` (function)  | `revo_function` | function ID |
| `{}` (table)       | `revo_table`    | table ID |
| `(1, 2)` (tuple)   | `revo_tuple`    | tuple ID |

### extracting values in c

```c
double num = *(double *)&argv[0].value;
const char *str = (const char *)(uintptr_t)argv[0].value;
uint64_t id = argv[0].value;
```

### returning values from c

set `*out_result` to return a value:

```c
// return a number
double result = 3.14;
*out_result = (RevoData){.tag = revo_number, .value = *(uint64_t *)&result};

// return nil (most common)
*out_result = R_NIL();

// return a stable atom
*out_result = (RevoData){.tag = revo_atom, .value = ra_true};
```

### returning strings from c

strings must be interned into revo's string pool. use `revo_intern()`:

```c
// create a new string and intern it
char *result = malloc(10);
strcpy(result, "hello");
uint64_t id = revo_intern(vm, (uint64_t)(uintptr_t)result, 5);
*out_result = R_STRING(id);
```

or return an existing interned string passed as an argument:

```c
if (argv[0].tag == revo_string) {
  *out_result = argv[0];  // return same string
}
```

## Accessing Globals from C

**Note: Global access from C is not yet stable and disabled for now. Use Revo to manage global state and pass it as arguments instead.**

## Working with Tables from C

**Note: Table operations from C are not yet stable and disabled for now. To pass complex data between C and Revo, create tables in Revo and pass them as arguments, or return data via the existing return value mechanism.**

## Advanced: Introspection with VM Pointer

The `vm` pointer passed to C functions is an opaque `void*`. In the current implementation, you cannot call back into the VM from C extensions. This is intentional to avoid unsafe interactions with the garbage collector and fiber scheduler.

## best practices

### validate arguments!

for now, functions are of variable length.
this will become optional with some friendly macros when the api becomes stable, but for now, check everything manually

```c
if (argv[i].tag != revo_number) {
  // handle type error
  return;
}
```

### always set out_result!

most functions have a point they can crash at, and it's useful to return an error atom or tuple.

even if returning nil, always set the output parameter. if your function is always nil, declare that at the start

```c
if (out_result)
  *out_result = R_NIL();
```

### use pic!

`clang -fPIC`
if you're running into some boundary issue, not using pic is often the reason

position independent code makes functions relocatable in memory. there are many unknown unknowns to this, so it's better to be aware

### handle null carefully!

be defensive about pointers. anything you're given will be valid for the runtime of your function, but may get invalidated by the GC later on

so don't store revo values (ids/handles) for later use outside the FFI call. the garbage collector may move or deallocate them. if you need to store state,
- make a table in revo and pass it as context
- return ids and dont cache

### segfaults!

common causes are wrong arg types (treating a string as number), out-of-bounds arg access, GC'd handles
