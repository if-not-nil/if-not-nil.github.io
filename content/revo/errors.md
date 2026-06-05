---
title: 'errors'
---

# errors

revo does not have exceptions and tries to crash only in extreme scenarios

this means, errors are treated as values
if a function may error, it's likely to return either
`(:ok, value)`
... or `(:err, :ErrorName)`

see examples/errors.rv for full examples

# propagation: `?` and `orelse`
revo has two operators for error handling: `?` for early return and `orelse` for defaults
```ruby
fn load_config(path) do
	const f = fs.open(path)? # must succeed
	const raw = f:read() orelse "<none>" # can fall back
	parse_json(raw)
end
```

## the ? operator

`?` propagates errors up the call stack. if an expression is an error (`(:err, ...)`), the function returns immediately with that error. otherwise, the value is unwrapped

```ruby
fn parse_int(s) match tonumber(s)
	| (:ok, n) n
	| (:err, e) return (:err, e)
end

fn parse_int_short(s) do
	tonumber(s)?
end

# in a sequence
fn parse_version(str) do
	const parts = str:split(".")
	const major = tonumber(parts[1])?
	const minor = tonumber(parts[2])?
	(:ok, (major, minor))
end
```

the top-level is implicitly a function, so returning an error from it will print it out too

## orelse

`orelse` assigns a default value when an expression is nil or an error

```ruby
# fallback to default
const name = read_file("name.txt") orelse "unknown"
const x = (:err, :not_found) orelse 0  # x = 0
const y = nil orelse 0                 # y = 0
const z = (:ok, 42) orelse 0           # z = 42
```
