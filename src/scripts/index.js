// DOM element selector
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const mainContainer = document.querySelector(".main-container");
const quizMainContainer = document.querySelector(".quiz-main-container");
const startBtn = document.querySelector(".login");
const questionCounter = document.querySelector(".question-counter");
const answerBox = document.querySelector(".answer-box");
const userName = document.querySelector("#userName");
const playerName = document.querySelector(".player-name");
const res = document.querySelector(".res");
// URL links for the questions
const easyQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple";
// Menu click functions
const menuClick = () => {
  hamburgerMenu.style.display = "none";
  mainContainer.style.display = "none";
  navigation.style.display = "block";
};
// Get user name function
function getUser() {
  name = userName.value;
  res.innerHTML = `Welcome ${name}!`;
  playerName.innerHTML = name;
}
// Event listeners
hamburgerMenu.addEventListener("click", menuClick);
closeMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "inherit";
  mainContainer.style.display = "flex";
  navigation.style.display = "none";
});
startBtn.addEventListener("click", () => {
  quizMainContainer.style.display = "flex";
  mainContainer.style.display = "none";
  getUser();
  fetchEasyData();
});
function fetchEasyData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      for (props in data) {
        let questNum = data[props].length / 20;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];
          console.log(data2);
          let answers = [];
          answers = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          question.innerHTML = `${data2["question"]}`;
          console.log(answers);
          answerBox.innerHTML = `<div class="answer-one">
            <p class="answer">${answers[0]}</p>
          </div>
          <div class="answer-two">
            <p class="answer">${answers[1]}</p>
          </div>
          <div class="answer-three">
            <p class="answer">${answers[2]}</p>
          </div>
          <div class="answer-four">
            <p class="answer">${answers[3]}</p>
          </div>`;
          console.log(answers);
        }
      }
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
