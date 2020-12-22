---
title: 'Hacking android phone the easiest way'
excerpt: 'ADB stands for Android Debug Bridge. The name itself self explanatory. It allows us to connect to android devices.'
coverImage: '/assets/blog/run-cpp-on-web-emscripten/cover.jpg'
date: 'May 05, 2020'
type: 'hacking'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/run-cpp-on-web-emscripten/cover.jpg'
---

ADB stands for Android Debug Bridge. The name itself is self explanatory. It allows us to connect to android devices. ADB helps in doing all the things that you do on your phone. This is primarily developed for android app developers. Enough of introduction, so let's make your hands dirty.

> Note:
>
> use `./adb` if you are using linux/mac or use just `adb` if you are using windows machine

## Architecture of adb

It works on a server-client model, which means there is a server and a client stays in your PC(Yes both client and server). There is a piece of code in your Android Device called daemon which runs in the background. When the server sends a command, it performs it and returns the response to the server. And then the server sends the response to the client which eventually shows you the output.

## How to install adb?

1. Visit the link given below and download the platform tools and install it on your PC.
   [Android Developer Site](https://developer.android.com/studio/releases/platform-tools)
2. Extract it in your folder and use the console to navigate to the folder where you have extracted.
3. Now turn on the developer mode and USB Debugging option in your android phone. Connect your android device to your PC.

## Install apps in your phone

Installing any apps into the android phone you have accessed through adb is a piece of cake if done the right way. To install any app just simply run the following command.

```bash
$ ./adb install path_to_apk
```

## Full access of your phone

If you have ever used any linux distribution then most likely you understand how powerful the terminal can be. Android is also a linux distro built for mobile devices. To get the full access to the phone run the `shell` command.

```bash
$ ./adb shell
```

## Take screenshot using console

Access full control of the device using the above command and then run `screencap` command to capture the screen. The picture is stored in the device. Once captured, fetch the image by `pull` command as given below.

```bash
$ ./adb shell
$ screencap /sdcard/screen.png
$ exit
$ ./adb pull /sdcard/screen.png
```

## Record your phone screen as video

If you can capture the screen then it is most obvious that you try to record the screen. Similarly get full access through the shell and run the `screenrecord` command.

Press Control + C to stop recording

```bash
$ ./adb shell
$ screenrecord /sdcard/video.mp4
$ exit
$ ./adb pull /sdcard/video.mp4
```

## Get full list of available command

Now it is quite hard for me to explain all the available commands. Just you type the below to get a list of available command that you can try out and understand the full potential of android debug bridge.

```bash
$ ./adb help
```
