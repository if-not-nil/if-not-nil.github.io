---
title: 'nvim hat tricks'
---
**linus lung tips**

# random commands
```md
`<C-g>`   file info
`g<C-g>`  wc (count lines, chars, etc) 
`:r[ead]` can read a file into the current buffer under cursor 
`:TOhtml` renders whatever you have with whatever your theme is to HTML
`s/\(QUERY\)/\L\1` find QUERY and make it lowercase

align:
    `:center` center text
    `:right`  align text right 
    `:left`   align text left
              you can also get mini.align to align your text neatly


in visual mode:
    `gu/gU` lower/upper the case
```

# `:g[]` commands

```md
`ga` shows ascii for char under cursor. useful for int<->char shenanigans
`gf` on a file name goes to the file
`gi` goes to where you last exited insert mode
```

# spellcheck

```md
`:set spell` enable spellcheck
`[s`, `]s`   move around spelling mistakes
`=z`         autocorrect
`=z[num]`    accept suggestion #num
`zg`         add misspelled word to dict
`zug`        remove from dict
```

# insert mode

```md
remap your readline actions like <C-w>, <C-h>, <C-b> and <C-f>, <C-a>, <C-e>
to look for help pages go `:h i_` and tab

`<C-o>` to oneshot normal mode
`<C-g>` to start moving with hjkl. it's a weird semi-normal mode. i still can't figure it out
`<C-r>` and then a register name to insert from register
`<C-t>` indent (tabulate)
`<C-d>` unindent (delete tabulation)
`<C-v>` insert next input verbatim
`<C-a>` similar to normal mode's dot command
```


# registers

```md
dont ignore them
do `:[dis]play` to list all registers

default ones
    `"`   contents of the unnamed register
    `0`   last yanked text (not delete)
    `*`   system clipboard selection
    `+`   system clipboard
    `=`   expression register. try `i<C-r>=pow(2,7)`
    `%`   current filename
    `-`   small delete
    `.`   the dot register
    `/`   last search pattern
    `:`   last ex (command mode) command
    `1-9` whatever u deleted (where 1 is closest)

this is all useless without knowing about
    `<C-r>"` insert register " in insert mode 
    `@:`     execute command from register "
    `":p`    execute command from register "
```
