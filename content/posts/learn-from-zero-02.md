# Coding from Zero using Dart / Flutter 02 - Hello, world.

It's time to write our very first Dart program.

You will need the Dart SDK installed for the next several articles. I also recommend using VSCode with the Dart extension. For more information, please see the first article in this series.

## Our first program

Let's take this one step by step:

1. Launch VSCode
2. Open your project folder (The folder we made at the end of the first article)
3. If it's not open already, open the file explorer in VSCode by clicking the icon at the top of the activity bar to the left.
4. Create a new file by clicking `File -> New File` in the menu bar, or by clicking the `New File` icon at the top of the explorer.
5. Name the file `hello.dart`.

## Okay, neat. Can we please write some code now?

It's time! The `hello.dart` file should have opened automatically when you created it, but if not, you can open it by clicking on it in the explorer.

Our first program will be a simple greeting. We will then expand on it just a little. In your `hello.dart` file, add the following lines:

```dart
  void main() {
    print("Hello World!");
  }
```

Ooohh look at that little beauty. Can you take a guess what it does? Let's run it and find out!

Save your program by clicking `File -> Save All` or by pressing `ctrl + s`. Then, open a terminal by clicking `Terminal -> New Terminal` in the menu bar.

The terminal will pop up at the bottom of the screen. You'll notice that the terminal is already pointing to our project folder (`C:\dev\dart`, in my case).

In the terminal, type `dart hello.dart` and press enter.

...

Did it work?

If it did, you should see `Hello World!` appear in the terminal right below your command.

Congratulations! You've written your very first piece of code! Now let's take a look at what's going on here, line by line.

```dart
void main() {
```

Here we define a _function_ called "main". Functions are one of the building blocks of software. Functions are blocks of code that can work with inputs (or _arguments_) and produce (or _return_) results. In Dart, as well as many other languages, the _return type_ of the function is written before the function name, and the arguments are specified in parentheses immediately after the name. Here we define a function called "main" that returns nothing (void), and takes no arguments (there is nothing between the parentheses). If this doesn't make a lot of sense right now, don't worry too much -- we will be going over functions in great detail later on. For the moment, the important thing to remember is that **every Dart program needs a function called "main".**

The "main" function is used as an _entry point_. When you run your program using `dart hello.dart` in the command line, what you're really doing is telling the Dart SDK installed on your computer that you would like for it to compile and run the 'hello.dart' file. The idea of an entry point is to answer the question of "When I run this, where should I start?" In the case of the Dart SDK, the answer is "Start with the function called 'main'".

Finally we have that little open bracket there on the right. That defines the beginning of a _code block_, or all of the code that will run when this function is called.

What does it mean to "call" a function? Well let's look at line 2:

```dart
print("Hello World!");
```

That's what a function call looks like! In this case we are calling a function named "print", which is made available to us by the Dart SDK. The "print" function takes one argument -- the thing that should be printed -- and outputs that argument to the terminal. Notice that when we call a function, we put the argument(s) in parentheses right after the function.

Now please direct your attention to the semicolon at the end of this line. Semicolons in programming are like periods in English writing, in that they signify the end of a statement and keep things from being confusing for both the computer and the programmer. In some programming languages the semicolon is optional or (gasp) entirely unused, but in Dart they are required at the end of each line.

Last but not least there's little old line 3, which, to recap, looks like this:

```dart
}
```

Glorious, isn't it? The is the closed brace to match the opening brace we put on line 1. This indicates the end of the code block and tells the compiler "That's all the code in this function, so please stop here."

Now it's important to mention that we could have just as easily written the program like this:

```dart
void main(){print("Hello World!");}
```

The reason we didn't, and one of the most important things to learn at any level of software development, is this: Human readability is one of the most crucial aspects of good code. It's much harder to write software that humans can understand than it is to write software that computers can understand. This will become much clearer as your skills grow and you begin to write larger programs, but it's worth knowing and remembering from day 1.

We didn't write everything on one line because that makes it harder for us to read and modify later.

So there it is. Our first program. Now the real fun begins.

## Exercise

A simple exercise for a simple article, all we've got to do is change the program so that instead of outputting

```
Hello World!
```

It outputs

```
I AM A COMPUTER BEEP BOOP.
```

You can do it. I believe in you.

## A note on learning
