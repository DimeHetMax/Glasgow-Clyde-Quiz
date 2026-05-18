import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";
import quizzes from "./data.js";
import addLogoutBtn from "./addLogoutBtn.js";
import logout from "./logout.js";
import welcomeMessage from "./welcome.js";

// Getting elements from DOM
const menuTitle = document.querySelector(".menu-title");
const menuQuizList = document.querySelector(".menu-quiz-list");
const switchBtn = document.querySelector(".switch");

// Check if user registered
const userName = getCookie();
if (!userName) {
  locateTo("../index.html");
}
// if registered than show logout button, add the logic, add welcome message
addLogoutBtn(switchBtn, userName);
logout(userName);
welcomeMessage(menuTitle, userName);

// Iterating the quizzes array to show the options
const arrQuiz = quizzes
  .map(({ id, image, title }) => {
    return `<li class="menu-quiz-item" id=${id}>
               <a class="menu-quiz-item-link" href="../pages/quiz.html?quiz=${title.toLowerCase().split(" ").join("-")}">
                  <div class="menu-quiz-wrap-img">
                    <img class="menu-quiz-img" src=${image} alt=${title}>
                  </div>
                  <div class="menu-quiz-wrap-text">
                    <p class="menu-quiz-text">${title}</p>
                  </div>
                  </a>
                </li>`;
  })
  .join("");
// adding html to the DOM
menuQuizList.insertAdjacentHTML("afterbegin", arrQuiz);

