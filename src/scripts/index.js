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

let points = 0;
const easyQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=hard";
  let answersCard = ["answer-one", "answer-two", "answer-three", "answer-four"];
  // let randomAnswer = answersCard[Math.floor(Math.random()*3)];
  // document.getElementsByClassName(randomAnswer).innerHTML = `${rightAnswer}`;
  let counter = 0 ;
function fecthEasyQuestions() {
//  document.querySelector(".correct").style.backgroundColor="white";
  counter++; 
  if (counter <= 15){
   fetch(easyQuestions)
    .then((response) => response.json())
    .then((data)=>{
      // Assingning the correct and incorrect asnwers to variables
      let question = data.results[0].question;
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
      answerOne.innerHTML = `${firstAnswer}`;
      answerTwo.innerHTML = `${secondAnswer}`;
      answerThree.innerHTML = `${thirdAnswer}`;
      answerFour.innerHTML = `${arrAllAnswers}`;

      console.log(data.results[0].correct_answer);
      //adding event listener and function for user feedback and point calc
      
      function calculating(e){
        console.log(e.target.textContent);
        
        if (e.target.textContent.includes(data.results[0].correct_answer)){
          answerCard.classList.toggle("correct");
          document.querySelector(".correct").style.backgroundColor="green";
          points+= 10;
        } else{
          answerCard.classList.toggle("wrong");
          document.querySelector(".correct").style.backgroundColor="red";
          points-= 10;
        }
        userPoints.innerHTML = `${points}/150`
        console.log(points);
     }
      answerCard.addEventListener("click", calculating);
     
      })
      .catch((err)=> console.log(err));
      
    } else{
      quizContainer.style.display = "none";
      leaderboardContainer.style.diplay = "block";
    }
  }
nextQuestion.addEventListener("click", fecthEasyQuestions);




// function fetchEasyData() {
//   // this is a GET req
//   fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
//     .then((response) => response.json())
//     .then((data) => {
//       let userCard1 = "<h2>The easy Level </h2>";
//       for (props in data) {
//         let questNum = data[props].length / 4;
//         for (let i = 0; i < questNum; i++) {
//           let data2 = data[props][i];
//           let answers = [];
//           answers = data2["incorrect_answers"]
//             .concat(data2["correct_answer"])
//             .sort();
//           userCard1 += `<li> <div>${data2["question"]}</h3></div> 
//           </li>`;
//           for (let i = 0; i < answers.length; i++) {
//             userCard1 += `<h4>* ${answers[i]}   <input type='radio' name='question' value= "${answers[i]} " ></input></h4> <br>`;
//             // // if answer is correct
//             // userAnswer = ` ${answers[i]}<input type='radio' name='question' value= "${answers[i]}" ></input>: checked`;
//             // if (userAnswer === data2["correct_answer"]) {
//             //   // color the answers green
//             //   userCard1.style.color = "lightgreen";
//             // }
//             // // if answer is wrong or blank
//             // else {
//             //   // color the answers red
//             //   userCard1.style.color = "red";
//             // }
//           }
//         }
//       }

//       question.innerHTML = userCard1;
//     })
//     .catch((err) => console.log(`So this is what happened ${err}`));
// }

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
const startButton = document.querySelector("#startButton");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const username = document.querySelector(".username-field");
const play = document.querySelector(".login-button");
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
  mainMenuContainer.style.display = "none";
  leaderboardContainer.style.display = "block";
};
openLeaderboardButton.addEventListener("click", openLeaderboard);

// window.addEventListener(
//   "load",
//   () => (quizMainContainer.style.display = "none")
// );
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