+++
date = '2025-03-25T20:52:01+02:00'
draft = false
description = 'this will confirm all of your biases'
title = 'It will have been preventable'
+++

This article will confirm all your biases about frontend.
{{< youtube id=yjfrJzdx7DA loading=lazy >}}

---

On a wonderful early March day, I decided I wanted to revive an old concept as a real app. I also realized I didn’t know much about web development, especially frontend. So, to kill two birds with one stone, I decided to make **Shed** (not the real name) — an app for sharing music with friends or the public, essentially the long-form version of leaving Instagram notes with music attached. RateYourMusic’s existence wasn’t even a consideration because their mobile experience isn’t great, the vibe is way different, and their audience is about 15 years older anyway.

### Screenshots of the App

For the stack, I decided to pick:
- **Backend:** Pocketbase — its Go hooks are a lifesaver, and putting up my own security measures would be a nightmare if I ever wanted it to be public.
- **Frontend Framework:** React Native — the depth of Stack Overflow knowledge is really good, and that’s what everyone seems to be using. I also need to learn React.
- **UI:** I planned to make my own components and style them dynamically.
- **Music Provider:** Spotify or Last.fm, whichever worked better.

Did you spot the several problems already?

---

## Fault 1: Doing Too Much at the Same Time
I had to learn *six technologies*:
- React
- React Native
- Mobile Development
- Mobile Design
- React Native’s specific version of React
- React Native’s specific CSS quirks

A better approach would’ve been to plan out a more granular roadmap and only then combine all my knowledge into one project. I wasn’t planning to publish it anyway.

And that leads to:

---

## Fault 2: Absolutely No Plan
I didn’t have much functionality in mind.
- I asked a friend if it was a good idea, but he didn’t even understand what it was about.
- I was too stubborn to copy straight up (even though I was subconsciously doing so) and too stubborn to ask an LLM (it dulls creativity, but that should only apply when something actually comes out of said creativity).
- I had no design language in mind, and all the components ended up looking completely different.
- I wasn’t even sure about the core functionality. Yeah, you’d be able to make posts and attach songs, but that can barely be considered an idea.
- I wasn’t sure what services it would rely on. Of course, it would have to rely on something — I wasn’t going to download all the music ever made.
- I wasn’t sure about the app layout, so I ended up rewriting stuff a million times.

---

So, with none of that in mind, I sat down and started the [freeCodeCamp.org React Native + Expo course](https://www.freecodecamp.org/). I was using Expo (because, of course, I’d want an opinionated framework if I’m just getting started). Then I hit a small roadblock and tried to learn it myself through the docs. I completed the docs’ getting started guide and came out with no huge amount of knowledge. Then I watched the 4.5-hour tutorial all the way through — but *what now?*

The next morning, I sat down and finally wrote up a structure of the app flow, the functions, the API routes, and the database schema, and thought about it for a while before I got home.

When I was home, with all of that, I realized I didn’t like it and confidently ignored it and freestyled it. Nothing fit together; it wasn’t coherent. I didn’t start with any fundamentals, didn’t set up my editor the right way, didn’t even have a global stylesheet for colors or a global `api.js`.

Most importantly, look at the name of the file, or rather, at its extension.

What really killed it was the biggest sin of all — **I didn’t use TypeScript.**

---

## Fault 4: Please Use TypeScript
My tutorial started with regular JS for simplicity, and I just rolled with it. I felt like what my linter said was enough. If the whole thing didn’t crash, then it was working, and I shouldn’t touch it.

But I didn’t consider any edge cases or the amount of inconsistency it would add.

Yes, Tailwind and TypeScript are extra compilation steps. But as your project grows, it’s impossible to balance a ball on your head. And only clowns do that stuff. I’m not talented or funny enough to be a clown, and you, yes you, don’t wanna get clowned on.

If it helps you, you know it doesn’t impact the performance substantially, and most importantly, it doesn’t impact the output’s performance, which means you should do it.

---

## Fault 5: Some Abstractions Will Not Kill You
Frontend should be just that — **frontend.**
It should transport data between the client and server, both ways.

It shouldn’t have its own code to handle server interaction and serialize it. It should call a function to get data from somewhere and call a function to pass user input back to the server.

If you don’t have a layer between stuff, the smallest changes in the backend will be extremely painful for the frontend.

---

So naturally, as my project grew, it introduced bugs. At first, they were manageable, and I fixed them up with tape (instead of the tools I should have been using for it).

At some point, you realize something is wrong and your code is inefficient in some way (*undetected without TypeScript, btw*).

I got spammed with both ignorable and unignorable messages in the LogBox, most of them not being informative at all.

At that point, you either quit or start looking for solutions.

But I was too deep into it. I wasn’t going to quit — I’m not made for that!

So I lowkey had to sell my soul. I started asking LLMs to rewrite code for me — *is this efficient? Is this really the best way to do it?*

At first, it was amazing. In small scopes, it fixed my stuff.

Then, the machine started having some sparkles fly off it, some of the metals rusted, and it just gave me wrong code with no solution to change it. It would import the wrong libraries and do things through them, start using entirely correct but very outdated information. It started making my code worse???

The clanker is trained on mediocre code you’d find on GitHub. And the most fun part about it is that 11-year-old me probably posted more code publicly on GitHub than a senior engineer at a FAANG company. And that’s what it trained on.

It’s seen more C++ game cheats than MongoDB, and it’s especially true for a more corporate language like React Native — the most solid, structured, and principled codebases are Facebook, Instagram, Twitter, and Discord. But they’re not in the training data. What *is* in its training data is tutorial and showcase apps. And that’s what it gives me.

I’ve probably published more code at age 13 than a senior developer throughout five years of their career, and that applies to a lot of people.

I didn’t think I would feel empathy for a machine’s trauma, but I am truly sorry for how it was raised, and I entirely understand why it came out like that.

I had small over-engineered chunks of code that messed up the whole project. And they were very, very unfixable.

LLMs don’t consider all of your input at once. They will forget what files you have and what you’ve already written and will happily ignore something you (or the golem itself) have already made.

This is good knowledge to gatekeep if you’re in college and plan on getting a job once you’ve finished your education. By 2028, there will be enough blind copypaste for everyone to fix.

---

## Fault 6: Reliance on AI
It’s an amazing tool if you know the language and want it to review it for you, but having it write code for you by itself is horrible.

Maybe, at this point, it can set up some flexboxes in Tailwind from a screenshot you give it and add some error handling, but that’s the only thing it can really do without you either fixing it right out of the oven or a month later.

---

It was the first time in a year I decided to get out of my Go comfort zone, and I regret it.

So there I was, with a bunch of unmaintainable code, too tired to continue. I left it at that for a week, and then cloned the repository to pick up where I left off, and it threw too many errors for me to worry about. There was nothing I could do. It was over.

![If Only You Knew How Bad Things Really Are](https://example.com/4chan-screenshot.png)

---

If enough people ask me to, I can rewrite it from scratch.

If even more people ask me to fix it, I’ll document it all on YouTube, going over every single error I got.
