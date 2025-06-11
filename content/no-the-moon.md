+++
date = '2025-06-11T15:57:24+03:00'
draft = false
title = 'no, the moon'
description = 'a love letter to lua'
+++

https://teensuicide.bandcamp.com/track/no-the-moon-3

Over time, I've come to use many languages, with use cases and quirks of their own.

Lua truly succeeded in being painless because of its limitation to be as small and extensible as possible while providing the biggest amount of features. Its philosophy is very simple, but, once the programmer understands it, they can implement whatever they want if they think about it hard enough.

If you think something is impossible in Lua, here are some pages to check out, in order of amount of information:
https://learnxbyexample.com/lua/
http://lua-users.org/wiki/LuaFaq
https://github.com/uhub/awesome-lua

Next two paragraphs are going to be very subjective so you can skip them.

Tables are so elegant they can represent arrays, dictionaries, objects, classes, structs, modules, namespaces, sets, enums and queues/stacks.

Where in other languages you would have a class with a method, in Lua you have a table with a function which either can or can't take itself as the first argument, with the help of the t:fn() syntax, represented as t:fn(self) under the hood. Its most complicated feature is metatables, which allow for overriding operators, indexing, comparisons, function calls and string conversion. You can control the garbage collector from within your script, you can use the debug library to look into what the interpreter does although you mostly shouldn't.

[Lua is growing almost exponentially.](https://luarocks.org/stats)
It's really fast, has multithreading and, unlike other similar languages, and still manages to have nice little convenient methods and functions built in.
Some things it doesn't have by default: its tests are primitive and it doesn't have networking due to its embedded nature, but the ways in which you'll get these features are trivial - a large portion of your libraries will be single files which can be pasted directly into your text editor, and larger ones are installed through the [luarocks.org](luarocks.org) package manager. Here's a [testing framework](https://lunarmodules.github.io/busted/) and an [http client](https://luarocks.org/modules/daurnimator/http).
The runtime's code is thoroughly commented. If you don't want to read it yourself, [watch Tsoding do it](https://youtu.be/5CaoYmXYx6U)
There's no shame in using wrappers for it from any other language, meaning that external libraries will likely run C under the hood, and with LuaJIT it ends up being way faster than languages like Python, which just end up being bottlenecks for underlying C code
### Its uses as a scripting language for low-level code
- [love2d](https://love2d.org)
A full 2D game framework. Game of the year 2024, Balatro was made in it. If you have a copy of Balatro on your machine, I recommend opening it like a zip archive and looking through the source code - you'll get a good overview of fairly complicated Lua code as well as love's capabilities and its ecosystem.
- [redbean](https://redbean.dev/) and [fullmoon](https://github.com/pkulchenko/fullmoon)
This is the most impressive thing I've seen Lua do. Redbean is a web framework within the [αcτµαlly pδrταblε εxεcµταblε](https://justine.lol/ape.html) project, meaning that one binary can be ran on the big three platforms, BSD and BIOS at the same time. At 5 megabytes, fullmoon can hash passwords, serialize json and lua, do stuff with sqlite, do HTML templates and CGI, websockets and SSE, while being the fastest web server to ever touch my machine.
- [LiteXL](https://lite-xl.com/)
LiteXL is to Lua what Emacs is to Lisp. It's insanely extensible and it fits within 6 megabytes. When I need a GUI text editor - this is the one I always use.
- [amulet](https://www.amulet.xyz/editor.html)
Just like love, it's a game framework, but [way more complicated](https://www.vertexmeadow.xyz/). Criminally underrated.
- [OpenResty](https://openresty.org/en/)
The most used web technology. It uses LuaJIT to script for nginx.


### As a config language
Without even noticing, at some point I started using a mostly Lua configured ecosystem
- [neovim](https://neovim.io/)
the lua config interface must be its most loved feature so far - especially for those, who had to use it with vimscript. i don't even see people talking about emacs as much after neovim became popular
- [the awesome window manager](https://github.com/awesomeWM/awesome)
i think it was my first window manager
- [wezterm](https://wezterm.org/)
a terminal written in rust. i love it. there's no types there by default, but you can add them from [justin's github](https://github.com/justinsgithub/wezterm-types)
- [hades](https://www.supergiantgames.com/games/hades/) and [garry's mod](https://gmod.facepunch.com/)
since lua is so easy to embed, many games use a lower-level language for defining the game's base functionality and lua to script out levels.
i've been told that many other games use it, but those are the two i'm personally familiar with. hades has their scripts just there, which is a surprising game to require nothing but notepad to mod (just like balatro)
- [cow tools (i made this! please check it out!!!!!)](https://github.com/if-not-nil/)
please take a minute to check it out and give me a little bit of feedback, i haven't seen a system like this used before and i feel like a lot of people would like it

### it's not a toy language (most of the time)
Lua is often considered one for its usage in Roblox, 1-indexed arrays and dynamic typing, and it's definitely true. But Lua manages to be a rare kind of language, one, which is easy to learn, easy to master and easy to go beyond. Most people use it for configuration, more advanced programmers use it for game development, and the ones beyond advaned do make insane things like redbean.
There's a clear path to take at every step from using it for Roblox to applying it in serious software.

Lua doesn't break in big projects, in fact, it's the only language where I didn't feel even remotely tired after 5000 lines of code.
Due to its simplicity, it's hard for code to feel foreign.

[lapis.lua](https://leafo.net/lapis/) is used in web by itch.io

1-indexed arrays are hard to defend, but I still argue that they're most intuitive to use in the context of manipulating strings. Also don't under any circumstanced look at how the arg[] table is stored (please). At least we aren't visual basic, those guys have arrays start at 0 and sometimes 1

It's is dynamically typed, so if you're familiar with JS, you can check out the JSDoc-style LuaDoc comments and teal, Lua's TypeScript

On dialects, it's easier to make them compared to other language, so there's a lot of them.
#### dialects
[fennel - lisp lua](https://fennel-lang.org/)  
[moonscript - coffeescript lua](https://moonscript.org/). there's also [yuescript](https://yuescript.org/).  
[teal - lua's own little typescript](https://github.com/teal-language/tl)  
[amulet(not the engine) - ML lua](https://amulet.works/)  

#### languages that are not lua, but can compile to it
[haxe](https://haxe.org/)  
[c#](https://github.com/yanghuan/CSharp.lua)  
[typescript](https://github.com/TypeScriptToLua/TypeScriptToLua)  
[go](https://github.com/gijit/gi)  

this leaves lua in a very interesting spot - there are ecosystems like the ones of jvm, dotnet and erlang, but they all run through VMs. lua's, however, is one of transpiled languages

**Javascript** is great - it works well for making your website interactive and often similar to a native application.
However, once you build more complex things, it gets more rough. It allows for its use both inside and outside the browser, but the community moves on from established tooling and fails to declare "the right way" of doing things with its chest and often becomes outdated in many aspects. It has different major runtimes, two major type systems and what has to be a million different build systems and both front- and back- end frameworks, all of which have strong advantages and disadvantages over each other. Lua has a big ecosystem too, but at least you can wrap your head around it and nobody's trying to sell you anything.

**C++** is not garbage-collected, making it great for writing efficient software. Its community is exactly 40 years this year, and they've built up what must be the largest ecosystem of third-party libraries together with the C community.
Being forced to be C, itself, and many other languages at the same time, made it adopt traits which require for it to have more upkeep than it can keep up with.
Having to uphold most of the modern software world led to it becoming too complex and being the inspiration for Go

**Go** is explicit, has great documentation, a big standard library, and excelent tooling tooling. It's what C++ would've been if it was invented in the modern age. It's fast and portable, but fundamentally tries to be more concise, "just works" and C-like than it can sometimes afford. It technically has semicolons, the compiler just never tells you, it has while loops, they're just under the "for" keyword. Oh and I just **personally** don't like the default testing suite, please let me have an assert keyword

Lua is the only language that manages to be good by itself and pleasant with other software. Sure, it won't replace existing languages (except js on the backend PLEASE i want it gone), but it will always be able to put what they have into a more approachable package, it will let you write twice as much functionality in the same timeframe and keep it a lot more readable and maintainable. It will always be able to create something new and morph into other forms. I really hope we can see each other more often, Lua
