// JSON - JavaScript Object Notation
// JSON is used to store and transfer data in the form of key and value pairs
// In JSON the keys are written in double quotes

// -------------------------------
// Creating a normal JavaScript Object
// -------------------------------

let student = {
    "name": "Rahul",
    "age": 20,
    "isStudent": true,
    "course": "Computer Science",
    "semester": 7,
    "skills": ["Python", "JavaScript", "HTML", "CSS"],
    "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India"
    }
}

// Printing the original JavaScript object
console.log("Original JavaScript Object:")
console.log(student)


// -------------------------------
// Converting JavaScript Object to JSON String
// -------------------------------

// JSON.stringify() converts a normal JavaScript object into a JSON string
let jsonString = JSON.stringify(student)

console.log(" ")
console.log("JSON String after using stringify():")
console.log(jsonString)


// -------------------------------
// Converting JSON String back to JavaScript Object
// -------------------------------

// JSON.parse() converts JSON string back into a JavaScript object
let jsonObject = JSON.parse(jsonString)

console.log(" ")
console.log("Converted back to JavaScript Object:")
console.log(jsonObject)


// -------------------------------
// Accessing values from the converted object
// -------------------------------

console.log(" ")
console.log("Accessing some values from the object:")

console.log("Student Name:", jsonObject.name)
console.log("Student Age:", jsonObject.age)
console.log("Student Course:", jsonObject.course)
console.log("First Skill:", jsonObject.skills[0])
console.log("City:", jsonObject.address.city)


// -------------------------------
// Summary
// -------------------------------

// JSON.stringify()
// converts JavaScript Object  → JSON String

// JSON.parse()
// converts JSON String → JavaScript Object

// Math Object in JavaScript
// Math is a built-in object used to perform mathematical operations

// ------------------------------------
// Math properties
// ------------------------------------

// Math.PI gives value of π
console.log("Value of PI:", Math.PI)

// Math.E gives Euler's number
console.log("Value of E:", Math.E)


// ------------------------------------
// Math methods
// ------------------------------------

// Math.round() - rounds number to nearest integer
console.log("Round 4.6:", Math.round(4.6))
console.log("Round 4.3:", Math.round(4.3))

// Math.ceil() - rounds number upward
console.log("Ceil 4.2:", Math.ceil(4.2))

// Math.floor() - rounds number downward
console.log("Floor 4.8:", Math.floor(4.8))

// Math.trunc() - removes decimal part
console.log("Trunc 4.9:", Math.trunc(4.9))

// Math.sqrt() - square root of number
console.log("Square root of 25:", Math.sqrt(25))

// Math.pow() - power of number
console.log("2 power 3:", Math.pow(2,3))

// Math.abs() - absolute value (removes negative sign)
console.log("Absolute value of -10:", Math.abs(-10))

// Math.max() - returns largest number
console.log("Maximum value:", Math.max(10, 20, 30, 5))

// Math.min() - returns smallest number
console.log("Minimum value:", Math.min(10, 20, 30, 5))

// Math.random() - generates random number between 0 and 1
console.log("Random number:", Math.random())


// ------------------------------------
// Example program using Math object
// ------------------------------------

let num = 7.8

console.log("Original number:", num)
console.log("Rounded:", Math.round(num))
console.log("Ceil:", Math.ceil(num))
console.log("Floor:", Math.floor(num))
console.log("Square root:", Math.sqrt(num))

//promises date and time of math objects