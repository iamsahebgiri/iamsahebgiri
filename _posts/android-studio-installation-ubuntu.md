---
title: 'Install Android Studio in Ubuntu 20.04 from a zip file'
excerpt: 'Android studio, the brain child of Google and goto application for developing android application besides Eclipse with ADT plugins.'
coverImage: '/assets/blog/android-studio-installation-ubuntu/cover.jpg'
date: 'Sat Jan 02 2021 12:30:57 GMT+0530 (India Standard Time)'
type: 'linux'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.png'
ogImage:
  url: '/assets/blog/android-studio-installation-ubuntu/cover.jpg'
---

## Overview
Android studio, the brain child of Google and goto application for developing android application besides Eclipse with ADT plugins. In this post, I will show you the right way to install android studio in Ubuntu 20.04. This will also work in other flavour of ubuntu like Elementary OS and Linuxmint.

## Requirements
Before proceeding, make sure that you have Java installed, if not see my Java Installation Tutorial using Sdkman.

## Approach 01: Using Snap Store
This is the most common way to install android studio using Snap Store.

```bash
sudo snap install android-studio
```

And you know that android studio is little bit data intensive (around 883MB). So if you are like me then, I wouldn't go with snap store, instead I'll follow the second approach.

## Approach 02: From Archive Files
So in this approach download the `.tar/.zip` file from the official website directly in your browser. 
Once you have the `.tar.gz` file unzip it using inbuilt software or using the command given below:

```bash
tar -zxvf android-studio-ide-*-linux.tar.gz
```

Now move the android-studio directory to `/opt/`. `/opt/` is the folder for shared users to sotre applications.

```bash
sudo mv android-studio /opt/
```

If you're using a 64-bit version of Linux, make sure you first install the required dependencies package of android studio.

```bash
sudo apt-get install libc6:i386 libncurses5:i386 libstdc++6:i386 lib32z1 libbz2-1.0:i386
```

Now create a symlink of the android studio to the root bin directory for faster and easy access.

```bash
sudo ln -sf /opt/android-studio/bin/studio.sh /bin/android-studio
```

This allows us to use the command android-studio in the terminal to open android studio. 

## Optional But Recommended

But the problem we are facing is there is no android studio icon in the activities menu. To add an entry of Android Studio so that it will show up in the activities menu, we will have to follow the given steps

```bash
sudo nano /usr/share/applications/android-studio.desktop
```
Here we are using nano you can use gedit or may be vim to create a .desktop file. Paste the following entry in the android-studio.desktop file you have created and Save `(Ctr + S)` and Exit `(Ctrl + X)`.

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Android Studio
Comment=Android Studio
Exec=bash -i "/opt/android-studio/bin/studio.sh" %f
Icon=/opt/android-studio/bin/studio.png
Categories=Development;IDE;
Terminal=false
StartupNotify=true
StartupWMClass=jetbrains-android-studio
Name[en_GB]=android-studio.desktop
```

and now we are done here. And happy android journey.