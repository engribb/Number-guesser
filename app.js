/*
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of guesses remaining
- notify the player of correct answer if loose
- let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesleft = 3;

// UI Elements
const game = document.querySelector('#game');
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessBtn = document.querySelector('#guess-Btn');
      guessInput = document.querySelector('#guess-Input');
      message = document.querySelector('.message');

 
//  Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
 game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
 })

// Event listener
// listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

// Validate
if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}

// check if won
if(guess === winningNum){
//  game over Won
  gameover(true, `${winningNum} is correct, YOU WIN!`);
} else {
  // Wrong number
  guessesleft -= 1;

  if(guessesleft === 0){
    // Game over - lost
   gameover(false, `Game over, YOU LOST. the correct number was ${winningNum}`, 'red'); 
  } else {
    // Game continues - answer wrong

// change border color
guessInput.style.bordercolor = 'red';

// Tell user its the wrong nmber
    setMessage(`${guess} is not correct, ${guessesleft} guesses left`,'red');
  }
}
});

// Game over
function gameover(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';


   // disable input
   guessInput.disabled = true;
   // change border color
   guessInput.style.bordercolor = color;
  //  set text color
   message.style.color = color;
   // set winning message
   setMessage(msg);

  // Play again
  guessBtn.value = 'play Again';
  guessBtn.className += 'play-again';
}

// Get winning Num
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
