---
title: 'deriving your linux'
date: 2026-02-17T17:43:42+02:00
---
> choose life, choose a job, choose a linux distribution
  this is wip

universal covered: setup, partitioning, UEFI bootloader, wayland
hardware-specific covered (thinkpad t480, intel network, cpu and gpu): network, 
not covered: swap, proprietary drivers, x11

# u should know this
there are many advantages to a simple linux system, and some will be applied here, sometimes unnecessarily. i'll try to have this be transparent and educational

!!!please do all of this on a ventoy drive with the derive iso and also an arch iso. not everything is guaranteed to work/exist

no steps here require you to be in the actual iso. you just need to have the rootfs from it. whatever you do in the ISO before copying the rootfs will be transferred over to the resulting installation, so don't be afraid to install packages and set up wifi and such

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
you'd format mount your drives the normal way

rootfs: anything, 2gb+
uefi partition: vfat, 1gb+

this is how the guide did it:
```sh
mount /dev/nvme0n1p2 /mnt
btrfs subvolume create /mnt/@derive
umount /mnt
mount /dev/nvme0n1p2 /mnt -o subvol=@derive,compress=zstd
mount /dev/nvme0n1p1 /mnt/boot
# i recommend you only plug in your home partition after the install
```

let's say they're on /mnt for the purposes of this

# the boots

this is the part where you can already work on the resulting system (install packages, configure wifi, etc). it's currently loaded into ram, but you'll copy the whole thing anyway. dont do it now, but remember for future installations

**copy the rootfs**
```bash
for dir in bin boot dev etc home include lib lib64 local opt ports root run sbin share usr var; do
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
# then you'll wanna run "passwd user"
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
/dev/nvme0n1p1  /boot/efi  vfat  defaults  0  2
/dev/nvme0n1p2  /btrfs  defaults,noatime,compress=zstd,subvol=@derive  0  1
```

if you can, the system itself is functional and you only have the bootloader left to worry about

if you have ethernet - good, install whatever you need.

> note that everything in the system is statically linked
if you have golang binaries accessible over curl, those onces almost certainly be compatible
i recommend getting the `micro` text editor if you're unhappy with vi


# bootloader
## installing limine, for EFI (fiction atm)
> derive doesnt ship efibootmgr OR efi limine for now, copy it from another linux system's /usr/share/limine/BOOTX64.efi. what i did is i booted into an arch iso


i assume you're doing it on an EFI system

copy the boot image into your boot partition

`cp /boot/bzImage /mnt/boot/vmlinuz-derive`
```bash
mkdir -p /mnt/boot/efi/EFI/limine
cp /usr/share/limine/BOOTX64.efi /mnt/boot/efi/EFI/limine/BOOTX64
```

then you wanna add an entry for derive into your bootloader

replace the `root=`, `rootfstype=` and `rootflags=` flags with the ones you have

```yaml
timeout: 1

/derive
    protocol: linux
    kernel_path: boot():/vmlinuz-derive
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

> iwd is a direct improvement to wpa_supplicant. there are tools out there for intuitive management like iwctl and impala(can be installed through cargo). derive will never ship NetworkManager

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

what i did is simple and janky - i prepended module loading to the iwd service directly. this may break with updates so please dont do it. but do it if you cant get the modules to load before iwd and just fix it if it breaks

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

we need to larp so bad but our only way to do so is `cat /etc/os-release`
this NEEDS fixing

the first tool we'll install is qfetch and its build dependency, bmake (a suckless cmake alternative)

remember: this is a statically-linked distro, so a lot of packages will not have dependencies. they're already bundled in

lets do `spc add bmake && dtr mi qfetch`
yo why does it say not found

well it's because we didn't clone the ports tree. this is equivalent to `pacman -Sy`. do it now: `dtr s`, and do it every few days. sometimes you may want to install ports with `dtr mis` instead

we use the `spc` package manager for bmake, because its already compiled & seasoned to our clanker's taste, and `dtr` for qfetch, since it's just a build recipe
### the package managers
- [`spc`](https://derivelinux.org/docs/pkg/spc) | [`package list`](https://pkg.derivelinux.org/)
    provides cooked&seasoned binaries
- [`dtr`](https://derivelinux.org/docs/pkg/dtr) | [`package list`](https://ports.derivelinux.org/)
    provides ports, which are derive-specific recipes adjusted to your system

the repos are strict about included packages: if a piece of software is too big, a smaller alternative is offered instead. and if the smaller alternative doesn't exist, the community will attempt to make one. this is evident in the standard build tools

and now you can install programs! and everything works!

# essential packages
- `mandoc` and `scdoc` - for manpages
- `dtr mi vim`, `micro` - probably close to your text editor
- `dtr mi dropbear` - ssh server
    first, you need to make sure you have a user (that's not root) set up.
    then, you run the server as root with `dropbear -F -E -R`. if everything works, you can make a service for it
    create a script at `/etc/sv/dropbear`, put that command in, `chmod +x` it and run `sctl ua dropbear`

# graphical environment (wayland)
...

# graphical environment (xorg)
[here](https://derivelinux.org/docs/system/xorg)

# porting packages
...

# further: what to do when stuff breaks
...
