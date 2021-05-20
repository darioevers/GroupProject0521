// DOM ELEMENT SELECTORS

const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");

const answer = document.querySelector(".answer");
const loginContainer = document.querySelector(".login-container");
const mainMenuContainer = document.querySelector(".main-menu-container");
const quizContainer = document.querySelector(".quiz-container");
const aboutContainer = document.querySelector(".about-container");
const faqContainer = document.querySelector(".faq-container");
const leaderboardContainer = document.querySelector(".leaderboard-container");
const startButton = document.querySelector("#startButton");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const username = document.querySelector(".username-field");
const play = document.querySelector(".login-button");

const openAboutButton = document.querySelector(".open-about");
const openFAQButton = document.querySelector(".open-faq");
const openLeaderboardButton = document.querySelector(".open-leaderboard");
const mainContainer = document.querySelector(".main_container"); // IS THIS THE SAME AS LINE 49?
const welcomeMessage = document.querySelector(".welcome-message");
const userNav = document.querySelector(".username");
const start = document.querySelector(".start-quiz");
const homeButton = document.querySelector(".home-button");
const themeButton = document.querySelector(".theme-button");

const easyQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple";

const answerBox = document.querySelector(".answer-box");
const question = document.querySelector(".question");
const questionBox = document.querySelector(".question-box");
const nextQuestion = document.querySelector(".next-question");
const counter = document.querySelector(".counter");
const aboutButton = document.querySelector(".about-button"); // index.html line 42
const faqButton = document.querySelector(".faq-button"); // index.html line 47
const resButton = document.querySelector(".res-button"); // index.html line 52
const userPoints = document.querySelector(".user-points");

//FUNCTION FOR OPENING AND CLOSING THE SIDE MENU
let close = true;
const openCloseMenu = () => {
  if (close) {
    hamburgerMenuIcon.classList.toggle("open");
    navigation.style.display = "block";
  } else {
    hamburgerMenuIcon.classList.toggle("open");
    navigation.style.display = "none";
  }
  close = !close;
};
hamburgerMenuIcon.addEventListener("click", openCloseMenu);

//FUNCTION FOR STORING USERNAME
let user = "";
function registerUsername(e) {
  console.dir(e.target.value);
  user = e.target.value;
  console.log(user);
}
username.addEventListener("keyup", registerUsername);

let correctAnswer;

function fetchEasyData() {
  // this is a GET req
  fetch(easyQuestions)
    .then((res) => res.json())
    .then((data) => {
      for (let props in data) {
        let questNum = data[props].length;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];

          let answers = [];
          answers = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          correctAnswer = data2["correct_answer"];
          console.log(data2["correct_answer"]);

          console.log(data2["correct_answer"]);
          console.log(data2["incorrect_answers"]);

          question.innerHTML = `${data2["question"]}`;
          answerBox.innerHTML = `
          <div class="answer-one">
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
        }
      }
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}

//FUNCTION FOR DIRECTING GAMER FOR THE WELCOME PAGE
const startGame = () => {
  // console.log(user.lenght);
  if (user.length < 1) {
    username.setAttribute("placeholder", "Type your name here :)");
  } else {
    mainMenuContainer.style.display = "block";
    welcomeMessage.innerHTML = `Welcome, ${user}!`;
    userNav.innerHTML = `${user}`;
    loginContainer.style.display = "none";
  }
};
play.addEventListener("click", startGame);

//FUNCTION FOR STARTING THE QUIZ
const startQuiz = () => {
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  quizContainer.style.display = "block";
  fetchEasyData();
};

start.addEventListener("click", startQuiz);

// Added Event Listener for quiz button from the Navigation bar

const quizNavButton = document.querySelector(".quiz-start"); // Added class quiz-start in index.html/ line 32
const hallOfFame = document.querySelector(".hallof-fame"); // added hallof-fame class in index.html/ line 37

function goHome() {
  quizContainer.style.display = "none";
  mainMenuContainer.style.display = "block";
}
start.addEventListener("click", startQuiz);

// CORNER BUTTONS
// LIGHT DARK MODE
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};
themeButton.addEventListener("click", toggleTheme);

// function goHome() {
//   mainMenuContainer.style.display = "block";
//   quizContainer.style.display = "none";
//   aboutContainer.style.display = "none";
//   leaderboardContainer.style.display = "none";
//   faqContainer.style.display = "none";
//   loginContainer.style.display = "none";
// }
homeButton.addEventListener("click", goHome);
// window.addEventListener(
//   "load",
//   () => (quizMainContainer.style.display = "none")
// );

// startButton.addEventListener("click", () => {
//   mainContainer.style.display = "none";
//   quizMainContainer.style.display = "inherit";
// });

// const menuClick = () => {
//   hamburgerMenu.style.display = "none";
//   navigation.style.display = "inherit";
// };

// hamburgerMenu.addEventListener("click", menuClick);
// closeMenu.addEventListener("click", () => {
//   hamburgerMenu.style.display = "inherit";
//   navigation.style.display = "none";
// });

answerBox.addEventListener("click", function (e) {
  if (e.target.textContent == correctAnswer) {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
    nextQuestion.addEventListener("click", () => {
      fetchEasyData();
      let value = counter.textContent;
      console.log(value);
      counter.textContent = parseInt(value) + 1;
      let points = userPoints.textContent;
      console.log(points);
      userPoints.textContent = parseInt(points) + 10;
    });
    // e.target.classList.add("correctanswer");
    // console.log(e.target.textContent);
    // console.log("You're Good");
  } else if (e.target.textContent != correctAnswer) {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
    // e.target.classList.add("wronganswer");
    // console.log("Wrong Answer");
  }
});

// MAIN MENU BUTTONS
// ABOUT

// MAIN MENU BUTTONS
// ABOUT
const openAbout = () => {
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  aboutContainer.style.display = "block";
};
openAboutButton.addEventListener("click", openAbout);

// FAQ
const openFAQ = () => {
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  faqContainer.style.display = "block";
};
openFAQButton.addEventListener("click", openFAQ);

// LEADERBOARD
const openLeaderboard = () => {
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  leaderboardContainer.style.display = "block";
};

const ourLink = "https://darioevers.github.io/GroupProject0521/";
quizNavButton.addEventListener("click", startQuiz); // Event Listener QUIZ from the Side Menu
openLeaderboardButton.addEventListener("click", openLeaderboard);
hallOfFame.addEventListener("click", openLeaderboard); // Event listener for hall of fame button from Menu
aboutButton.addEventListener("click", openAbout);
faqButton.addEventListener("click", openFAQ);
resButton.addEventListener("click", () => ourLink);
// OR
// resButton.addEventListener("click", window.reload());
openLeaderboardButton.addEventListener("click", openLeaderboard);

// Import data from data.js

import { data } from "./data.js";

let parsedData = JSON.parse(data);
const people = document.querySelector(".people");
// console.log(parsedData);
parsedData.forEach((obj) => {
  let { firstName, secondName, score, stars } = obj;
  let card = `
  <div class="person">
  <span class="person-name">${firstName} ${secondName} has ${score}! </span></br>
  <span class="message">Verry Good played ${firstName}! You received ${stars}</span>
  </div>
    `;
  people.innerHTML += card;
});
// type="module" I think we need to add this in script on index.html
