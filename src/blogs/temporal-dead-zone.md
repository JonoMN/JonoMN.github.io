---
title: "Hoist the Flags: Undefined Ahead!"
date: "2023-11-25T10:00:00Z"
topics: "Declarations and Initialisations • Function Scope • Hoisting"
desc: "In JavaScript, variable declarations (but not initialisations) are moved to the top of their relevant scope at run time. If the variable is used after it has been declared but before it has been initialised, it will be ‘undefined’."
---

## Introduction

I stumbled upon a JavaScript puzzle (big shout-out to Caitlin!) that turned out trickier than expected. The puzzle asked what the following code would output:

```javascript
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};

girl ();
```

My first thought was 21, but to my surprise the answer was `undefined`. Let's find out why. This unexpected output is due to three concepts, Hoisting, Declarations/Initialisations and Function Scope. 


## Declarations and Initialisations

First we must understand the difference between declarations and initlisations. When you declare a variable, you're basically telling JavaScript it exists and where it is located but not assigning it a value, the variable is therefore left as ‘undefined’. Like so:

```javascript
var myVariable;
```

Initialising a variable is the process of assigning a value to a declared variable. This can be done in conjunction with a variable declaration, like so:

```javascript
var myVariable = 10;
```

## Function Scope

The scope of a variable is the context in which it can be ‘seen’ or referenced. There are three types of scope in JavaScript; Global Scope, Function Scope  and Block Scope. For this scenario we need only focus on Global Scope and Function Scope. 

Any variable declared outside of a function or curly braces is automatically placed in Global Scope. Any variables in the Global Scope of a document can be accessed from anywhere in that document, including within functions and curly braces.

Any variable that is declared inside a function has Function Scope and can only be accessed from within that function. Each function has its own scope, and cannot access another function’s scope.

Because of scope, you can have more than one variable with the same name within a document as long as they do not have the same scope. In our example we have two variables named `x`, one in Global Scope and the other in Function Scope. When accessing variables from within a function, any variables that are declared within the Function Scope take precedence over variables that are declared outside of the function. In our example, the `x` variable declared within the `girl` function takes precedence over the `x` variable declared outside of the function.

## Hoisting

In JavaScript, variable declarations (but not initializations) are "hoisted" or moved to the top of their containing scope at run time but the initialisation is left in place. Therefore, within the ‘girl’ function, the variable ‘x’ is declared before console.log is called but initialised after console.log is called. Meaning at the time console.log is called, the variable is `undefined`. Conceptually, this process looks like the following:

```javascript
var x = 21;
var girl = function () {
    var x;   //The variable is declared (x=‘undefined’)
    console.log(x);
    x = 20;   //The variable is initialised (x=20)
};

girl ();
```

## Conclusion

So, to sum it up, the unexpected `undefined` output in the JavaScript puzzle boils down to three key things: hoisting, variable declarations/initializations, and function scope. Hoisting moves variable declarations to the top of the scope during runtime, leaving initializations where they are. This means you might stumble upon variables that are declared but not yet initialized, resulting in `undefined` when accessed.

