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
// <<<<<<< HEAD
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

function myFunction1() {
  document.querySelector(".question1").style.display = "block";

  document.querySelector(".question2").style.display = "none";

  document.querySelector(".question3").style.display = "none";

  document.querySelector(".question4").style.display = "none";
  document.querySelector(".question5").style.display = "none";
}

function myFunction2() {
  document.querySelector(".question1").style.display = "none";

  document.querySelector(".question2").style.display = "block";

  document.querySelector(".question3").style.display = "none";

  document.querySelector(".question4").style.display = "none";
  document.querySelector(".question5").style.display = "none";
}

function myFunction3() {
  document.querySelector(".question1").style.display = "none";

  document.querySelector(".question2").style.display = "none";

  document.querySelector(".question3").style.display = "block";

  document.querySelector(".question4").style.display = "none";
  document.querySelector(".question5").style.display = "none";
}

function myFunction4() {
  document.querySelector(".question1").style.display = "none";

  document.querySelector(".question2").style.display = "none";

  document.querySelector(".question3").style.display = "none";

  document.querySelector(".question4").style.display = "block";
  document.querySelector(".question5").style.display = "none";
}
function myFunction5() {
  document.querySelector(".question1").style.display = "none";

  document.querySelector(".question2").style.display = "none";

  document.querySelector(".question3").style.display = "none";

  document.querySelector(".question4").style.display = "none";
  document.querySelector(".question5").style.display = "block";
}

function fetchEasyData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      for (props in data) {
        let questNum = data[props].length / 4;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];
          //console.log(data[props][1]["question"]);
          let answers = [];
          answers = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          question.innerHTML = `<div class="question1">${data[props][0]["question"]}</div><br>
          <div class="question2" style="display: none;">${data[props][1]["question"]}</div><br>
          <div class="question3" style="display: none;">${data[props][2]["question"]}</div><br>
          <div class="question4" style="display: none;">${data[props][3]["question"]}</div>`;
          // console.log(answers);
          for (let i = 0; i < answers.length; i++) {
            answerBox.innerHTML = `<div class="answer-one">
            <p class="answer">  <button>${answers[0]}     </button></p>
          </div>
          <div class="answer-two">
          <p class="answer"> <button>${answers[1]}    </button></p>
          </div>
          <div class="answer-three">
          <p class="answer"> <button>${answers[2]}     </button></p>
          </div>
          <div class="answer-four">
          <p class="answer"> <button>${answers[3]}     </button></p>
          </div>
            </div>
            `;
          }
          // Event Bubbling
          // const list = document.querySelectorAll(".answer-box p");
          // list.addEventListener("click", function (e) {
          //   //   console.log(e.target.className);
          //   if (e.target.className == "answer") {
          //     let li = e.target.parentElement;
          //     console.log(li);
          //     li.style.style.color = "lightgreen";
          //   }
          // });
          // console.log(data2["correct_answer"]);
          // if (
          //   document.querySelector("#answer:checked") ===
          //   data2["correct_answer"]
          // ) {
          //   question.
          // } else {
          //   question.style.color = "red";
          // }
        }
      }
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
  document.querySelector(".question-card-levl2").style.display = "none";
}

function fetchDifData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      for (props in data) {
        let questNum = data[props].length / 4;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];
          //console.log(data[props][1]["question"]);
          let answers = [];
          answers = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          question.innerHTML = `<div class="question1">${data[props][0]["question"]}</div>
          <div class="question2" style="display: none;">${data[props][1]["question"]}</div>
          <div class="question3" style="display: none;">${data[props][2]["question"]}</div>
          <div class="question4" style="display: none;">${data[props][3]["question"]}</div>
          <div class="question5" style="display: none;">${data[props][4]["question"]}</div>`;
          // console.log(answers);
          for (let i = 0; i < answers.length; i++) {
            answerBox.innerHTML = `<div class="answer-one">
            <p class="answer">  <button>${answers[0]}     </button></p>
          </div>
          <div class="answer-two">
          <p class="answer"> <button>${answers[1]}    </button></p>
          </div>
          <div class="answer-three">
          <p class="answer"> <button>${answers[2]}     </button></p>
          </div>
          <div class="answer-four">
          <p class="answer"> <button>${answers[3]}     </button></p>
          </div>
            </div>
            `;
          }
          // Event Bubbling
          // const list = document.querySelectorAll(".answer-box p");
          // list.addEventListener("click", function (e) {
          //   //   console.log(e.target.className);
          //   if (e.target.className == "answer") {
          //     let li = e.target.parentElement;
          //     console.log(li);
          //     li.style.style.color = "lightgreen";
          //   }
          // });
          // console.log(data2["correct_answer"]);
          // if (
          //   document.querySelector("#answer:checked") ===
          //   data2["correct_answer"]
          // ) {
          //   question.
          // } else {
          //   question.style.color = "red";
          // }
        }
      }
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}

function nextLevel() {
  fetchDifData();
}
