// let btn=document.querySelector('button')
// console.log(btn)
//?regular method
// if(btn){
// btn.addEventListener('click',()=>{
// console.log("button clicked")
// })
// }

//? inbuilt method
// if(btn){
// btn.onclick=()=>{
// console.log('button triggred')
// let randomColor=`#${Math.floor(Math.random()* 1000000)}`
// console.log(randomColor)
// document.body.style.backgroundColor=randomColor
// }
// }

//?mouse event
// if(btn){
// btn.onmouseover=()=>{
// console.log("mouse over triggred")
// }
// btn.onmouseout=()=>{
// console.log("mouse out triggred")
// }
// btn.onmouseout=()=>{
// console.log('mouse out triggred')
// let randomColor=`#${Math.floor(Math.random()* 1000000)}`
// console.log(randomColor)
// document.body.style.backgroundColor=randomColor
// }
// }

//? keyword event
// window.onkeydown=()=>{
// console.log("key down triggred")
// }
// window.onkeyup=()=>{
// console.log("key up triggred")
// }

// let input=document.querySelector("input")
// console.log(input)
// if(input){
// input.onkeydown=()=>{
// console.log(input.value)
// }
// }

let form=document.querySelector('form')
console.log(form);

if(form){
form.onsubmit=(e)=>{
 e.preventDefault()
 console.log('form triggred');
 let inputBox=document.querySelectorAll('input')
 console.log(inputBox)
 let formData={};
 inputBox.forEach((input)=>{
 formData[input.name]=input.value
 })
 console.log(formData);
}
}