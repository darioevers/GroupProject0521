import {startGame, registerUsername, startGameTwo, startQuiz, openAbout, openFAQ, openLeaderboard, openCloseMenu} from "./navigation.js";

const answerBox = document.querySelector(".answer");
const questionCard = document.querySelector(".question");
const nextQuestion = document.querySelector(".next-question");
const counterCard = document.querySelector(".counter");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerThree = document.querySelector(".answer-three");
const answerFour = document.querySelector(".answer-four");
const answerCard = document.querySelector(".answer-box");
const userPoints = document.querySelector(".user-points");
const feedback = document.querySelector(".feedback");
const reset = document.querySelector(".reset");

const easyQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=hard";
  let answersCard = ["answer-one", "answer-two", "answer-three", "answer-four"];

  
  let counter = 0 ;
function fecthEasyQuestions() {
  // backgroundStyleTwo = "white";
  counter++; 
  if (counter <= 15){
   fetch(easyQuestions)
    .then((response) => response.json())
    .then((data)=>{
      // Assingning the correct and incorrect asnwers to variables
      let question = data.results[0].question;
      window.questionTwo = question;
      let correctAnswer ="," + data.results[0].correct_answer;
      let allAnswers = data.results[0].incorrect_answers + correctAnswer;
      //randomizing the answers 
     let arrAllAnswers = allAnswers.split(",");
     console.log(arrAllAnswers);

     let firstAnswer = arrAllAnswers[Math.floor(Math.random()*4)];
     arrAllAnswers.splice(arrAllAnswers.indexOf(firstAnswer), 1);

     let secondAnswer = arrAllAnswers[Math.floor(Math.random()*3)];
     arrAllAnswers.splice(arrAllAnswers.indexOf(secondAnswer), 1);

     let thirdAnswer = arrAllAnswers[Math.floor(Math.random()*2)];
     arrAllAnswers.splice(arrAllAnswers.indexOf(thirdAnswer), 1);
    
     console.log(arrAllAnswers);
      //attaching the question variables into HTML
      questionCard.innerHTML = `${question}`;
      counterCard.innerHTML = `${counter} `;
      // answerOne.innerHTML = `${firstAnswer}`;
      // answerTwo.innerHTML = `${secondAnswer}`;
      // answerThree.innerHTML = `${thirdAnswer}`;
      // answerFour.innerHTML = `${arrAllAnswers}`;
          answerCard.innerHTML = `
          <div class="answer-one">
          <p class="answer">${firstAnswer}</p>
        </div>
        <div class="answer-two">
          <p class="answer">${secondAnswer}</p>
        </div>
        <div class="answer-three">
          <p class="answer">${thirdAnswer}</p>
        </div>
        <div class="answer-four">
          <p class="answer">${arrAllAnswers}</p>
        </div>`;

      let rightAnswer = data.results[0].correct_answer;
      window.rightAnswerTwo = rightAnswer;
      console.log(rightAnswerTwo);
      })
      .catch((err)=> console.log(err));
      
    } else{
      quizContainer.style.display = "none";
      leaderboardContainer.style.diplay = "block";
    }
  }
nextQuestion.addEventListener("click", fecthEasyQuestions);

let points = 0;
function calculating (e){
  let clicked = e.target.textContent;
  console.log(e.target.textContent)
  if (clicked == rightAnswerTwo){
    e.target.style.backgroundColor= "green";
    setTimeout(() => {
     points += 10;
      fecthEasyQuestions();
    }, 500);
    //apply else if with conditional only for the e.target to be styled with backgroundColor
  } else {
    e.target.style.backgroundColor = "red";
    setTimeout(() => {
      points -= 10;
      fecthEasyQuestions();
    }, 500);
    //the else statement needs to be there in case the user clicks on anything other then the questions box
    userPoints.innerHTML = `${points}/150`;
  }
  // e.target.style.backgroundColor= "white";
}
answerCard.addEventListener("click", calculating);

// DOM ELEMENT SELECTORS FOR NAVIGATIONS
const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".close-menu");
const navigation = document.querySelector("nav");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const loginContainer = document.querySelector(".login-container");
const mainMenuContainer = document.querySelector(".main-menu-container");
const quizContainer = document.querySelector(".quiz-container");
const startButton = document.querySelector("#startButton");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const username = document.querySelector(".username-field");
const mainContainer = document.querySelector(".main_container"); 
const welcomeMessage = document.querySelector(".welcome-message");
const userNav = document.querySelector(".username");
const start = document.querySelector(".start-quiz");
const homeButton = document.querySelector(".home-button");
const restart = document.querySelector(".reload");
const themeButton = document.querySelector(".theme-button");

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

//FUNCTION FOR THE THE LOGOUT ITEM ON THE MENU




export default fecthEasyQuestions;