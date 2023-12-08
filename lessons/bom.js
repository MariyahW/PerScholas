const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 10;
let guess;

const game = document.querySelector(`game-new`);

setTimeout(() => {
  guess = Number(window.prompt(`Guess a number between ${min} and ${max}`));
  if (guess === null || guess === undefined) {
    tries = 0;
  }
}, 2000);

setTimeout(() => {
  while (tries > 0) {
    guess = isRight(guess);
    // guess=window.prompt(`Don't give up try again. You have ${tries} chances left
  }
}, 3000);

function isRight(guess) {
  if (guess == NaN) {
    window.prompt(`Please enter a valid number between ${min} and ${max}.`);
  } else if (guess < min || guess > max) {
    window.prompt(`Guess a number between ${min} and ${max}.`);
  } else {
    console.log(tries);
    if (guess < card) {
      // setTimeout(() => {
      game.style.backgroundColor = `red`;
      tries--;

      setTimeout(() => {
        window.alert(`Try again the number is higher.`);
        guess = window.prompt(
          `Don't give up try again. You have ${tries} chances left.`
        );
        return guess;
      }, 500);
    } else if (guess > card) {
      game.style.backgroundColor = `yellow`;
      tries--;
      setTimeout(() => {
      window.alert(`Try again the number is lower.`);
      guess = window.prompt(
        `Don't give up try again. You have ${tries} chances left.`
      );
      return guess;
      }, 500);
    } else if (guess === card) {
        game.style.backgroundColor = `steelblue`;
        setTimeout(() => {
      window.alert(
        `Correct the number was ${card} congrats! It only took you ${
          10 - tries
        } tries.`
      );
      tries = 0;
    }, 500);
    }
  }
}
