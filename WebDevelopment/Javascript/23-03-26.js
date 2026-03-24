/*
DOM Methods
--------------------------------

1) getElementById()
- Used to target the element with a specific id
- Returns the element if found, otherwise returns null


2) getElementsByClassName()
- Used to target all elements with a specific class name
- Returns an HTMLCollection (array-like)
- Returns empty collection if no elements found


3) getElementsByTagName()
- Used to target all elements with a specific tag name
- Returns an HTMLCollection (array-like)
- Returns empty collection if no elements found


4) querySelector()
- Used to target the first element that matches a CSS selector
- Returns the element if found, otherwise returns null


5) querySelectorAll()
- Used to target all elements that match a CSS selector
- Returns a NodeList (array-like)
- Returns empty list if no elements found


NOTE:
--------------------------------
HTMLCollection:
- Array-like but not a real array
- Only "length" property is available
- Cannot use array methods

NodeList:
- Array-like but not a real array
- Supports "length" and "forEach()"

/*
DOM Methods
--------------------------------

1) getElementById()
- Used to target the element with a specific id
- Returns the element if found, otherwise returns null

2) getElementsByClassName()
- Used to target all elements with a specific class name
- Returns an HTMLCollection (array-like)
- Returns empty collection if no elements found
*/

//? getelementbyid
let h1=document.getElementById('heading1')
console.log(h1)
h1.style.backgroundColor="blue"   // fixed spelling
h1.style.color="white"

let para1=document.getElementById('para1')
console.log(para1)
para1.style.color="red"   // fixed variable name

//?getelementbyclassname
let para =document.getElementsByClassName('para')
console.log(para)

para[0].style.backgroundColor="red"   // fixed spelling
para[0].style.color="white"

para[1].style.backgroundColor="red"
para[1].style.color="white"

para[2].style.backgroundColor="red"
para[2].style.color="white"

//?getelementbytagname
let head1=document.getElementsByTagName('h1')
console.log(head1)
head1[0].style.color="red"

let paraTag=document.getElementsByTagName('p')   // renamed to avoid conflict
console.log(paraTag)

for(let i=0; i<paraTag.length; i++){
    paraTag[i].style.backgroundColor="red"
    paraTag[i].style.color="white"
}

let section=document.getElementsByTagName('section')
console.log(section)

//?queryselector
let h1qs=document.querySelector('h1')
console.log(h1qs)
h1qs.style.backgroundColor="maroon"

let paraqs=document.querySelector('#para1')
console.log(paraqs)

//?queryselectorall
let paraAll=document.querySelectorAll('.para')
console.log(paraAll)

for(let i=0; i<paraAll.length; i++){
    paraAll[i].style.backgroundColor="maroon"
    paraAll[i].style.color="white"
}