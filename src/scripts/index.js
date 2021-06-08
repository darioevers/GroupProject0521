
// ============== NAVIGATION FUNCTIONS FOR THE WELCOME PAGE ==============
// Main page selectors
const username = document.querySelector(".username-field");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const mainMenuContainer = document.querySelector(".main-menu-container");
const userNav = document.querySelector(".username");
const loginContainer = document.querySelector(".login-container");
const play = document.querySelector(".login-button");
const welcomeMessage = document.querySelector(".welcome-message");


// ============== Functions ==============

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
    loginContainer.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    mainMenuContainer.style.display = "block";
    welcomeMessage.innerHTML = `Welcome, ${user}!`;
    userNav.innerHTML = `${user}`;
  }
}; 


//function to hide the welcome page and display the main page upon pressing the key "Enter"
const startGameTwo = (e)=>{
    if (user == ""){
      username.setAttribute("placeholder", "Type your name here :)");
    } else if (event.key == "Enter"){
      loginContainer.style.display= "none";
      hamburgerMenuIcon.style.display = "block";
      mainMenuContainer.style.display= "block";
      welcomeMessage.innerHTML = `Welcome, ${user}!`;
      userNav.innerHTML = `${user}`;
    }
  }

// ============== Event listeners for the welcome page ==============
  
//event listener for the play button 
play.addEventListener("click", startGame);
//event listener for the text input  
username.addEventListener("keypress", startGameTwo);
username.addEventListener("keyup", registerUsername); 

// ============== NAVIGATION FUNCTIONS FOR THE MAIN PAGE ==============

//============== Main page selectors ==============
const homeButton = document.querySelector(".home-button");
const quizContainer = document.querySelector(".quiz-container");
const start = document.querySelector(".start-quiz");
const openAboutButton = document.querySelector(".open-about");
const openFAQButton = document.querySelector(".open-faq");
const openLeaderboardButton = document.querySelector(".open-leaderboard");
const faqContainer = document.querySelector(".faq-container");
const aboutContainer = document.querySelector(".about-container");
const leaderboardContainer = document.querySelector(".leaderboard-container");

//============== Functions ==============

//function to initiate the quiz
const startQuiz = () => {
  hamburgerMenuIcon.style.display = "block";
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  quizContainer.style.display = "block";
  // fecthEasyQuestions();
};

//function to display the about page
const openAbout = () => {
  hamburgerMenuIcon.style.display = "block";
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  aboutContainer.style.display = "block";
};

//function to display the FAQ page
const openFAQ = () => {
  hamburgerMenuIcon.style.display = "block";
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  faqContainer.style.display = "block";
};

//function to display the leaderboard page
const openLeaderboard = () => {
  hamburgerMenuIcon.style.display = "block";
  homeButton.style.display = "block";
  mainMenuContainer.style.display = "none";
  leaderboardContainer.style.display = "block";
};

// ============== Even Listeners for the main page ==============

//event listener for the quiz "start" button
start.addEventListener("click", startQuiz);
//event listener for the about "click" button
openAboutButton.addEventListener("click", openAbout);
//event listener for the FAQ "click" button 
openFAQButton.addEventListener("click", openFAQ);
//event listener for the leaderboard "click" button
openLeaderboardButton.addEventListener("click", openLeaderboard);

// ============== NAVIGATION FUNCTIONS FOR THE SIDE MENU ==============

// ============== Side menu selectors ==============
const navigation = document.querySelector("nav");
const restart = document.querySelector(".reload");
const about = document.querySelector(".about");
const hallOfFame = document.querySelector(".hallOfFame");
const faq = document.querySelector(".faq");
const quiz = document.querySelector(".quiz");

//============== Functions ==============

//Function to display and hide the side menu
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

//Function for the quiz list item on the side menu
 function openQuiz (){
    mainMenuContainer.style.display = "none";
    leaderboardContainer.style.display = "none";
    aboutContainer.style.display = "none";
    faqContainer.style.display = "none";
    quizContainer.style.display = "block";
    loginContainer.style.display = "none";
    openCloseMenu();
 }
//Function for the hall of fame list item on the side menu
function openHall (){
    mainMenuContainer.style.display = "none";
    leaderboardContainer.style.display = "block";
    aboutContainer.style.display = "none";
    faqContainer.style.display = "none";
    quizContainer.style.display = "none";
    loginContainer.style.display = "none";
    openCloseMenu();
 }
//Function for the about list item on the side menu
function openingAbout (){
    mainMenuContainer.style.display = "none";
    leaderboardContainer.style.display = "none";
    aboutContainer.style.display = "block";
    faqContainer.style.display = "none";
    quizContainer.style.display = "none";
    loginContainer.style.display = "none";
    openCloseMenu();
 }

 //Function for the FAQ list item on the side menu
 function openFaq (){
    mainMenuContainer.style.display = "none";
    leaderboardContainer.style.display = "none";
    aboutContainer.style.display = "none";
    faqContainer.style.display = "block";
    quizContainer.style.display = "none";
    loginContainer.style.display = "none";
    openCloseMenu();
 }

//Function for the logout list item on the side menu
function logOut (){
    setTimeout("location.reload(true);", 0.5);
  }
 
// ============== Event listeners for the side menu ==============
//Event listener on the humburger menu div
hamburgerMenuIcon.addEventListener("click", openCloseMenu);
//Event listener on the quiz item
quiz.addEventListener("click", openQuiz);
//Event listener on the about item
about.addEventListener("click", openingAbout);
//Event listener on the hall of fame item
hallOfFame.addEventListener("click", openHall);
//Event listener on the FAQ item
faq.addEventListener("click", openFaq);
//Event listener on the logout item
restart.addEventListener("click", logOut);

// ============== END OF NAVIGATION FUNCTIONS ==============

const easyQuestions =
  "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";
// const mediumQuestions =
//   "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";
// const hardQuestions =
//   "https://opentdb.com/api.php?amount=1&difficulty=hard";
//   let answersCard = ["answer-one", "answer-two", "answer-three", "answer-four"];

  
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
const nextQuestion = document.querySelector(".next-question");  
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
const answerCard = document.querySelector(".answer-box");
answerCard.addEventListener("click", calculating);


// LIGHT DARK MODE
const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};
const themeButton = document.querySelector(".theme-button");
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

// ADDITIONAL FUNCTIONS
// PRINT PAGE
const printPage = () => {
  window.print();
};
const printButton = document.querySelector(".printbutton");
printButton.addEventListener("click", printPage);

