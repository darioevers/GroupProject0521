const answerBox = document.querySelector(".answer");
const question = document.querySelector(".question");

function fetchEasyData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      let userCard1 = "<h2>The easy Level </h2>";
      for (props in data) {
        let questNum = data[props].length / 4;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];
          let answers = [];
          answers = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          userCard1 += `<li> <div>${data2["question"]}</h3></div> 
          </li>`;
          for (let i = 0; i < answers.length; i++) {
            userCard1 += `<h4>* ${answers[i]}   <input type='radio' name='question' value= "${answers[i]} " ></input></h4> <br>`;
            // // if answer is correct
            // userAnswer = ` ${answers[i]}<input type='radio' name='question' value= "${answers[i]}" ></input>: checked`;
            // if (userAnswer === data2["correct_answer"]) {
            //   // color the answers green
            //   userCard1.style.color = "lightgreen";
            // }
            // // if answer is wrong or blank
            // else {
            //   // color the answers red
            //   userCard1.style.color = "red";
            // }
          }
        }
      }

      question.innerHTML = userCard1;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}

// DOM ELEMENT SELECTORS
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");
// const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const loginContainer = document.querySelector(".login-container");
const mainMenuContainer = document.querySelector(".main-menu-container");
const quizContainer = document.querySelector(".quiz-container");
const aboutContainer = document.querySelector(".about-container");
const faqContainer = document.querySelector(".faq-container");
const leaderboardContainer = document.querySelector(".leaderboard-container");
const finalContainer = document.querySelector(".final-container");
const startButton = document.querySelector("#startButton");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const username = document.querySelector(".username-field");
const play = document.querySelector(".login-button");
const printButton = document.querySelector(".printbutton");
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
  "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple";

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

//FUNCTION FOR DIRECTING GAMER FOR THE WELCOME PAGE
const startGame = () => {
  console.log(user.lenght);
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
};
start.addEventListener("click", startQuiz);

// CORNER BUTTONS
// LIGHT DARK MODE
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};
themeButton.addEventListener("click", toggleTheme);

function goHome() {
  mainMenuContainer.style.display = "block";
  quizContainer.style.display = "none";
  aboutContainer.style.display = "none";
  leaderboardContainer.style.display = "none";
  faqContainer.style.display = "none";
  loginContainer.style.display = "none";
}
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
  leaderboardContainer.style.display = "block";
  mainMenuContainer.style.display = "none";
  finalContainer.style.display = "none";
};
openLeaderboardButton.addEventListener("click", openLeaderboard);

// ADDITIONAL FUNCTIONS
// PRINT PAGE

const printPage = () => {
  window.print();
};
printButton.addEventListener("click", printPage);
