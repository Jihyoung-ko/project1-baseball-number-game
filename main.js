const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const strikeCount = document.querySelector("#strike-count");
const ballCount = document.querySelector("#ball-count");
const outCount = document.querySelector("#out-count");
const winGame = document.querySelector("#win-game");
const loseGame = document.querySelector("#lose-game");
const startAgainbtn = document.querySelector("#game-over input");


const isThreeDigits = (number) => {
  return number.length === 3;
}

const getAnswer = () => {
  let answer = [];
  while (answer.length < 3) {
    let randomNumber = Math.floor(Math.random() *10);
    answer = answer + randomNumber;
  }
  return answer;
}

const validAttempt = (attempts) => {
  return attempts >= 10;
}

const isCorrect = (number, answer) => {
  return number === answer;
}


const strikeNumber = (number, answer) => {
  let strike = 0;
  let arrNumber = number.split('');

  arrNumber.map((digit, i) => {
    if (digit === answer[i]) {
      strike++;
    }
  });
  console.log(strike);
  return strike;
  
}
 strikeNumber();



