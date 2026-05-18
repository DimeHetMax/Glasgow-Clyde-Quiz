
import startCurrentTime from "./currentTime.js";
import toggleTheme from "./toggleTheme.js";

const timeElement = document.querySelector(".time p");
const themeToggleElement = document.querySelector('.switch input[type="checkbox"]');

// To call the function to show the current time
startCurrentTime(timeElement);
// To call the fcuntiom to change the theme
toggleTheme(themeToggleElement);

console.log("Hello!");
