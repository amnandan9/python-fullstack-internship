
/*
Tokens, Variables
=====================================================
*/


// --------------------------------------------------
// TOKENS IN JAVASCRIPT
// --------------------------------------------------

/*
Tokens are the smallest units in a JavaScript program.

Types of Tokens:

1. Keywords
2. Identifiers
3. Literals / Values
4. Operators
5. Statements
*/


// --------------------------------------------------
// 1. KEYWORDS
// --------------------------------------------------

/*
Keywords are predefined words in JavaScript
which have a special meaning.

Example keywords:

var
let
const
if
else
switch
for
while
function
return
*/


// --------------------------------------------------
// 2. IDENTIFIERS
// --------------------------------------------------

/*
Identifiers are names given to variables,
functions, or objects.
*/

let studentName = "Rahul"
let age = 20


/*
Rules for identifiers:

1. Identifier should not be a keyword
   Example ❌ let var = 10

2. Identifier should not start with a number
   Example ❌ let 1name = "abc"

3. Spaces are not allowed
   Example ❌ let student name

4. Only _ and $ special characters allowed

5. Usually written using camelCase
   Example: studentName, totalMarks
*/


// --------------------------------------------------
// 3. LITERALS / VALUES
// --------------------------------------------------

/*
Literals are the values assigned to variables
*/

let number = 10
let name = "JavaScript"
let status = true


// --------------------------------------------------
// 4. OPERATORS
// --------------------------------------------------

/*
Operators are symbols used to perform operations.
*/

let a = 10
let b = 5

// Arithmetic Operators
a + b
a - b
a * b
a / b
a % b
a ** b


// Assignment Operators

let x = 10
x += 5
x -= 3
x *= 2
x /= 2


// Comparison Operators

a == b
a === b
a > b
a < b
a >= b
a <= b


// Logical Operators

true && true
true || false
!true


// --------------------------------------------------
// 5. STATEMENTS
// --------------------------------------------------

/*
Statements are instructions executed by JavaScript.
*/


// Conditional Statements

let marks = 80

if (marks > 35) {
    console.log("Pass")
} else {
    console.log("Fail")
}


// Switch Statement

let day = 2

switch(day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    default:
        console.log("Invalid")
}


// Loop Statement

for (let i = 1; i <= 5; i++) {
    console.log(i)
}


// --------------------------------------------------
// DIFFERENCE BETWEEN var, let, const
// --------------------------------------------------

/*
var
- Can be redeclared
- Can be updated
- Function scoped
*/

var x = 10
var x = 20


/*
let
- Cannot be redeclared
- Can be updated
- Block scoped
*/

let y = 10
y = 20


/*
const
- Cannot be redeclared
- Cannot be updated
- Block scoped
*/

const pi = 3.14


// --------------------------------------------------
// HOISTING
// --------------------------------------------------

/*
Hoisting means accessing variables
before declaration.

JavaScript automatically moves variable
declarations to the top of their scope.

Hoisting works mainly with var.
*/

console.log(a)
var a = 10


/*
If we try hoisting with let or const
it will go to TDZ.

TDZ = Temporal Dead Zone
Variable cannot be accessed until declared.
*/


// --------------------------------------------------
// DATA TYPES
// --------------------------------------------------

/*
JavaScript has two categories of data types.

1. Primitive Data Types
2. Non-Primitive Data Types
*/


// Primitive Data Types

let num = 10
let str = "Hello"
let bool = true
let big = 12345678901234567890n
let empty = null
let value
let sym = Symbol()


// Non Primitive Data Types

let arr = [1,2,3]

let obj = {
    name: "John",
    age: 25
}

function greet(){
    console.log("Hello")
}


// --------------------------------------------------
// typeof OPERATOR
// --------------------------------------------------

/*
typeof is used to check the data type of a variable.
*/

let a1 = 10
console.log(typeof a1)

let a2 = "Hello"
console.log(typeof a2)

let a3 = true
console.log(typeof a3)

let a4 = [1,2,3]
console.log(typeof a4)

let a5 = null
console.log(typeof a5)


/*
Important Notes

typeof number      → number
typeof string      → string
typeof boolean     → boolean
typeof array       → object
typeof function    → function
typeof undefined   → undefined
typeof null        → object (JavaScript bug)
*/