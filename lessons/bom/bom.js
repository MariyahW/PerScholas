const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 10;
let guess;
let correct = null;

const game = document.querySelector(`game-new`);


setTimeout(() => {
  guess = Number(window.prompt(`Guess a number between ${min} and ${max}`));
}, 500);

setTimeout(() => {
  while (tries > 0) {
    backDrop(guess);
    isRight(guess);
    guess = Number(
      window.prompt(`Don't give up try again. You have ${tries} chances left.`)
    );

    if (tries === 0 && correct=== false) {
      window.alert(`Better luck next time!`);
    }
  }
}, 600);

function isRight(guess) {
  if (guess === null || guess === undefined) {
    tries = 0;
  }

  if (guess == NaN) {
    window.alert(`Please enter a valid number.`);
  } else if (guess < min || guess > max) {
    window.alert(`Guess a number between ${min} and ${max}`);
  } else {
    tries--;

    if (guess < card) {
      correct=false;
      window.alert(`Try again the number is higher.`);
    } else if (guess > card) {
      correct=false;
      window.alert(`Try again the number is lower.`);
    } else if(guess===card){
      window.alert(`
        Correct the number was ${card} congrats! It only took you ${
        10 - tries } tries.`);
      correct=true;
      tries = 0;
    }
  }
}

function backDrop(guess) {

  if (guess < card) {
    game.style.backgroundColor = `red`;
  } else if (guess > card) {
    game.style.backgroundColor = `yellow`;
  } else if (guess === card) {
    game.style.backgroundColor = `steelblue`;
  }
}
