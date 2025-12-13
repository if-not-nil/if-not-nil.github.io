+++
date = '2025-12-13T16:32:24+00:00'
draft = false
title = "making lua do what it shouldn't: typesafe structs"
description = "it shouldn't, but it should should, if that makes sense"
+++

{{< figure
    src="https://wiby.me/lh_c.gif"
    class="float-right"
    caption="i like this image" >}}
lua is a horrible, horrible language. it has one data structure for everything - the table, which i'll be exploiting here. 

<div style="clear: both;">
</div>

my main inspiration is the zig struct syntax\
or any struct syntax for that matter

which is not very realistic to implement. but
i'll try to get motivated by the sunk cost fallacy

for this one, i'll be implementing structs with no extra features

### toc
- [structs](#structs)
- [you can't have your boat and eat it too](#you-cant-have-your-boat-and-eat-it-too)
- [how it ended up looking](#how-it-ended-up-looking)
- [plans](#plans)

oh, and also, this makes more sense in the context of [the soup files](https://github.com/if-not-nil/soup).

i already made a result enum with Ok/Err
```lua
local line_result = Result.Ok("soup.lua")
    :bind(function(filename)
        local file, err = io.open(filename, "r")
        if not file then return Result.Err(err) end

        return Result.Ok(file)
    end)

local line = line_result:unwrap()
```
and a match expression with guards, which is supposed to be reused to account for lua being an interpreted language 
```lua
local m = soup.match()
	:case(6, "six")
	:case(7, "seveen")
	:case(function(x) return x % 2 == 0 end, "even")
	:case(function(x) return x % 2 ~= 0 end, "odd")
	:otherwise("idk")

soup.println({ m(6), m(7), m(9), m(10) })
```

so this was very much the natural next step

# structs

all tables in lua are always passed by reference, never by copy.

they are also, on accident, the biggest and the smallest data structures possible.

so this opens up this neat implication:
```lua
local l = {}
for _ = 1, 2 do
    print(l)  -- table: ...10c0
end           -- table: ...10c0  

for _ = 1, 2 do
    print({}) -- table: ...50c0
end           -- table: ...5100
```
now this isn't some grand insane discovery, BUT it lets you have an alternative
approach to implementing tagged data structures

usually, they are done like this:
```lua
local t = {
    type = "point",
    value = {1,2}
}
```

this is an very very sane approach, which is very readable and is very perfect in the context of a sane codebase

but it definitely is not a fun way to do things

so i settled on this syntax
```lua
local Point <const> = struct { x = "number", y = "number" }
local p1 = Point { 2, 8 } -- for those unfamiliar with lua, parentheses are implicit here.
local p2 = Point { 5, 5 } -- struct and point are called like functions (even though they're tables)
```

and the resulting structs, which look like

```lua
{Point, 2, 8}
{Point, 5, 5}
```

if you try to instantiate a point of 2 and "asdf", it's gonna give you an error,
which is where the safety comes in

**implementation details warning!!!!!**
# you can't have your boat and eat it too

> we're now at commit 2e5fa: `lua: structs work at a minimum-wage level`. it's not relevant for what i ended up with

here, `point` is a struct which stores these tables

```lua
local names, -- struct names: x and y 
      types, -- types: number, number
      index  -- indices: { x = 2, y = 1, }
      = {}, {}, {}
```

is the index table really that necessary? probably not. but the limitations forced me to make it because the order in which you loop over a map is random


so, putting all the sacrifices together lets me make a nice oneliner
```lua
__index = function(tbl, key) return key and tbl[self.index[key]] end
```
and now we can get `point.x` and `point.y`, which asks the underlying type to tell it where x and y are

so, how is it different from the sane way?

first of all, a constructor is made automatically. it checks all the types when creating a struct
and you don't have to add the `if type(tbl[1]) == "string"`

structs can also be embedded inside each other

```lua
local l = Line {
    Point { 11, 22 },
    Point { 33, 44 }
}

assert(l[0] == Line)
```

but what happens if you try to get `line.start.x`?

remember how the you can't index a map in the order you were given it?

i thought i solved it like this
```lua
table.sort(names) -- alphabetical
```
and though it was ugly, it worked. i did it and forgot i put it in there. a point's `x` variable was always first, and `y` was always second. it worked perfectly

but obviously that's just not a fix

and the worst thing about unfixable things, is that if you try to fix them, they won't be fixed. because they're unfixable.

so i had to rewrite it to be
```lua
Point = struct {
    {"x", "number"}, {"y", "number"}
}
```
which is ugly

but it's not like i cared about it looking nice too much or anything. i'm not even mad rught now

```lua
Point = struct {
    { "x", "number" },
    { "y", "number" }
}

Line = struct {
    { "start", Point },
    { "end",   Point }
}
```

so we have this syntax now

but yeah, the implementation actually went down from about 32 lines to 20
(also it doesn't look stupid anymore)

and, since we won't have duck typing, i'll allow for single-field structs to be initialized with just `Email("asdf@yahoo.com")`

# how it ended up looking
```lua
"welcome to the end of the page if you skimmed it"

Point = struct {
    { "x", "number" },
    { "y", "number" }
}
local p1 = Point { 22, 33 }
assert(p1[7] == nil)
assert(p1.type == Point)

Line = struct {
    { "start", Point },
    { "end",   Point }
}
local p2 = Point { 44, 55 }
local l = Line { p1, p2 }

Email = struct { "string" }
local email = Email("test@example.com")
assert(email[1] == "test@example.com")
assert(email == "test@example.com") -- sugar in the __tostring metatable

assert(l.type == Line)
```

but hold on

isn't the biggest argument against duck typing the email struct?
{{< figure
    src="cat-on-a-monitor.jpg"
    class="float-right"
    caption="this guy knows email" >}}


it's always a good idea to make invalid states unrepresentable. ideally, your pipeline would look like this:

<div style="clear: both;"></div>

- |> ` local email = Email.try_parse("test@example.com"):expect("invalid email")`
    - | that function ensures the user's email isn't "asdf", <function>, or on outlook
    - | it would return the email struct (wrapped in the [Result struct from the soup files btw](https://github.com/if-not-nil/soup/tree/main/lua#a-result-structure-soupresult))
- |> pass it into `function(email) end` which checks the type inside of it (and actually throws this time)
- if the soup dream lives on, it would also be done through pipe operators


this is why methods are absolutely necessary for your code to be readable. and if you know what rust traits are, you probably know why i love them, too

so, that's what i'll be implementing next. thanks for coming to my ted talk!

dude also i randomly came across a comment on the internet of someone putting this blog among their two top favorite dev blogs it made me so happy that was the only reason i felt like writing about this one

# plans

- [ ] traits: implement them to look like a magic rust translator. some
  easy ones which are already accessible thru metatables are:
    - [ ] `Grid:impl(Traits.debug(), function(self) end)` (you can now print() the grid and tostring() it)
    - [ ] `Email:impl(Traits.from("string"), function(str) end)` (you can now `Email.from("asdf@yahoo.com")`)
    - [ ] `Point:impl(Traits.sum(Point), function(self, other) end)` (you can now grid1 + grid2)
    - [ ] `Grid:impl(Traits.drop(), function(self) end)` (this will run when it goes out of scope after `local grid <close> = Grid(...)`)
    - [ ] `Grid:impl(Traits.trash(), function(self) end)` (this will run on garbage collection)
- [ ] methods: exactly how it looks in normal lua, but one function is shared for all objects so it just has to be better
