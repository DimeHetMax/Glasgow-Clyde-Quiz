import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";
import quizzes from "./data.js";
import addLogoutBtn from "./addLogoutBtn.js";
import logout from "./logout.js";
import welcomeMessage from "./welcome.js";

const menuTitle = document.querySelector(".menu-title");
const menuQuizList = document.querySelector(".menu-quiz-list");
const switchBtn = document.querySelector(".switch");

const userName = getCookie();
if (!userName) {
  locateTo("../index.html");
}

addLogoutBtn(switchBtn, userName);
logout(userName);
welcomeMessage(menuTitle, userName);

// menuTitle.textContent = `Welcome, ${userName}! To Quiz !`;
// quizzes.forEach(({ id, image, title }) => {
//   const html = `
//                <li class="menu-quiz-item" id=${id}>
//                <a href="../pages/quiz.html?quiz=${title.toLowerCase().split(" ").join("-")}">
//                   <div class="menu-quiz-wrap-img">
//                     <img class="menu-quiz-img" src=${image} alt=${title}>
//                   </div>
//                   <div class="menu-quiz-wrap-text">
//                     <p class="menu-quiz-text">${title}</p>
//                   </div>
//                   </a>
//                 </li>
// `;
//   menuQuizList.insertAdjacentHTML("afterbegin", html);
// });
const arrQuiz = quizzes
  .map(({ id, image, title }) => {
    return `<li class="menu-quiz-item" id=${id}>
               <a href="../pages/quiz.html?quiz=${title.toLowerCase().split(" ").join("-")}">
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
menuQuizList.insertAdjacentHTML("afterbegin", arrQuiz);
// {id: 1, title: 'Basic Numeracy', image: './image/numeracy.jpg', questions: Array(5)}
