---
title: 'void cheat sheet'
---
# xbps

```md
`xbps-install -Su` - synchronize repositories and update system
`xbps-install [pkg]` - install package
`xbps-remove [pkg]` - remove package
`xbps-remove -R [pkg]` - remove package and its unused dependencies
`xbps-query -Rs [string]` - search for package in repositories
`xbps-query -l` - list installed packages
`xbps-query -S [pkg]` - show information about package
`xbps-query -f [pkg]` - list files owned by installed package
`xbps-remove -Oo` - remove orphaned packages and clean cache
`xbps-query -m` - list manually installed packages
`xbps-install -uf [pkg]` - force reinstall/update package
`xbps-pkgdb -a` - check for broken package databases
```

# xtools

```md
`xq [string]` - search for package (shorthand)
`xi [pkg]` - install package (shorthand)
`xr [pkg]` - remove package (shorthand)
`xlocate [file]` - find which package owns file
`xdirents [pkg]` - list files in repository package (not installed)
`xrev [pkg]` - list packages that depend on package
`xmypkgs [name]` - list packages maintained by person
`xcheckshlibs` - check for broken library links
`xgensum -i [template]` - update checksums in template
`xlint [template]` - check template for errors
`xsubpkg [pkg]` - list subpackages of package
```

# services (runit)

```md
`sv status [service]` - check service status
`sv start [service]` - start service
`sv stop [service]` - stop service
`sv restart [service]` - restart service
`ln -s /etc/sv/[service] /var/service/` - enable service
`rm /var/service/[service]` - disable service
`sv up [service]` - start service once
`sv down [service]` - stop service once
```

# kernel

```md
`xbps-reconfigure -f linux[version]` - reconfigure kernel and regenerate initramfs
`vkpurge list` - list old kernels
`vkpurge rm [version]` - remove old kernel
`vkpurge rm all` - remove all old kernels
`dracut --force --hostonly` - regenerate initramfs manually
```

# system

```md
`xbps-reconfigure -fa` - reconfigure all packages
`xcheckrestart` - check which processes need restart after update
`vsv` - interactive service manager
`void-mklive` - create custom Void Linux live image
`xmirror` - select fastest repository mirror
`xlocate -S` - sync xlocate database
```
