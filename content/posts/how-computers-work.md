---
title: How Computers Work
date: '2019-11-08'
published: false
layout: post
tags: ['dart', 'flutter', 'tutorial']
category: software
---

## A note about How Computers Work

We are going to just barely scratch the surface of this topic, but it's important to have a little context to understand how things are working in the background. (Note to real CS engineers: The following is a gross oversimplification of the function of a computer)

Okay, so computers can't read English. That is, opening a terminal and writing

```
Please, sir Computer, would you kindly tell me the sum of twelve and twenty-six? I would be ever so grateful. I hope to hear from you soon. Have a great day!
```

Will do nothing except produce a bunch of red error text (the computer equivalent of "WHAT WAS THAT? I DID NOT UNDERSTAND.")

Right.

Computers operate in binary, which is a number system that only contains 0 and 1. Everything that happens in a computer is accomplished by flipping a bunch of little switches really fast. A big bunch. And they're extremely little. And it's _unbelievably_ fast. Anyway, on is 1, off is 0.

Sometimes we tell those switches to flip, and sometimes those switches tell each other to flip. Either way, every instruction given to a computer by a person has to eventually be translated into some switch flippin.

Sometimes I refer to "The Compiler" when I'm talking about code. A compiler is a program that translates the code you write into lots of very simple commands. These commands tell your computer how to flip all of its switches in exactly the right way.

Some of those switches are arranged so that they perform calculations when they are flipped (these switches are in the CPU, or Central Processing Unit), and some of them are arranged so that they store data (these switches make up the RAM, or Random Access Memory).

For a computer, running a program is accomplished by the CPU reading instructions out of RAM. Those instructions are really simple things like "Take the value in this section of RAM, add it to the value in that section, and store the result in this other section". A single line of code might translate into dozens of simple CPU instructions like this.

So that's how a computer works. Kinda.

The reality is that it's mind-bogglingly more complicated than that, but this is a beginner programming tutorial.

The important takeaway from all this is just to have an understanding that the code we write, and the way in which we write it, is intended to be interpreted by both computers and by humans. The word `var`, introduced in this article, is a signal to the computer that it should reserve a spot in RAM for some data. It's also a signal to you, the human, that there is an important piece of data that will be referenced later.

If you'd like to really get a good grip on how the words you type translate into cool things happening, I highly recommend the book "Code: The Hidden Language of Computer Hardware and Software" by Charles Petzold. It covers some really in-depth computer science topics in an approachable way that assumes you are an intelligent person who just has no idea how computers actually work.

That's all for this one. No exercises for this article, except maybe for checking out that book.
