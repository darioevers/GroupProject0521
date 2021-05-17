// Any code you will write for your website (in the future!) should go here
function fetchData() {
  // this is a GET req
  fetch("https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2>ToDos API response </h2>";
      for (var i = 0; i < data.length; i++) {
        answers = [];
        for (prop in data[i]) {
          // ...add an html radio button
          userCard +=
            "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            prop +
            '">' +
            prop +
            ": " +
            data[i].correct_answer +
            "</label>";
        }
      }
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(`So this is what happened ${err}`));
}
