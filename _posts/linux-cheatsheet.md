---
title: 'Top commands used in Linux'
excerpt: 'Linux had been the operating system for geeks and hacker. And it is true that there are other distribution like Ubuntu, Linuxmint, zorin os, meant for the people who want to give it a try.'
coverImage: '/assets/blog/linux-cheatsheet/cover.jpg'
date: 'September 21, 2020'
type: 'cheatsheet'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.jpg'
ogImage:
  url: '/assets/blog/linux-cheatsheet/cover.jpg'
---

Linux had been the operating system for geeks and hackers. And it's true that there are other distributions like Ubuntu, Linuxmint, zorin os, meant for the people who want to give it a try. In this Linux 101 blog I will basically walk you through all the technical terms that you will come across while using Linux.

It takes time to understand but it's worth while to read completely. Invest your time in it for a while.

## What do linux distributions/distro mean?

That's the first question that you may encounter. Distributions are operating systems that come with pre-installed software that you need to run a computer. Inside every distribution there is linux. Eventually every distribution is the same at its core because they are using Linux kernels. Some of the Linux distros popularly used these days are Ubuntu, MX Linux, Manjaro, Debian, Kali, Parrot OS, etc. You can find a whole list of all distro out there at [Distrowatch](https://distrowatch.com).

## What does the desktop environment mean?

Linux is just a barebone operating system. It doesn't provide you with any GUI(Graphical User Interface) meaning any pictures kind of thing. So to enable them we have desktop environments. It is package 📦 of everything that you need from web browser to calculator. There are few of them which are used extensively by most of the Linux enthusiasts. They include gnome, KDE, etc.

## What about Window Managers?

Well from windows background, we never notice window managers. It is the program which manages your window. For example, you can move your window by dragging and snap to any part of the desktop. There are many varieties of wm to choose from. From the Linux world, everybody loves tiling window managers such as i3, dwm, etc.

## What does kernel mean?

See, every system had to talk to hardware to perform certain operations. Like if you click on a mp3 file, somebody needs to send information to the speaker 🔊 to play the music. Now this somebody is no one but the kernel. It has the capability to talk to both hardware and software. In Linux, after the bootloader( a program that runs on its own when you press the power button) all the responsibility is given to the kernel.

## What is daemon?

Daemon are programs that run on their own without the use of terminal. They run in the background and usually wait for some request. Like ssh server and web server. They are always active and when they receive some request, they respond back to the client. In Linux you will frequently find something.service which is a daemon. They are controlled using systemctl command.

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
| `man`       | manual of any command                                 | `man cd`                      |
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
