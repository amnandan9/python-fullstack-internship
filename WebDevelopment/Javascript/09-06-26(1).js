/*
=====================================================
Topic: Introduction to JavaScript
=====================================================
*/


// --------------------------------------------------
// Definition of JavaScript
// --------------------------------------------------

// JavaScript is a scripting or programming language
// used to add functionality and behavior to web pages.
// It allows web pages to become interactive.


// --------------------------------------------------
// History of JavaScript
// --------------------------------------------------

/*
• JavaScript was invented by Brendan Eich in 1995.

• Netscape Corporation had a browser called
  Netscape Navigator.

• The browser only supported static web pages
  (HTML + CSS without behavior).

• The company wanted to support dynamic web pages
  (web pages with functionality).

• They considered two approaches:

  1. Collaborate with Sun Microsystems to embed Java
     into the browser.

  2. Hire Brendan Eich to embed the Scheme language.

• Brendan Eich created the language in about 10 days.

• First name of JavaScript: MOCHA (1995)

• Later renamed to: LiveScript

• Finally renamed to: JavaScript

• Netscape later submitted JavaScript to ECMA.

• ECMA stands for:
  European Computer Manufacturers Association.

• ECMA standardized JavaScript and named it
  ECMAScript.

• First ECMAScript version: ES1 (1997)

• Popular modern version: ES6 (2015)

• Current versions continue to evolve (ES14 – 2023).
*/


// --------------------------------------------------
// What is JavaScript?
// --------------------------------------------------

/*
JavaScript is used for:

1. Frontend Development
2. Backend Development (Node.js)

Difference between scripting language and programming language:

• Scripting language:
  - Does not require a compiler
  - Executed directly by an interpreter

• Programming language:
  - Usually compiled before execution

Note:
All scripting languages are programming languages,
but not all programming languages are scripting languages.
*/


// --------------------------------------------------
// Characteristics of JavaScript
// --------------------------------------------------

/*
1. High-Level Language
   - Easy to read and write for developers.

2. Interpreted Language
   - Code executes line by line.

3. Single Threaded
   - Uses one call stack and one heap memory.

4. Loosely Typed
   - Variables do not require fixed data types.

5. Dynamic Language
   - Data types can change during runtime.

6. Synchronous by Default
   - Code executes line by line until an error occurs.

7. Object-Based Language
   - Supports objects and object-based programming.
*/


// --------------------------------------------------
// Ways to Add JavaScript
// --------------------------------------------------


// 1. Internal JavaScript
// JavaScript code is written inside the HTML file.


// Example:

/*
<script>
    console.log("Hello JavaScript");
</script>
*/


// 2. External JavaScript
// JavaScript code is written in a separate .js file
// and linked to the HTML file.


// Example:

/*
<script src="script.js"></script>
*/


// --------------------------------------------------
// Output Methods in JavaScript
// --------------------------------------------------


// 1. console.log()
// Prints output in browser console

console.log("Hello World");


// 2. console.error()
// Prints error messages in console (red color)

console.error("This is an error");


// 3. console.warn()
// Prints warning messages (yellow color)

console.warn("This is a warning");


// 4. document.write()
// Writes output directly on webpage

document.write("Hello User");


// 5. document.writeln()
// Same as write but adds spacing

document.writeln("Hello");
document.writeln("World");


// 6. alert()
// Displays popup message

alert("Welcome to JavaScript");


// 7. confirm()
// Shows confirmation dialog (OK / Cancel)

confirm("Do you want to continue?");


// 8. prompt()
// Takes input from the user

prompt("Enter your name:");