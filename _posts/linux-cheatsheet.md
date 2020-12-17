---
title: 'Top commands used in Linux'
excerpt: 'Linux had been the operating system for geeks and hacker. And it is true that there are other distribution like Ubuntu, Linuxmint, zorin os, meant for the people who want to give it a try.'
coverImage: '/assets/blog/run-cpp-on-web-emscripten/cover.jpg'
date: '2020-09-26T08:45:07.322Z'
type: 'cheatsheet'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/run-cpp-on-web-emscripten/cover.jpg'
---

Linux had been the operating system for geeks and hacker. And it's true that there are other distribution like Ubuntu, Linuxmint, zorin os, meant for the people who want to give it a try. In this Linux 101 blog I will basically walk you through all the technical terms that you will come across while using Linux.

It takes time to understand but it's worth while to read completely. Invest your time in it for a while.

## What do linux distributions/distro mean?

That's the first question that you may encounter. Distribution are operating system that comes with pre installed many software that you need to run a computer. Inside every distribution there is linux. Eventually every distributions are same at its core because they are using Linux kernel. Some of the Linux distro popularly used these days are ubuntu, MX Linux, Manjaro, Debian, Kali, Parrot OS, etc. You can find whole list of all distro out there at [Distrowatch](https://distrowatch.com).

## What do desktop environment mean?

Linux is just a barebone operating system. It doesn't provide you any GUI(Graphical User Interface) meaning any pictures kind of thing. So to enable them we have desktop environments. It is package 📦 of everything that you need from web browser to calculator. There are few of them which are used extensively by most of the Linux enthusiasts. They include gnome, KDE, etc.

## What about Window Manager?

Well from windows background, we never notice window manager. It is the program which managers your window. For example, you can can move your window by dragging and snap to any part of the desktop. There are may varieties of wm to choose from. From Linux world, everybody loves tiling window manager such as i3, dwm, etc.

## What does kernel mean?

See, every system had to talk to hardware to perform certain operations. Like if you click on a mp3 file, somebody needs to send information to the speaker 🔊 to play the music. Now this somebody is noone but kernel. It has the capability to talk to both hardware and software. In Linux, after bootloader( a program that run on its own when you press power button) all the responsibility is given to kernel.

## What is daemon?

Daemon are programs that run on its own without the use of terminal. They run in background and usually wait for some request. Like ssh server and web server. They are always active and when they recieve some request, they response back to the client. In Linux you will frequently find something.service which are daemon. They are controlled using systemctl command.

## Some Basic Commands in Linux

<div>

| Command     | Description                                           | Example                       |
| ----------- | ----------------------------------------------------- | ----------------------------- |
| `pwd`       | Prints the location of your current working directory | `pwd`                         |
| `ls`        | Print contents of a directory                         | ` ls <directory-name>`        |
| `cd`        | Change directory                                      | `cd <directory-name> `        |
| `cat`       | Print the contents of a file                          | `cat sample.txt `             |
| `cp`        | copy files and directories                            | `cp <from> <to>`              |
| `mv `       | move or rename directories and files                  | `mv <old-file> <new-file>`    |
| `rm `       | remove directory or files                             | `rm -r ./file`                |
| `mkdir `    | make a new directory                                  | `mkdir <directory-name>`      |
| `rmdir`     | remove a directory                                    | `rmdir <directory-name>`      |
| `touch`     | create a file                                         | `touch file.txt`              |
| `man`       | manual of any commad                                  | `man cd`                      |
| `sudo`      | provides root privileges                              | `sudo apt-get install nodejs` |
| `head`      | print first few lines of a file                       | `head -20 /var/log/syslog`    |
| `tail`      | prints the location of your current working directory | `tail -30 /var/log/kern.log`  |
| `chmod `    | change file and directory permission                  | `chmod +x ./install.sh`       |
| `md5sum`    | verify checksum of downloaded files                   | `md5sum ./ubuntu.iso`         |
| `whereis`   | locate file and binaries                              | `whereis node`                |
| `df`        | check disk space usage                                | `df -h`                       |
| `free`      | display amount of free and used RAM                   | `free -h`                     |
| `ifconfig ` | prints network informations                           | `ifconfig`                    |
| `uname`     | prints basic information about the system             | `uname -a`                    |
| `history`   | prints a list of previously typed commands            | `history`                     |
| `shutdown`  | power off immediately                                 | `shutdown -h now`             |

</div>
