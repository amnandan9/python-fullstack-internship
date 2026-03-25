//fetch-async.js

async function fetchData(){
let data=await fetch('https://api.github.com/users');
console.log(data)
let userData=await data.json()
console.log(userData)
let section=document.createElement('section')
document.body.appendChild(section)
userData.map((user)=>{
let aside=document.createElement('aside')
section.append(aside)
let h3=document.createElement('h3')
let img=document.createElement('img')
let p=document.createElement('p');
p.innerText=`${user.password}`
h3.innerText=`${user.name}`
img.src=`${user.avatar}`
aside.append(h3,img,p)
console.log(user)
})
}
fetchData()