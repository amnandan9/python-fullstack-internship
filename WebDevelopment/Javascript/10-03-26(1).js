// --------------------------------------------------
// LOOPING STATEMENTS IN JAVASCRIPT
// --------------------------------------------------

/*
Looping statements are used to execute a block
of code repeatedly until a condition becomes false.
*/


// --------------------------------------------------
// 1 FOR LOOP
// --------------------------------------------------

/*
Used when the number of iterations is known.
*/

for (let i = 1; i <= 5; i++) {
    console.log(i)
}



// --------------------------------------------------
// 2 WHILE LOOP
// --------------------------------------------------

/*
The loop executes as long as the condition is true.
*/

let i = 1

while (i <= 5) {
    console.log(i)
    i++
}



// --------------------------------------------------
// 3 DO WHILE LOOP
// --------------------------------------------------

/*
The loop executes at least once
even if the condition is false.
*/

let j = 1

do {
    console.log(j)
    j++
} while (j <= 5)



// --------------------------------------------------
// 4 FOR IN LOOP
// --------------------------------------------------

/*
Used to iterate over object properties.
*/

let student = {
    name: "Rahul",
    age: 21,
    course: "CSE"
}

for (let key in student) {
    console.log(key, student[key])
}



// --------------------------------------------------
// 5 FOR OF LOOP
// --------------------------------------------------

/*
Used to iterate over iterable values
like arrays and strings.
*/

let arr = [10,20,30]

for (let value of arr) {
    console.log(value)
}