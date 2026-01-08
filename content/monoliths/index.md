+++
date = '2025-04-05T16:21:55+03:00'
title = 'i love you, but please use monoliths'
description = "you'll have to become cool with a lot of things really fast"
draft = true
+++
i started making stuff for the web around 2017, when i first learned how to code. what struck me the most was how complex everything felt. one day, the people who introduced me to it were using PHP and MySQL. the next, they had switched to Vue and Bootstrap, with a build step just to make a frontend for a chat app built with Node, Express, and MySQL - something they could’ve made entirely in PHP.
it made no sense to me. they could’ve just used jQuery and PHP, which is what i was learning at the time. it felt overwhelming for no reason. honestly, that might’ve been my first childhood tech trauma.

meanwhile, i was more into game development, and i stuck with it. i didn’t really know why back then, but now i do.
with game engines, you’re given tools for rendering, logic, and even hosting—everything follows a stable philosophy, with consistent patterns and a clear way to do things.

fast forward a few years, i’ve learned a bunch of languages for both web and general-purpose development. and while i’m comfortable with most of them, i still feel way more confident using Godot than Go. the difference is, with Godot, i know exactly what i need to learn and where to look.

that’s a big reason why i prefer monolithic or battery-included stacks over modular ones. with monoliths, the path is laid out. you know where you’re going, and you can find your way back. with modular stacks, it feels like you’re constantly choosing between ten different paths that all go in opposite directions.

_bramblesand on tumblr:_
>An ant doesn't start babbling when they see a circuit board. They find it strange, to them it is a landscape of strange angles and humming monoliths. They may be scared, but that is not madness.
>
>Madness comes when the ant, for a moment, can see as a human does.
>
>It understands those markings are words, symbols with meaning, like a pheromone but infinitely more complex. It can travel unimaginable distances, to lands unlike anything it has seen before. It knows of mirth, embarrassment, love, concepts unimaginable before this moment, and then...
>
>It's an ant again.
>
>Echoes of things it cannot comprehend swirl around its mind. It cannot make use of this knowledge, but it still remembers. How is it supposed to return to its life? The more the ant saw the harder it is for it to forget. It needs to see it again, understand again. It will do anything to show others, to show itself, nothing else in this tiny world matters.
>
>This is madness.

### looney tunes chase scene
before realising who i truly am, i was using PocketBase as a framework. and honestly, it checked a lot of boxes for my hobby projects. it's mostly a fancy wrapper around a database, but it comes with a great JS SDK, really solid auth tools, it's written in Go (which is actually pleasant to use), can serve templates using Go’s built-in tools, and the hooks system is just amazing.

but, of course, the depth of Stack Overflow for the weird way i like doing things isn't exactly bottomless. that's why i've decided to learn Django - and i’ll be back here with stories once i’ve got some experience.

even picking Django took a while. thankfully, with monoliths, that kind of decision _doesn’t_ matter too much - you make it once, and even if it’s hard to go back, at least you’ve committed to one clear path.

i had a few goals in mind:

- learn more about the _big_ stuff in software
- explore new ways of doing things
- build a full (theoretical) realworld project (not deploying it though)

i skimmed through most of the major options and landed on these conclusions:

- **Ruby on Rails**: i really like how its community seems to think the way i do when it comes to software. but learning Ruby just for Rails doesn’t make sense for me—i wouldn’t use it anywhere else.
- **Phoenix**: i _really_ want to learn Elixir, but i feel like i should save functional programming for when i’ve got a bit more math under my belt (college is just a few months away). also, Phoenix’s heavy focus on “webscale” is a red flag for me, especially after whatever chaotic philosophy Next.js and MongoDB have cooked up.

- **SvelteKit, Next, Nuxt, SolidStart, Ember.js**: next section.

---

### a quick diss on JS

this isn’t about TypeScript or JSDoc - they try their best. this is about the ecosystem itself.

a lot of full-stack JS frameworks are suffering from the mess that’s built up around the language. they all do things differently, and new tech pops up _constantly_. whatever stack you pick will probably be deprecated or irrelevant in 10 years, and somehow that doesn’t even sound surprising anymore.

that’s why i really appreciate suites like Django. it’s all in one package, it evolves gradually, and if something needs to get faster, they just update the thing you’re already using. no “new ORM 10x faster” hype drops that make you feel like you’re suddenly behind.

it’s not even JavaScript’s fault. it was designed to be a simple language that beginners could use to add interactivity to their web pages. then the web exploded in complexity, and we started using cookies for things they weren’t meant for, and sites began running code through five layers of build tools—completely straying from the idea of static hypertext.

all because the browser was the easiest way to interact with something without downloading it.

once the web became _the_ way to access the internet, it also became _the_ way to build apps. that pushed JavaScript into the spotlight as the de facto “runs everywhere” language. so naturally, people built tools to make it do _everything_—and those tools were developed by hundreds of communities, all with different philosophies. things started moving fast, breaking faster, and suddenly there was no one way to do anything anymore... because the language wasn’t designed for any of this to begin with.

and now we’ve got React Native, which _technically_ uses JavaScript, but only after you transpile it from TypeScript. then it parses your JSX, which is kind of like HTML inside JS (???), except it’s not really HTML because it' modified to support JS expressions. so the HTML isn’t really HTML, and the JS isn’t really JS. and after all that, it gets compiled into native components that don't even use HTML. what you _wrote_ looked like HTML inside JS (which is backwards from how it used to be), but what you _get_ in the end is nothing like either of them.

so does JS even exist anymore?
maybe the real JavaScript was the friends we made along the way.

oh - and we also have runtimes, build systems, and package managers that all get replaced every two years as well. that’s fun.
