const answerBox = document.querySelector(".answer");
const question = document.querySelector(".question-box");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerTree = document.querySelector(".answer-three");
const answerfour = document.querySelector(".answer-four");
// question.innerHTML = questionVar;
//       answerOne.innerHTML=answer0;
//       answerTwo.innerHTML=answer1;
//       answerTree.innerHTML=answer2;
//       answerfour,innerHTML=answer3;
function fetchEasyData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      let userCard1 = "<h2>The easy Level </h2>";
      let answers;
      for (props in data) {
        let questNum = data[props].length / 4;
        for (let i = 0; i < questNum; i++) {
          let data2 = data[props][i];
          let answersArr = [];
          answersArr = data2["incorrect_answers"]
            .concat(data2["correct_answer"])
            .sort();
          console.log(answersArr);
          question.innerHTML += `<li> <div>${data[props][i]["question"]}</h3></div> 
          </li>`;
          for (let j = 0; j < answersArr.length; j++) {
            answerBox.innerHTML += `<h4>* ${answersArr[j]}   <input type='radio' name='question' value= "${answersArr[j]} " ></input></h4> <br>`;
          }
        }
      }
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
