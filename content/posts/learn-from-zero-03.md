# Coding from Zero using Dart / Flutter 03 - Variables

## What is a variable?

A variable can be thought of as a box that has a name and can store one piece of data.

We can give variables almost any name we want and then refer to them later on in the code.

A simple example of a variable looks like this:

```dart
void main() {
  var x = 5;
  print(x);
}
```

Take just a second to look over that and see if you can figure out exactly what will happen when you run it, then put it into a dart file, run it, and see what happens. If you are using the same file you used following the last article, you'll need to replace the `main` function rather than adding a second one.

So what's going on here? Let's take it line by line.

```dart
void main() {
```

Here we're declaring the main function like we did last time. This is the function that will run when Dart runs this file.

Next is the line where we declare our variable.

```dart
var x = 5;
```

Declaring a variable makes it available for use within that block of code. In this case, this variable will be available to all of the other code in the `main` function.

- `var` | The word `var` starts the declaration of a variable. It says to the compiler "I would like you to make a space in the computer's memory for some data". In other words, it makes a box.

- `x` | Then we gave that box a name, `x`. It can be almost any name. I chose `x` because I am boring.

- `=` | Next up is the equals sign `=`, which is an _assignment operator_. It assigns a piece of data to the variable. It tells the compiler "I would like you to put the following piece of data in that box you made."

- `5` | Then of course is the piece of data, `5`. This is what's stored in the box named `x`. Any other piece of code using this variable will look at it and see the number 5.

- `;` | It may be a little easier now to see why semicolons are important. We want the variable to equal five, not five and whatever other lines of code come next. So we use a semicolon to end our statement.

Okay I promise that is the most in-depth I will ever go with one single line of code. Probably. It's just important to get the details sorted out before we move onto the bigger stuff. Also, this is the first programming tutorial I've written that is intended for adults, so if the tone and humor are occasionally childish, I'll call that my excuse.

Let's use our variable now. On to the next line!

```dart
print(x);
```

Remember that `print` just writes something to the terminal. In this case, what is it going to print? If you have already run the program you know it prints the number `5`.

That's because instead of passing the `print` function something specific to print like "I AM A COMPUTER BEEP BOOP", we gave it our variable, `x`, which is currently equal to the number 5. You would say that the `value` of the variable `x` is `5`.

Of course there's the all-important last line:
```dart
}
```
That's the end of our `main` function. The variable `x` is no longer available past this point.

## So why are they called variables?

Because they're variable! Here's an example:

```dart
void main() {
  var x = 5;
  print(x);
  x = 10;
  print(x);
}
```

It's always a good idea to try to predict what the code will do before running it or reading the explanation.

The first two lines are the same. We create a variable called `x`, assign to it the number `5`, and then print it's value.

The next line is a little different, though

```dart
x = 10;
```

Here we are _reassigning_ the variable `x`, so that it holds a different value. Note that we don't use the `var` keyword again, because `x` already exists. To declare `x` a second time would cause an error, because only one variable with a particular name is allowed within a block of code.

This is just a statement telling the compiler "Please
