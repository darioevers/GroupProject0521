import fecthEasyQuestions from "./index.js";
// ============== DOM SELECTORS ==============

//Side menu selectors
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const navigation = document.querySelector("nav");
const restart = document.querySelector(".reload");

//welcome page selectors
const username = document.querySelector(".username-field");
const mainMenuContainer = document.querySelector(".main-menu-container");
const welcomeMessage = document.querySelector(".welcome-message");
const userNav = document.querySelector(".username");
const loginContainer = document.querySelector(".login-container");
const play = document.querySelector(".login-button");

//Main page selectors
const homeButton = document.querySelector(".home-button");
const quizContainer = document.querySelector(".quiz-container");
const start = document.querySelector(".start-quiz");
const openAboutButton = document.querySelector(".open-about");
const openFAQButton = document.querySelector(".open-faq");
const openLeaderboardButton = document.querySelector(".open-leaderboard");
const faqContainer = document.querySelector(".faq-container");
const aboutContainer = document.querySelector(".about-container");
const leaderboardContainer = document.querySelector(".leaderboard-container");

// ============== Navigation functions for the side menu ==============

//Fucntion to display and hide the side menu
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


//Function for the logout list item on the side menu
function logOut (){
    setTimeout("location.reload(true);", 0.5);
  }
  restart.addEventListener("click", logOut);
  

    //Event listeners for the side menu
//Event listener on the humburger menu div
hamburgerMenuIcon.addEventListener("click", openCloseMenu);


// ============== Navigation functions for the welcome page ==============

//registering the user name
let user = "";
function registerUsername(e) {
  console.dir(e.target.value);
  user = e.target.value;
  console.log(user);
}

//function to hide the welcome page and display the main page upon clicking the button "Play"
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

//function to hide the welcome page and display the main page upon pressing the key "Enter"
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

    //Event listeners for the welcome page
  
//event listener for the play button 
play.addEventListener("click", startGame);
//event listeners for the text input  
username.addEventListener("keypress", startGameTwo);
username.addEventListener("keyup", registerUsername);

// ============== Navigation functions for the main page ==============

//function to initiate the quiz
const startQuiz = () => {
    homeButton.style.display = "block";
    mainMenuContainer.style.display = "none";
    quizContainer.style.display = "block";
    fecthEasyQuestions();
  };

  //function to display the about page
const openAbout = () => {
    homeButton.style.display = "block";
    mainMenuContainer.style.display = "none";
    aboutContainer.style.display = "block";
  };

//function to display the FAQ page
const openFAQ = () => {
    homeButton.style.display = "block";
    mainMenuContainer.style.display = "none";
    faqContainer.style.display = "block";
  };

//function to display the leaderboard page
const openLeaderboard = () => {
    homeButton.style.display = "block";
    mainMenuContainer.style.display = "none";
    leaderboardContainer.style.display = "block";
  };

    //Even Listeners for the main page

//event listener for the quiz "start" button
start.addEventListener("click", startQuiz);
//event listener for the about "click" button
openAboutButton.addEventListener("click", openAbout);
//event listener for the FAQ "click" button 
openFAQButton.addEventListener("click", openFAQ);
//event listener for the leaderboard "click" button
openLeaderboardButton.addEventListener("click", openLeaderboard);

  export { startGame, registerUsername, startGameTwo, startQuiz, openAbout, openFAQ, openLeaderboard, openCloseMenu};