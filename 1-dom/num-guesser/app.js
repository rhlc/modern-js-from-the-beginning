// game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// debug
console.log(`rand num: ${winningNum}`);

// ui elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  // validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, 'red');
  }
  // check if won
  if (guess === winningNum) {
    // won
    gameOver(true, `${winningNum} is correct, you WIN`);
  } else {
    // reduce guess
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // game over - lost
      gameOver(false, `game over, you LOST. {$winningNum} was correct num.`);
      // set message
      setMessage(`game over, you LOST, correct num was ${winningNum}`, 'red');
    } else {
      // continue
      guessInput.style.borderColor = 'red';
      // clear input
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

// game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set message
  setMessage(msg);

  // play again
  guessBtn.value = 'Again?';
  guessBtn.className += 'play-again';
}
// get winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
