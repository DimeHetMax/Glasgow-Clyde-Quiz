import setCookie from "./setCookies.js";
import getCookie from "./getCookie.js";
import startCurrentTime from "./currentTime.js";
import toggleTheme from "./toggleTheme.js";

const timeElement = document.querySelector(".time p");
const themeToggleElement = document.querySelector('.switch input[type="checkbox"]');

startCurrentTime(timeElement);
toggleTheme(themeToggleElement);

console.log("Hello!");
