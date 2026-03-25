/*
Events in JavaScript
--------------------------------
- A JavaScript event is a specific action that occurs within a web page
- Examples:
  click, mouse movement, key press, page load
Types of Events
--------------------------------
1) Click Events
- Occurs when a user clicks on a button or any HTML element
- Ways to handle:
  → onclick (HTML attribute)
  → addEventListener()
Example:
  button.addEventListener("click", () => {
      console.log("Button clicked");
  });
2) Mouse Events
- Occurs when user interacts using mouse (hover, move, etc.)
- Common events:
  → mouseover
  → mouseout
Example:
  element.addEventListener("mouseover", () => {
      console.log("Mouse over element");
  });
3) Keyboard Events
- Occurs when user presses any key
- Common events:
  → keydown
  → keyup
Example:
  document.addEventListener("keydown", (e) => {
      console.log(e.key);
  });
4) Form Events
- Triggered when user interacts with forms
submit:
- Fired when form is submitted
- Triggered by:
  → clicking submit button
  → pressing Enter inside input field
Example:
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submitted");
  });
*/

/*
Events in JavaScript
--------------------------------
*/
//? 1. Click Events
let btn = document.querySelector('button')
console.log(btn)
//! Regular method
btn.addEventListener('click', () => {
    console.log("Button clicked")
    console.log("Hello")
})
//! Inbuilt method
// btn.onclick = () => {
//     console.log("I am a button")
// }
//? 2. Mouse Events
// mouseover
btn.addEventListener('mouseover', () => {
    console.log("Mouse over triggered")
})
// mouseout
btn.addEventListener('mouseout', () => {
    console.log("Mouse out triggered")
})
//? 3. Keyboard Events
document.addEventListener('keydown', (e) => {
    console.log("Key Down:", e.key)
})
document.addEventListener('keyup', (e) => {
    console.log("Key Up:", e.key)
})
//? 4. Form Events
let form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Form submitted")
})