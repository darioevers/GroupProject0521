const answerBox=document.querySelector('.answer')
const question=document.querySelector('.question')

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
