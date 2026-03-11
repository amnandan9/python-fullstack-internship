// --------------------------------------------------
// OPERATORS IN JAVASCRIPT
// --------------------------------------------------

/*
Operators are symbols used to perform operations
on variables and values.
*/


// --------------------------------------------------
// 1 ARITHMETIC OPERATORS
// --------------------------------------------------

/*
Used to perform mathematical calculations.
*/

let a = 10
let b = 5

console.log(a + b)   // Addition
console.log(a - b)   // Subtraction
console.log(a * b)   // Multiplication
console.log(a / b)   // Division
console.log(a % b)   // Modulus (remainder)
console.log(a ** b)  // Exponent (power)


// --------------------------------------------------
// 2 ASSIGNMENT OPERATORS
// --------------------------------------------------

/*
Used to assign values to variables.
*/

let x = 10

x = 5      // Assign
x += 3     // x = x + 3
x -= 2     // x = x - 2
x *= 2     // x = x * 2
x /= 2     // x = x / 2
x %= 3     // x = x % 3
x **= 2    // x = x ** 2


// --------------------------------------------------
// 3 COMPARISON OPERATORS
// --------------------------------------------------

/*
Used to compare two values.
Result will be true or false.
*/

let p = 10
let q = 5

console.log(p == q)   // equal to (will chec values of lhs and rhs )
console.log(p === q)  // equal value and equal type (it will chec both values of lhs and rhs)
console.log(p != q)   // not equal
console.log(p !== q)  // not equal value or type
console.log(p > q)    // greater than
console.log(p < q)    // less than
console.log(p >= q)   // greater than or equal
console.log(p <= q)   // less than or equal


// --------------------------------------------------
// 4 LOGICAL OPERATORS
// --------------------------------------------------

/*
Used to combine conditions.
*/

let age = 20
let citizen = true

console.log(age > 18 && citizen)   // AND
console.log(age > 18 || citizen)   // OR
console.log(!citizen)              // NOT


// --------------------------------------------------
// 5 INCREMENT AND DECREMENT OPERATORS
// --------------------------------------------------

/*
Used to increase or decrease value by 1.
*/

let n = 5

n++   // Increment
n--   // Decrement

console.log(n)


// --------------------------------------------------
// 6 TERNARY OPERATOR
// --------------------------------------------------

/*
Shortcut for if-else condition.
*/

let marks = 40

let result = (marks >= 35) ? "Pass" : "Fail"

console.log(result)


// --------------------------------------------------
// 7 TYPEOF OPERATOR
// --------------------------------------------------

/*
Used to check the datatype of a variable.
*/

let value = "Hello"

console.log(typeof value)


// --------------------------------------------------
// 8 DELETE OPERATOR
// --------------------------------------------------

/*
Used to remove property from an object.
*/

let student = {
    name: "Alex",
    age: 21
}

delete student.age

console.log(student)


// --------------------------------------------------
// 9 IN OPERATOR
// --------------------------------------------------

/*
Checks whether a property exists in an object.
*/

let person = {
    name: "John",
    age: 25
}

console.log("name" in person)


// --------------------------------------------------
// 10 INSTANCEOF OPERATOR
// --------------------------------------------------

/*
Checks whether an object belongs to a specific class.
*/

let arr = [1,2,3]

console.log(arr instanceof Array)