/*
DOM Properties
--------------------------------
1) createElement()
- Used to create a new HTML element, It is used to create an html tag

2) appendChild()
- Used to add a single element to the DOM

3) append()
- Used to add multiple elements to the DOM

4) innerHTML
- Used to add HTML content inside an element

5) innerText
- Used to add text content inside an element
*/

//? innerText
//? innerHTML
console.log(document.body)
// let h1 = document.createElement('h1')
// console.log(h1)
// document.body.appendChild(h1)
// console.log(document.body)

let section = document.createElement('section')
console.log(section)

document.body.appendChild(section)
//? createElement
let div = document.createElement('div')
console.log(div)
document.body.appendChild(div)
//? appendChild
let p1 = document.createElement('p')
p1.innerText = "This is appendChild example"
section.appendChild(p1)

//? append
let p2 = document.createElement('p')
p2.innerText = "This is append example"
section.append(p2, " extra text")
//? innerText
let h2 = document.createElement('h2')
h2.innerText = "This is innerText example"
section.appendChild(h2)
//? innerHTML
let box = document.createElement('div')
box.innerHTML = "<b>This is innerHTML example</b>"
section.appendChild(box)