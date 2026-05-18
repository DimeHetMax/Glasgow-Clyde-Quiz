import getCookie from "./getCookie.js";
import locateTo from "./locateTo.js";
import quizzes from "./data.js";
import addLogoutBtn from "./addLogoutBtn.js";
import logout from "./logout.js";
import titleToUpperCase from "./titleToUpperCase.js";

// Getting elements from DOM
const quizForm = document.querySelector(".quiz-form");
const questionsWrapper = document.querySelector(".questions");
const quizTitle = document.querySelector(".quiz-title");
const switchBtn = document.querySelector(".switch");
const submitFormBtn = document.querySelector(".submit-quiz-btn");

// Gettin param that was passed from menu page
const params = new URLSearchParams(window.location.search);
const slug = params.get("quiz").split("-").join(" ");

// Filtering array of quizes, to get the right one
const filteredData = quizzes.filter(
  (item) => item.title.toLowerCase() === slug,
);
// The actual quiz array
const quiz = filteredData[0].questions;

// Check if user registered
const userName = getCookie();
if (!userName) {
  locateTo("../index.html");
}
// if registered than show logout button and add the logic
addLogoutBtn(switchBtn, userName);
logout(userName);

// Adding Main title with the name of the quiz
quizTitle.textContent = `${titleToUpperCase(slug)}`;

// Iterating the quiz array to populate the data
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

// Function logic for the quiz form
const handleForm = (e) => {
  e.preventDefault();
  let totalScore = 0;
  // Iterating quiz array to compare the asnwers 
  quiz.forEach((question, index) => {
    // The actual user answer
    const value = quizForm.elements[`q${index + 1}`].value;
    // Getting specific feedback
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
  // Adding logic to show the right colour
  totalScore >= 3
    ? questionsWrapper.insertAdjacentHTML(
        "afterend",
        `<p class="quiz-total-score passColor"> Score ${totalScore} out of ${quiz.length}. PASS</p>`,
      )
    : questionsWrapper.insertAdjacentHTML(
        "afterend",
        `<p class="quiz-total-score"> Score ${totalScore} out of ${quiz.length}. FAIL </p>`,
      );
      // After submiting the form, button is disabled to prefent another submission
  submitFormBtn.disabled = true;
};

// Listening quiz from on the sumbit event
quizForm.addEventListener("submit", handleForm);
