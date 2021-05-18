function fetchEasyData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard1 = "<h2>The question </h2>";
      for (props in data) {
        for (let i = 0; i < data[props].length; i++) {
          //console.log(data[props][i]);
          let data2 = data[props][i];
          for (props2 in data2) {
            console.log(`${props2} : ${data2[props2]}`);
            //console.log(data2["correct_answer"]);
          }
          userCard1 += `<div><h2>${data2["difficulty"]}</h2></div><li> <div>${data2["question"]}</div> <br>
          <div>${data2["incorrect_answers"]},${data2["correct_answer"]}</div>    
          </li>`;
        }
      }
      document.querySelector(".result").innerHTML = userCard1;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
// <input type='radio'value= "${data2["incorrect_answers"]}">
function fetchMediData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard2 = "<h2>The question </h2>";
      for (props in data) {
        for (let i = 0; i < data[props].length; i++) {
          //console.log(data[props][i]);
          let data2 = data[props][i];
          for (props2 in data2) {
            console.log(`${props2} : ${data2[props2]}`);
            //console.log(data2["correct_answer"]);
          }
          userCard2 += `<li><h2><div>${data2["difficulty"]}</h2></div> <br> <div>${data2["question"]}</div> <br>
            <div>${data2["incorrect_answers"]},${data2["correct_answer"]}</div>    
            </li>`;
        }
      }
      document.querySelector(".result").innerHTML = userCard2;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}

function fetchDifiData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard3 = "<h2>The question </h2>";
      for (props in data) {
        for (let i = 0; i < data[props].length; i++) {
          //console.log(data[props][i]);
          let data2 = data[props][i];
          for (props2 in data2) {
            console.log(`${props2} : ${data2[props2]}`);
            //console.log(data2["correct_answer"]);
          }
          userCard3 += `<li><h2><div>${data2["difficulty"]}</h2></div> <br> <div>${data2["question"]}</div> <br>
              <div>${data2["incorrect_answers"]},${data2["correct_answer"]}</div>    
              </li>`;
        }
      }
      document.querySelector(".result").innerHTML = userCard3;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
