
import startCurrentTime from "./currentTime.js";
import toggleTheme from "./toggleTheme.js";
// import quizzes from "./data.js";
// console.log(quizzes);

const timeElement = document.querySelector(".time p");
const themeToggleElement = document.querySelector('.switch input[type="checkbox"]');

startCurrentTime(timeElement);
toggleTheme(themeToggleElement);

console.log("Hello!");
