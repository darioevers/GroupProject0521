function fetchData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard = "<h2>The question </h2>";
      for (props in data) {
        for (let i = 0; i < data[props].length; i++) {
          console.log(data[props][i]);
          let {
            category,
            type,
            difficulty,
            question,
            correct_answer,
            incorrect_answers,
          } = todo;
          userCard += `
          <h2>${Object.keys(data[props][i])}</h2>
                    <li><span><h2>${Object.values(data[props][i])}</h2></span>
                    </li>
                   
                    `;
        }
      }
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
