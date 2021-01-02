---
title: 'Format float to n decimal places in java'
excerpt: ''
coverImage: '/assets/blog/format-float-to-n-decimal-places-in-java/cover.jpg'
date: 'Sat Jan 02 2021 17:31:19 GMT+0530 (India Standard Time)'
type: 'java'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/sg.png'
ogImage:
  url: '/assets/blog/format-float-to-n-decimal-places-in-java/cover.jpg'
---

## Overview
float in java is a 4 bytes ( 4 x 8 = 32 bits) primitive data type and IEEE 754 complaint. This tells us that 24 bits are for integer part, 7 bits are for decimal and the last bit or the most significant bit (MSB) or the left most bit is for sign of float.

There are multiple ways of converting float to n decimal places. 

## Using printf()
If you just want to print on the console then use the printf function provided to you through System. 

```java
float ft = 7.09889f;
System.out.printf("%.3f",ft); // 7.099
```

The above code snippet prints the value of float upto 3 decimal places and yes it will round up the value too.

## Using String.format() 
Now maybe you want a method to return a float upto n decimal places. Printf can't be used in that case. So you must use the format function provided through String class.

The above code can be written as given below.

```java
float ft = 7.09889f;
String.format("%.3f", ft); // 7.009
```

## Using DecimalFormat 
Now yet another way of doing the same thing is to use DecimalFormat class. First of all, you have to create an instance of DecimalFormat class and pass your formatter to its constructor as string as given below. And then call the format method. 

```java
float ft = 7.09889f;
DecimalFormat df = new DecimalFormat("#.000");
System.out.println(df.format(ft)); // 7.009
```


## Conclusion
There is no right or wrong way of doing things, it's just a matter of preference. Use the one that suits your needs and keep coding. 

