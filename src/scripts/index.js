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
      //adding event listener and function for user feedback and point calc
    //   function calculating(e) {
    //     console.log(e.target.textContent);

    //     if (e.target.textContent.includes(data.results[0].correct_answer)) {
    //       answerCard.classList.toggle("correct");
    //       answerCard.style.backgroundColor = "green";
    //       points += 10;
    //     } else {
    //       answerCard.classList.toggle("wrong");
    //       answerCard.style.backgroundColor = "red";
    //       points -= 10;
    //     }
    //     userPoints.innerHTML = `${points}/150`;
    //     console.log(points);
    //     document.querySelector(".score").innerHTML = `${points}/150`;
    //   }
    //   answerCard.addEventListener("click", calculating);
    // })
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
  } else {
    e.target.style.backgroundColor = "red";
    setTimeout(() => {
      points -= 10;
      fecthEasyQuestions();
    }, 500);
    userPoints.innerHTML = `${points}/150`;
  }
  // e.target.style.backgroundColor= "white";
}
answerCard.addEventListener("click", calculating);

// answerCard.style.backgroundColor = "white";
// function calculating(e) {
//   console.log(e.target.textContent);

//   if (e.target.textContent.includes(data.results[0].correct_answer)) {
//     answerCard.classList.toggle("correct");
//     answerCard.style.backgroundColor = "green";
//     points += 10;
//   } else {
//     answerCard.classList.toggle("wrong");
//     answerCard.style.backgroundColor = "red";
//     points -= 10;
//   }
//   userPoints.innerHTML = `${points}/150`;
//   console.log(points);
//   document.querySelector(".score").innerHTML = `${points}/150`;
// }
// answerCard.addEventListener("click", calculating);
// })
// .catch((err) => console.log(err));
// } else {
// quizContainer.style.display = "none";
// leaderboardContainer.style.diplay = "block";
// }
// }
// nextQuestion.addEventListener("click", fecthEasyQuestions);

// DOM ELEMENT SELECTORS FOR NAVIGATIONS
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
const mainContainer = document.querySelector(".main_container"); 
// IS THIS THE SAME AS LINE 49?
const welcomeMessage = document.querySelector(".welcome-message");
const userNav = document.querySelector(".username");
const start = document.querySelector(".start-quiz");
const homeButton = document.querySelector(".home-button");
const restart = document.querySelector(".reload");
const themeButton = document.querySelector(".theme-button");



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
  if (user.length < 1) {
    username.setAttribute("placeholder", "Type your name here :)");
  } else {
    mainMenuContainer.style.display = "block";
    welcomeMessage.innerHTML = `Welcome, ${user}!`;
    userNav.innerHTML = `${user}`;
    loginContainer.style.display = "none";
  }
}; 

const startGameTwo = (e)=>{
  if (user == ""){
    username.setAttribute("placeholder", "Type your name here :)");
  } else if (event.key == "Enter"){
    mainMenuContainer.style.display= "block";
    welcomeMessage.innerHTML = `Welcome, ${user}!`;
    userNav.innerHTML = `${user}`;
    loginContainer.style.display= "none";
  } 
}

play.addEventListener("click", startGame);
username.addEventListener("keypress", startGameTwo);

//FUNCTION FOR STARTING THE QUIZ
const startQuiz = () => {
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  quizContainer.style.display = "block";
  fecthEasyQuestions();
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

//FUNCTION FOR THE THE LOGOUT ITEM ON THE MENU
function logOut (){
  setTimeout("location.reload(true);", 0.5);
}
restart.addEventListener("click", logOut);

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

// window.addEventListener(
//   "load",
//   () => (quizMainContainer.style.display = "none")
// );
// window.addEventListener(
//   "
  
  
  ",
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


