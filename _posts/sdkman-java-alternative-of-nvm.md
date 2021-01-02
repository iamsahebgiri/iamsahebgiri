---
title: 'sdkman - The Java alternative of nvm'
excerpt: 'Do you ever struggle to set up the right tool for a github project that you have cloned? Some projects are only compatible with certain versions only.'
coverImage: '/assets/blog/sdkman-java-alternative-of-nvm/cover.jpg'
date: 'Sat Jan 02 2021 14:38:57 GMT+0530 (India Standard Time)'
type: 'java'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.png'
ogImage:
  url: '/assets/blog/sdkman-java-alternative-of-nvm/cover.jpg'
---

## Overview
Do you ever struggle to set up the right tool for a github project that you have cloned? Some projects are only compatible with certain versions only. Sdkman helps you set up the right version of Java. 

Sdkman is a bash script for managing multiple java versions. It not just provides java but also supports other programming languages like, kotlin, scala, groovy, gradle, etc. It gives us an easy to use cli api for installing, switching, removing and listing different java versions.

## Usage
To use it make sure you have a Unix based system and curl installed. Sorry 🙏 windows people. Open your terminal, in my case `Ctrl + Alt + T` opens my terminal (Ubuntu).

```bash
curl -s "https://get.sdkman.io" | bash
```

This downloads the sdkman scripts and then runs the following command to set up the script.

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

To ensure that you have successfully installed sdkman type the below command.

```bash
sdk version
```

If everything went well then you will see the most recent version of sdkman in your console.

## Installing Java

To install the latest stable version of the JDK use the following command. 

```bash
sdk install java
```

But this is not always the case. If you want to install the latest version you do it too. First list the available version of jdk using the following command.

```bash
sdk list java 
```

This gives a list of all the available jdk. To install a specific version of it, use the following command. 

```bash
sdk install java <version_of_your_choice>
```

Now you have two different versions of JDK. To know which one is your current jdk version use the command below.

```bash
sdk current java
```

## Change Different Java Version

Now to change to different versions use the following command

```bash
sdk use java <version>
```

The above mentioned command stays only for that particular terminal session, which is what we don't want. If you want to permanently set the java version use the following command.

```bash
sdk default java <version>
```

## Uninstalling Java

Once we are done with it. How about removing it? It's also simple.

```bash
sdk uninstall java <version>
```