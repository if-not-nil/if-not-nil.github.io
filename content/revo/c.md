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

despite being written in zig, revo gives you a real c api for embedding
and extensions. the header is auto-generated from zig `callconv(.c)`
functions, always in sync with what the library actually exports.
{{< ref "src/c/ffi.zig" >}}
{{< ref "src/c/bindings.zig" >}}

## build

```bash
zig build lib
```

you get a static library and an auto-generated header:

- `zig-out/lib/liberevo.a`
- `zig-out/include/revo.h`

{{< ref "src/c/erevo.zig" >}}

## vm lifecycle

```c
#include "revo.h"

ErevoVM *vm = erevo_vm_create();
if (!vm) return 1;

// ... use vm ...

erevo_vm_destroy(vm);
```

`ErevoVM` is an opaque handle. `erevo_vm_create()` uses the system page
allocator.

## compile and run

```c
ErevoProgram *prog = erevo_compile(vm, "main.rv", "1 + 2");
if (!prog) {
    puts(erevo_vm_last_error(vm));
    return 1;
}

RevoData result;
if (!erevo_run(vm, prog, &result)) {
    puts(erevo_vm_last_error(vm));
}

// eval does compile + run + free in one step
if (!erevo_eval(vm, "main.rv", "1 + 2", &result)) {
    puts(erevo_vm_last_error(vm));
}

erevo_program_destroy(prog);
```

{{< ref "pub fn erevo_compile(" >}}
{{< ref "pub fn erevo_run(" >}}
{{< ref "pub fn erevo_eval(" >}}

`erevo_run` writes the result value through the optional `result` pointer

## errors

```c
const char *msg = erevo_vm_last_error(vm);
```

returns a null-terminated string, valid until the next api call on the
same vm

## value type

all values are `RevoData`: a 16-byte struct with `tag` and `value`

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

**constructors**

```c
RevoData v = revo_nil();              // :nil
RevoData v = revo_bool(1);            // :true / :false
RevoData v = R_STRING(string_id);     // from interned id
RevoData v = revo_num(3.14);          // number
RevoData v = revo_atom_val(atom_id);  // atom by raw id
```

**extractors**

```c
double   revo_num_value(RevoData);
uint64_t revo_string_id(RevoData);
uint64_t revo_atom_id(RevoData);
uint64_t revo_table_id(RevoData);
uint64_t revo_tuple_id(RevoData);
int      revo_bool_val(RevoData);   // 0 or 1, 0 if not bool
```

**type checks**

```c
int revo_is_nil(RevoData);
int revo_is_number(RevoData);
int revo_is_string(RevoData);
int revo_is_atom(RevoData);
int revo_is_function(RevoData);
int revo_is_table(RevoData);
int revo_is_tuple(RevoData);
int revo_is_bool(RevoData);
```

built-in atoms have guaranteed ids in the `RevoAtom` enum:
`ra_nil`, `ra_true`, `ra_false`, `ra_ok`, `ra_err`, `ra_some`,
`ra_none`, `ra_undef`, `ra_missing`, `ra_no_result`, `ra_range`
{{< ref "pub const RevoAtom" >}}

## strings

strings are interned! every unique string has a stable `uint64_t` id

```c
uint64_t sid = revo_intern(vm, (uint64_t)(uintptr_t)"hello", 5);
RevoData val = R_STRING(sid);
```

the pointer must stay valid for the duration of the call

to read string data back:

```c
const char *data = revo_string_data(vm, sid);
size_t len = revo_string_length(vm, sid);
```

`revo_string_data` returns a pointer to the internal string buffer
(valid until the string is gc'd). `revo_string_length` returns the byte
count (no terminator)
{{< ref "pub fn revo_intern(" >}}
{{< ref "pub fn revo_string_data(" >}}

## calling revo functions from c

```c
RevoData fn_val;             // get from eval, global, etc.
RevoData args[2] = { revo_num(10.0), revo_num(20.0) };
RevoData result;

int ok = revo_call(vm, fn_val, 2, args, &result);
```

returns 0 if the value wasn't callable or the call threw. max 16 args.
{{< ref "pub fn revo_call(" >}}

## globals

```c
revo_setglobal(vm, (uint64_t)(uintptr_t)"name", 4, revo_num(42.0));
RevoData v = revo_getglobal(vm, (uint64_t)(uintptr_t)"name", 4);

// or via c-string wrappers (call strlen internally)
revo_setglobal_cstr(vm, "name", revo_num(42.0));
RevoData v = revo_getglobal_cstr(vm, "name");
```

missing keys return `:nil`
{{< ref "pub fn revo_getglobal(" >}}
{{< ref "pub fn revo_setglobal(" >}}

## tables

```c
RevoData t = revo_table_create(vm);
uint64_t tid = revo_table_id(t);

RevoData key = revo_atom_val(revo_intern_atom(vm, ...));
revo_table_set(vm, tid, key, revo_num(42.0));
RevoData v = revo_table_get(vm, tid, key);  // nil if missing

uint64_t n = revo_table_len(vm, tid);
```

{{< ref "pub fn revo_table_create(" >}}
{{< ref "pub fn revo_table_set(" >}}
{{< ref "pub fn revo_table_get(" >}}

## tuples

```c
RevoData items[3] = { revo_num(1.0), revo_num(2.0), revo_num(3.0) };
RevoData t = revo_tuple_create(vm, 3, items);
uint64_t tid = revo_tuple_id(t);

RevoData v = revo_tuple_get(vm, tid, 1);   // 2.0
uint64_t n = revo_tuple_len(vm, tid);      // 3
```

out-of-bounds index returns nil
{{< ref "pub fn revo_tuple_create(" >}}
{{< ref "pub fn revo_tuple_get(" >}}

## writing c extensions

extensions are shared libraries that export a `revo_bindings` array.
every c function follows this signature:

```c
typedef void (*RevoFn)(void *vm, size_t argc, RevoData *argv, RevoData *out);
```

parameter names are `vm`, `argc`, `argv`, `out`

a minimal extension:

```c
#include "revo.h"

void greet(void *vm, size_t argc, RevoData *argv, RevoData *out) {
    *out = revo_num(42.0);
}

__attribute__((visibility("default")))
const RevoBinding revo_bindings[] = {
    {"greet", greet},
    {NULL, NULL},
};
```

**data conversion**

| revo type      | c tag         | c value            |
|----------------|---------------|--------------------|
| `42` (number)  | `revo_number` | bitcast of f64     |
| `"hi"` (string)| `revo_string` | interned string id |
| `:atom`        | `revo_atom`   | atom id            |
| `fn()`         | `revo_function`| function id       |
| `{}` (table)   | `revo_table`  | table id           |
| `(1, 2)`(tuple)| `revo_tuple`  | tuple id           |

strings must be interned before returning:

```c
const char *msg = "hello";
uint64_t id = revo_intern(vm, (uint64_t)(uintptr_t)msg, 5);
*out = R_STRING(id);
```

**loading from revo**

```ruby
const c = import("extension.so")
c.greet "world"
# => 42

# or into global scope:
c_use "extension.so"
greet "world"
```

use `const c` when the module is the primary interface, `c_use` for
convenience helpers
{{< ref "fn cload(" >}}

**building**

```bash
# linux
cc -shared -fPIC -o extension.so extension.c -I/path/to/zig-out/include

# macos
cc -shared -fPIC -o extension.dylib extension.c -I/path/to/zig-out/include
```

### best practices

- validate arguments manually (functions are variadic for now)
- always set `*out`, even for nil
- `-fPIC` for shared libraries
- don't store `RevoData` values past the call; intern or copy what
  you need
- if you need persistent state, make a table in revo and pass it as
  context
