+++
date = '2025-04-06T10:44:41+03:00'
title = 'what exactly is htmx?'
description = 'and why htmx'
draft = true
+++
> when they go low, i go lowER

a long, long time ago, HTML was made. it was supposed to be simple - just documents with information and links to other documents. then someone added `<a>` and `<form>`, which let pages submit requests to the server. and then they just kind of stopped?

so the community stepped in. layer after layer of tools and frameworks were added to extend HTML's limited interactivity. eventually, your HTML markup became just a small slice of what makes up the modern frontend. that works, sure - but wouldn’t it be cooler if you could interact with your backend **without** JavaScript?

enter [htmx](https://htmx.org), which uses javascript so you don’t have to.

i read their manifesto (which they call a book for some reason), and what hit me the hardest was how it described modern client-server interaction: the client sends a request, the server responds with JSON, the client parses that JSON, turns it into HTML, and re-renders a chunk of the page—often way more than necessary.

i used to think htmx was pretty much the same thing as alpine.js. but after reading that, i finally saw the difference: htmx skips the middleman. it lets the server return **HTML directly**, removing the need for JSON wrangling on the frontend.

at first, i was deeply offended. just return HTML?
what about data reusability? what if i want to use that JSON on another platform?

then it hit me: i literally don’t need that
and if i ever do, i could easily tweak my code to support both. it’s not like i have hundreds of endpoints to maintain.

in fact, most of what i want to build could be written in PHP. and the *only* reason i don’t use php is because i don’t like the language - not because the way it works is wrong. philosophically, i’m fine with how php does things.

so what is the htmx way of doing things?

you pretend it’s the 90s. you don’t treat the web like it’s a native app—because it’s not. you lean into HTML. you get full pages, partials, fragments - just raw HTML from your server, like an alternate timeline where web dev stayed a hobbyist project for 10 more years instead of pivoting to app-building.

and honestly, i think it’s really beautiful to try a dish you hated in childhood and realize that now, you actually *love* it.
