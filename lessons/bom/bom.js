const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 0;
let guess;
let running = true;

const game = document.querySelector(`game-new`);
let row = document.getElementsByTagName(`tr`);

while (running) {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);

  if (guess === null || guess === undefined) {
    running = false;
  }
  guess = Number(guess);
  if (guess == NaN) {
    window.alert(`Please enter a valid number.`);
  } else if (guess < min || guess > max) {
    window.alert(`Guess a number between ${min} and ${max}`);
  } else {
    tries++;

    if (guess < card) {
      window.alert(`Try again the number is higher.`);
    } else if (guess > card) {
      window.alert(`Try again the number is lower.`);
    } else {
      window.alert(
        `Correct the number was ${card} congrats! It only took you ${tries} tries.`
      );
      running = false;
    }
  }
}
