import setCookie from "./setCookies.js";

// form element
const formEl = document.querySelector(".registration")

// Function handle logic of the submit form on the index/home page
const handForm = (e)=>{
 e.preventDefault()
 const form = e.target.elements;
 const name = form.name.value.trim()
 const email = form.email.value.trim()
 console.log({name, email});
 setCookie({name, email})
 window.location.href = "./pages/menu.html"
 formEl.reset()
}
// Listen form on submit event
formEl.addEventListener("submit",handForm)