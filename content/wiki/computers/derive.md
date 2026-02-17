---
title: 'deriving your linux'
date: 2026-02-17T17:43:42+02:00
---
> choose life, choose a job, choose a linux distribution
  this is wip

universal covered: setup, partitioning, UEFI bootloader, wayland
hardware-specific covered (thinkpad t480, intel network, cpu and gpu): network, 
not covered: swap, proprietary drivers, x11
- [optional: local copy of the docs](#optional-local-copy-of-the-docs)
- [partitioning](#partitioning)
- [the boots](#the-boots)
- [system setup](#system-setup)
- [bootloader](#bootloader)
- [booting](#booting)
   * [services & kernel modules (to get yr wifi to work)](#services-kernel-modules-to-get-yr-wifi-to-work)
   * [package management](#package-management)
      + [the package managers](#the-package-managers)
- [graphical environment (wayland)](#graphical-environment-wayland)
- [graphical environment (xorg)](#graphical-environment-xorg)
- [porting packages](#porting-packages)
- [further: what to do when stuff breaks](#further-what-to-do-when-stuff-breaks)

# optional: local copy of the docs

the website was a little too slow while i was using it and you could not grep through it. i recommend you clone almost the entire project (not that big i swear) for a more pleasant experience

this also doesn't ddos the contributors

```bash
mkdir derive/
cd derive

for dih in site derive ports manpages detour; do
    git clone https://codeberg.org/derivelinux/$dih --depth 1; done

cat > update.sh <<EOF 
#!/bin/bash
for dih in site derive ports manpages detour; do
    cd ./\$dih; git pull; cd -; done
EOF
chmod +x update.sh
cd derive
```

# partitioning
you'd wanna mount your drives the normal way

rootfs: anything, 2gb+
uefi partition: vfat, 1gb+

let's say they're on /mnt for the purposes of this

# the boots

**copy the rootfs**
```bash
for dir in bin boot dev etc home lib lib64 libexec local opt root sbin srv usr var; do
    cp -a /$dir /mnt/
done
```

**make the mount points**
```bash
mkdir -p /mnt/proc /mnt/sys /mnt/dev /mnt/run /mnt/tmp /mnt/mnt
```

**link some directories**
```bash
cd /mnt
ln -sf . /mnt/usr
ln -sf lib /mnt/lib64
```

busybox is a multicall binary, so it makes symlinks from itself to other places. you wanna fix that
at least that's what the installer does tho

**fix busybox**
```bash
cd /mnt/bin
for cmd in $(busybox --list); do
    ln -sf busybox "$cmd"
done
```

**fix permissions**
```bash
for dir in bin boot etc lib local sbin share var; do
    chown -R root:root /mnt/$dir
done

chmod 1777 /mnt/tmp
chmod 600 /mnt/etc/shadow
```

there's no useradd util

**add a user**
```bash
echo "user:x:1000:1000::/home/user:/bin/sh" >> /mnt/etc/passwd
echo "user:x:1000:" >> /mnt/etc/group
mkdir -p /mnt/home/user
chown -R 1000:1000 /mnt/home/user
# then you'll wanna set the user's password once chrooted in
```

**set hostname**
```bash
echo "derive" > /mnt/etc/hostname
```

# system setup

now, you're safe to `derive-chroot /mnt`! if it starts, your system is all ready (except for the bootloader)

you wanna run `passwd root` to set up a root password and `passwd user` if you set up a normal user

you only need to set up /etc/fstab now (the one below is how i have it \[you can also do anything else you'd do in a chroot but you should probably be sure your system is bootable prior\])

**/etc/fstab**
```
/dev/nvme0n1p1  /boot  vfat  defaults  0  2
/dev/nvme0n1p2  /btrfs  defaults,noatime,compress=zstd,subvol=@derive  0  1
```

if you can, the system itself is functional and you only have the bootloader left to worry about

if you have ethernet - good, install whatever you need.

> note that everything in the system is statically linked
if you have golang binaries accessible over curl, those onces almost certainly be compatible
i recommend getting the `micro` text editor if you're unhappy with vi


# bootloader
## installing limine
...

## configuring limine
copy the boot image into your boot partition

`cp /boot/bzImage /mnt/boot/vmlinuz`

then you wanna add an entry for derive into your bootloader

replace the `root=`, `rootfstype=` and `rootflags=` flags with the ones you have

```yaml
timeout: 1

/derive
    protocol: linux
    kernel_path: boot():/vmlinuz
    cmdline: console=tty0 console=ttyS0 init=/bin/situation root=/dev/nvme0n1p2 rootfstype=btrfs rootflags=subvol=@derive rw
EOF
```

and then you can reboot!!!

# booting

thats where the peak starts kinda

you can do the same things you'd do with chroot

since we just copied the files for passwords from the install iso, the root password will be the same (root:derive)

you can change it with passwd

## services & kernel modules (to get yr wifi to work)
> see [sctl](https://derivelinux.org/docs/system/services) for system services

> and also see [the derive article for setting up wifi on iwd](https://derivelinux.org/docs/system/networking/iwd-wifi) but only after doing this

this is a big one and you'll write your first service here. you have to have them if you use wifi

you'll wanna check if `ip link show` brings up your wifi device. if it does - good, you're ready. you can skip enabling modules, but you'll still wanna see how it's done

now you need to enable your kernel modules at boot somehow. you should write a service for that

the first process that starts on your system is /bin/situation. i recommend you check out [the derive files](https://codeberg.org/derivelinux/derive/src/branch/main/rootfs) sometimes, since all of them are just shell scripts and are very hackable

all of your services live in /etc/sv and the enabled ones are symlinks to them in /etc/sv/on

here are the modules for your brand of card that i foudn online:
```bash
iwlwifi, iwlmvm # intel (worked for me)
ath9k           # atheros (not sure)
rtw88           # realtek (not sure)
```

the simplest janky but working way is to prepend your commands to /etc/sv/iwd. then it'll surely start before iwd but it might break with updates

so if you want to make your own service, you'll `touch /etc/sv/modules && chmod +x /etc/sv/modules && vi /etc/sv/modules`

**/etc/sv/modules**
```bash
#!/bin/sh

modproble iwlwifi
modproble iwlmvm
```
and then `sctl ua modules`

and the modules will be started immediately & autostarted on every boot


## package management

now, you can install your first package! we need to larp so the first tool we install is qfetch and its dependency, bmake (a suckless cmake alternative)

yo why does it say not found

well it's because we didn't clone the ports tree. this is equivalent to `pacman -Sy`. do it now: `dtr s`

lets do `spc add bmake && dtr mi qfetch`. we use spc for bmake, because its already compiled&seasoned, and dtr for qfetch, since it's just a build recipe.

### the package managers
- [`spc`](https://derivelinux.org/docs/pkg/spc) | [`package list`](https://pkg.derivelinux.org/)
    provides cooked&seasoned binaries. also is broken atm so i cant rly do much
- [`dtr`](https://derivelinux.org/docs/pkg/dtr) | [`package list`](https://ports.derivelinux.org/)
    provides ports, which are just compilation recipes adjusted to your system

and now you can run the install commands!! and everything works!

if you're not reading this on a piece of paper, you're reading this on a device with network access that can connect via ssh. i recommend you install it via `spc add dropbear`

# graphical environment (wayland)
...

# graphical environment (xorg)
[here](https://derivelinux.org/docs/system/xorg)

# porting packages
...

# further: what to do when stuff breaks
...
