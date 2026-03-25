
//fetch-promise.js

fetch('jsonplaceholder.typicode.com')
.then((res)=>{
console.log(res);
let userDetails=res.json()
console.log(userDetails);

userDetails.then((res)=>{
console.log(res);
let section=document.createElement('section')

document.body.appendChild(section)
res.map((user)=>{
console.log(user);
let aside=document.createElement('aside')
section.appendChild(aside)
let h2=document.createElement('h2')
let img=document.createElement('img')
h2.innerText=`${user.name}`
img.src=`${user.avatar}`
aside.append(h2,img)
})
})
})