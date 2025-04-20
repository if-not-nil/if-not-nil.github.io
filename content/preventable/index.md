+++
date = '2025-03-25T20:52:01+02:00'
draft = false
description = 'this will confirm all of your biases about frontend'
title = 'it will have been preventable'
+++

this article will confirm all your biases about frontend

{{< youtube id=yjfrJzdx7DA loading=lazy >}}

in may i've decided i wanna revive my old concept as a real app. i also realised i don't know much about web development and especially frontend. so to kill both birds with one stone i decided to make shed (not the real name) - an app for sharing music with your friends or public, the long-form version of leaving instagram notes with music attached. rateyourmusic's existence wasn't even a consideration, because their mobile experience isn't good, the vibe is way different, and their audience is 15 years older anyways.

{{< figure class="custom-class" link="1.png" alt="a screenshot" caption="A detailed analysis of the UI" mouse="Hover text for the image" src="1.png" >}}

for the stack i decided to pick:
- the good old pocketbase as backend - its' go hooks are a lifesaver and putting up your own security measures is a nightmare if i would ever want it to be public
- react native - the depth-of-stack-overflow is really good and that's what everybody's using. i also need to learn react
- for the UI i was gonna make my own components and style them dynamically
- for the music provider i was going to use spotify or lastfm, whatever works better

did you see the several problems here already?

---
### fault 1: doing too much at the same time
i would have to learn 6 technologies: react, react native, mobile development, mobile design, react native's specific version of react, react native's specific CSS quirks

a better way would've been to plan out a more granular roadmap and only then combine all my knowledge into one thing. i wasn't gonna publish it anyways
and that leads to:

### fault 2: absolutely no plan
i didn't have much functionality in mind.
i asked my friend if it's a good idea but he didn't understand what it was even about. i was too stubborn to copy straight up (even though i was already doing so subconsciously) and too stubborn to ask an LLM (it dulls down the creativity, but that should only apply when something actually comes out of said creativity)
i had no design language in mind and all the components ended up looking completely different
and i wasn't even sure about the core functionality. yeah, you'll be able to make posts and attach songs, but that can barely be considered an idea
i wasn't sure what services it would rely on. it would be required to rely on something, of course - i wasn't gonna download all the music to ever be made
i wasn't sure about the app layout so i ended up rewriting stuff a million times

---

so with none of that in mind, i sat down and started the freecodecamp react native + expo course. i was using expo (because of course i'd want an opinionated framework if i'm just getting started). then i hit a small roadblock and tried to learn it myself through the docs. i completed the docs getting started guide and came out with no huge amount of knowledge. then i watched the 4.5 tutorial all the way through - but what now?
next morning i sat down and finally wrote up a structure of the app flow, the functions, the api routes and database schema and thought about it for a while before i got home.
when i was home, with all of that, i realised i didn't like it and confidently ignored it and freestyled it. nothing fit together, it wasn't coherent, i didn't start on any fundamentals, didn't set up my editor the right way, didn't even have a global stylesheet for colors or a global `api.js`. most importantly, look at the name of the file, or rather, at it's extension. what really killed it is the biggest sin of all - i didn't use typescript.

---
### fault 4: PLEASE USE TYPESCRIPT
my tutorial started with regular js for simplicity and i just rolled with it. i felt like what my linter says is enough. if the whole thing doesn't crash then it's working and i shouldn't touch it. but i didn't consider the any edge cases and the amount of inconsistency it would add
yes, tailwind and typescript are extra compilation steps. but as your project grows, it's impossible to balance a ball on your head. and only clowns do that stuff. i'm not talented or funny enough to be a clown and you, yes you, don't wanna get clowned on. if it helps you, you know it and it doesn't impact the performance a substantial amount, and most importantly, and doesn't impact the output's performance, that means you should do it

### fault 5: some abstractions will NOT kill you
frontend should be just that - frontend.
it should transport the data between client and server, both ways.
it shouldn't have its' own code to handle server interaction and serialise it. it should call a function to get data from somewhere and call a function and pass user input into it to talk back to the server. if you don't have a layer between stuff, the smallest changes in the backend will be extremely painful to the frontend

---
so naturally, as my project grew it introduced bugs. at first they were manageable, i fixed them up with tape (instead of the tools i should have been using for it)

at some point you realise something is wrong and your code is inefficient in some way (undetected without typescript btw)
i got spammed with both ignorable and unignorable messages in the logbox, most of them not being informative at all.
at that point you either quit or start looking for solutions
but i was too deep into it. i wasn't gonna quit - i'm not made for that!
so i lowkey had to sell my soul. i started asking LLMs to rewrite code for me - is this efficient? is this really the best way to do it?
at first it was amazing, in small scopes it fixed my stuff. then AM started having some sparkles fly off it, some of the metals rusted and it just gave me wrong code with no solution to change it. it would import the wrong libraries and do things through them, it would start using entirely correct but very very outdated information. it started making my code worse??? the clanker is trained on mediocre code you would find on github. and the most fun part about it is that 11 year old me probably posted more code publicly on github than a senior engineer at a faang company. and that's what it trained on. it's seen more c++ game cheats than it's mongodb, and it is especially true for a more corporate language like react native - the most solid, structured and principled codebases are facebook, instagram, twitter and discord. but they're not in the training data. what is in its' training data is the tutorial and showcase apps. and that's what it gives me. i've probably published more code at age 13 than a senior developer throughout 5 years of their career, and that applies for a lot of people. i didn't think i would feel empathy for a machine's trauma, but i am truly sorry for how it was raised and i entirely understand why it came out like that.
i had small over engineered chunks of code that messed up the whole project. and they were very very unfixable

LLMs don't consider all of your input at once, they will forget what files you have and what you already have down and will happily ignore something you (or the golem itself) have already made. this is good knowledge to gatekeep if you're in college and plan on getting a job once you've finished your education, in 2028 there will be enough blind copypaste for everyone to fix.

---
### fault 6: reliance on AI
it's an amazing tool if you know the language and want it to review it for you, but having it write code for you by itself is horrible. maybe  at this point it can set up some flexboxes in tailwind from a screenshot you give it and add some error handling but that's the only thing it can really do without you either fixing it right out of the oven or a month later

---

it was the first time in a year i've decided to get out of my go comfort zone and i regret it.
so there i was, with a bunch of unmaintainable code, too tired to continue. i left it at that for a week and then cloned the repository to pick up and it threw too many errors for me to worry about. there is nothing i can do. it's over.

 ! [if only you knew how bad things really are 4chan screenshot] ()

if there's enough people asking me to, i can rewrite it from scratch. if there are even more people asking me to fix it, i'll document it all on youtube, going over every single error i got.
