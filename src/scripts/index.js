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

// asdasdasasdsadasdsadas

// DOM element selector
const hamburgerMenu = document.querySelector(".hamburger-menu");
// console.log(hamburgerMenu);
const closeMenu = document.querySelector(".close-menu");
// console.log(closeMenu);
const navigation = document.querySelector("nav");
// const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const mainContainer = document.querySelector(".main_container");
const quizMainContainer = document.querySelector(".quiz-main-container");
const startButton = document.querySelector("#startButton");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
console.log(hamburgerMenuIcon);


const easyQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple";
const mediumQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple";
const hardQuestions =
  "https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple";

// const menuClick = () => {
//   hamburgerMenu.style.display = "none";
//   navigation.style.display = "inherit";
// };

// hamburgerMenu.addEventListener("click", menuClick);
// closeMenu.addEventListener("click", () => {
//   hamburgerMenu.style.display = "inherit";
//   navigation.style.display = "none";
// });


//Function for the opening and closing the side menu
let close = true;
 const openCloseMenu = ()=>{
   if (close) {
    hamburgerMenuIcon.classList.toggle("open");
    navigation.style.display= "block";
    // navigation.classList.toggle("active");
   } else{
    hamburgerMenuIcon.classList.toggle("open");
     navigation.style.display="none";
    //  navigation.classList.toggle("active");
   }
   close = !close; 
 }
hamburgerMenuIcon.addEventListener("click", openCloseMenu);

// window.addEventListener(
//   "load",
//   () => (quizMainContainer.style.display = "none")
// );

// startButton.addEventListener("click", () => {
//   mainContainer.style.display = "none";
//   quizMainContainer.style.display = "inherit";
// });
