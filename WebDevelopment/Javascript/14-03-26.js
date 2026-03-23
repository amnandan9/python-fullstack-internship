// const { getGenerativeModel } = require("firebase/vertexai")

// //inplicit reture - returning some thing with having a return keyword  10ways to declare a function
// let arrfun=()=>{
//     console.log("im arrow function")
// }



//jason - javascript object notation is use to store data in the form of keyy and value pair key and value is in double quotes
// Example of a JSON object

let student = {
    "name": "Rahul",
    "age": 20,
    "isStudent": true
}

// Converting Object to JSON String
let jsonString = JSON.stringify(student)
console.log(jsonString)

// Converting JSON String back to Object
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject.name)

//in jSON we have 2 inbuild methods stringfy and pass
// stringify() - converts a JavaScript object into a JSON string
let str = JSON.stringify(student)
//is used to conver normal object in to jason object



// parse() - converts a JSON string back into a JavaScript object - is used to convent jason object to notmal object
let obj = JSON.parse(str)


