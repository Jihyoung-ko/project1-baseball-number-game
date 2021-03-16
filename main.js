const getPlayerNumbers = () => {
  const playerNumber = document.querySelectorAll(".guess-number"); 
  let arrPlayerNumbers = [];

  playerNumber.forEach(element => {
  arrPlayerNumbers.push(element.value);
  });

  console.log(arrPlayerNumbers);
  return arrPlayerNumbers;
}

const getAnswer = () => { 
  let answer = [];
  while (answer.length < 3) {
    let randomNumber = Math.floor(Math.random() *10);
    answer = answer + randomNumber;
  }
  console.log(answer);
  return answer;
}
getAnswer();

const guessButton = document.querySelector('.guess-button');

guessButton.addEventListener('click', function(){
  getPlayerNumbers();
});
