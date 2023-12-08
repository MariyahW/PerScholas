const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);
// const worker = new Worker(`/worker.js`);
let tries = 10;
let guess;
let correct = false;

const game = document.querySelector(`game-new`);
const words = document.getElementsByTagName(`h1`);

setTimeout(() => {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
}, 2000);

setTimeout(() => {
  while (tries > 0) {
    isRight(guess);

    guess = window.prompt(
      `Don't give up try again. You have ${tries} chances left.`
    );
  }
  if (tries == 0 && correct == false) {
    window.alert(`Better luck next time!`);
  }
}, 5000);

function isRight(guess) {
  if (guess === null || guess === undefined) {
    tries = 0;
  }
  guess = Number(guess);
  if (guess === NaN) {
    window.alert(`Please enter a valid number.`);
  } else if (guess < min || guess > max) {
    alert(`Guess a number between ${min} and ${max}`);
  } else {
    tries--;
    backDrop(guess);

    if (guess < card) {
      console.log(card);
      alert(`Try again the number is higher.`);
    } else if (guess > card) {
      alert(`Try again the number is lower.`);
    } else {
      alert(
        `Correct the number was ${card} congrats! It only took you ${
          10 - tries
        } tries.`
      );
      correct = true;
      tries = 0;
    }
  }
}

function backDrop(guess) {
  debugger
  if (guess < card) {
    game.style.backgroundColor = `red`;
  } else if (guess > card) {
    game.style.backgroundColor = `yellow`;
  } else if (guess === card) {
    game.style.backgroundColor = `steelblue`;
  }
}
