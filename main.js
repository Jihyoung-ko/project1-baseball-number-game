let attempts = 9;

const answerNumber = () => {

  let randomNumbers = [];
  while(randomNumbers.length < 3){
    let randomNumber = Math.floor(Math.random() *10).toString();
    if(!randomNumbers.includes(randomNumber)){
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

const answer = answerNumber();

console.log(answer);

const getPlayerNumbers = () => {
  const playerNumbers = document.querySelectorAll(".guess-number"); 
  let arrPlayerNumbers = [];

  playerNumbers.forEach(element => {
    arrPlayerNumbers.push(element.value);
  });

  return arrPlayerNumbers;
}
 
const actionFunc = function(){

  if(attempts < 1){
    console.log("YOU LOST :(");
    document.getElementById('game-container').classList.add('dissapear');
    document.getElementById('lose-game').classList.remove('dissapear');
  }
  
  getPlayerNumbers();
  countHint();

  const playerNumbers = document.querySelectorAll(".guess-number"); 
  for(let playerNumber of playerNumbers){
    if(parseInt(playerNumber.value) < 0 || parseInt(playerNumber.value) > 9) {
      console.log(playerNumber.value);
      alert("Please enter the number between 0 and 9");
    }
  }
  if(JSON.stringify(answer) === JSON.stringify(getPlayerNumbers())) {
    document.getElementById('game-container').classList.add('dissapear');
    document.getElementById('win-game').classList.remove('dissapear');
  }else {

    for(let playerNumber of playerNumbers) {
    playerNumber.classList.add("disable");
    playerNumber.classList.remove("guess-number");
    }
    document.querySelector('.guess-button').disabled = true;
    document.querySelector('.guess-button').classList.remove("guess-button");
    document.getElementById('strike-count').removeAttribute('id');
    document.getElementById("ball-count").removeAttribute('id');
    document.getElementById("out-count").removeAttribute('id');

    const newTry = document.createElement('div');

    newTry.classList.add('guess-input');
    newTry.innerHTML = `<input type="number" class="guess-number number-box" placeholder="" min="0" max="9">
    <input type="number" class="guess-number number-box" placeholder="" min="0" max="9">
    <input type="number" class="guess-number number-box" placeholder="" min="0" max="9">

    <input type="submit" class="guess-button number-box" onclick="actionFunc()">
    <div id="guess-result">
      <div class="result" id="strike-result"><p id="strike-count">0</p></div>
      <div class="result" id="ball-result"><p id="ball-count">0</p></div>
      <div class="result" id="out-result"><p id="out-count">0</p></div>
    </div>`;

    document.getElementById('game-container').appendChild(newTry);

    attempts--;
    
  }
}

const guessButtons = document.getElementsByClassName('guess-button');
for(let guessButton of guessButtons){
  guessButton.addEventListener('click', actionFunc);
}

const countHint = () => {
  let i = 0;
  let j = 0;
  let strike = 0;
  let ball = 0;
  let out = 3;

  while (i < 3) {
    const gNumber = answer[i];
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


const startButtons = document.getElementsByClassName('start-again-button');

for(let startButton of startButtons){
  startButton.addEventListener('click', function(){
    document.location.reload();
  });
}

