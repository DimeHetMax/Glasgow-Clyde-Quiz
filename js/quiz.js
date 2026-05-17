import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";
import quizzes from "./data.js";
import addLogoutBtn from "./addLogoutBtn.js";
import logout from "./logout.js";
import titleToUpperCase from "./titleToUpperCase.js";

const quizForm = document.querySelector(".quiz-form");
const questionsWrapper = document.querySelector(".questions");
const quizTitle = document.querySelector(".quiz-title");
const switchBtn = document.querySelector(".switch");
const submitFormBtn = document.querySelector(".submit-quiz-btn");

const params = new URLSearchParams(window.location.search);
const slug = params.get("quiz").split("-").join(" ");

const filteredData = quizzes.filter(
  (item) => item.title.toLowerCase() === slug,
);
const quiz = filteredData[0].questions;
// console.log(quiz);

const userName = getCookie();
if (!userName) {
  locateTo("../index.html");
}
addLogoutBtn(switchBtn, userName);
logout(userName);

quizTitle.textContent = `${titleToUpperCase(slug)}`;
quiz.forEach((item, index) => {
  const html = `<div class="quiz-input-wrapper question">
                  <p class="quiz-form-text">${index + 1}. ${item.question}</p>
                  <label
                    ><input
                      type="radio"
                      name="q${index + 1}"
                      value="${item.options[0]}"
                      required
                  /> A) ${item.options[0]}</label><br>
                  <label
                    ><input
                      type="radio"
                      name="q${index + 1}"
                      value="${item.options[1]}"
                      required
                  /> B) ${item.options[1]}</label><br>
                  <label
                    ><input
                      type="radio"
                      name="q${index + 1}"
                      value="${item.options[2]}"
                      required
                  /> C) ${item.options[2]}</label><br>
                   <label
                    ><input
                      type="radio"
                      name="q${index + 1}"
                      value="${item.options[3]}"
                      required
                  /> D) ${item.options[3]}</label><br>
                  <span class="feedback" id="f${index + 1}"></span>
                </div>`;
  questionsWrapper.insertAdjacentHTML("beforeend", html);
});
const handleForm = (e) => {
  e.preventDefault();
  let totalScore = 0;

  quiz.forEach((question, index) => {
    const value = quizForm.elements[`q${index + 1}`].value;

    const feedback = document.querySelector(`#f${index + 1}`);
    if (value === question.correctAnswer) {
      totalScore += 1;
      feedback.textContent = `correct answer: ${question.correctAnswer}`;
      feedback.classList.add("correct");
      feedback.classList.remove("incorrect");
    } else {
      feedback.textContent = `correct answer: ${question.correctAnswer}`;
      feedback.classList.add("incorrect");
      feedback.classList.remove("correct");
    }
  });
  totalScore >= 3
    ? questionsWrapper.insertAdjacentHTML(
        "afterend",
        `<p class="quiz-total-score passColor"> Score ${totalScore} out of ${quiz.length} </p>`,
      )
    : questionsWrapper.insertAdjacentHTML(
        "afterend",
        `<p class="quiz-total-score"> Score ${totalScore} out of ${quiz.length} </p>`,
      );
  submitFormBtn.disabled = true;
};
quizForm.addEventListener("submit", handleForm);
