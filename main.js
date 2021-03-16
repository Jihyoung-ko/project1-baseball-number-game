
const playerNumbers = document.querySelectorAll(".guess-number"); 
const answerNumber = [
  Math.floor(Math.random() *10).toString(),
  Math.floor(Math.random() *10).toString(),
  Math.floor(Math.random() *10).toString()
]

console.log(answerNumber);

const getPlayerNumbers = () => {
  let arrPlayerNumbers = [];

  playerNumbers.forEach(element => {
    arrPlayerNumbers.push(element.value);
  });

  return arrPlayerNumbers;
}

const guessButton = document.querySelector('.guess-button');

guessButton.addEventListener('click', function(){

  getPlayerNumbers();
  countStrike();


});

const countStrike = () => {
  let i = 0;
  let j = 0;
  let strike = 0;
  let ball = 0;
  let out = 3;

  while (i < 3) {
    const gNumber = answerNumber[i];
    while (j < 3) {
      const pNumber = getPlayerNumbers()[j];
      if(i === j && gNumber === pNumber) {
        strike++;
      }else if(i !== j && gNumber === pNumber){
        ball++;
      }
      j = j + 1;
    } 
    j = 0;
    i = i + 1;
  }
  out = out - strike - ball;

  document.getElementById('strike-count').innerHTML = strike;
  document.getElementById("ball-count").innerHTML = ball;
  document.getElementById("out-count").innerHTML = out;
}


