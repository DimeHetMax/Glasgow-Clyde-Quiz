import setCookie from "./setCookies.js";
const formEl = document.querySelector(".registration")

const handForm = (e)=>{
 e.preventDefault()
 const form = e.target.elements;
 const name = form.name.value.trim()
 const email = form.email.value.trim()
 console.log({name, email});
 setCookie({name, email})
 window.location.href = "/pages/menu.html"
 formEl.reset()
}
formEl.addEventListener("submit",handForm)