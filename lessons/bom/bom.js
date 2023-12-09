const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 10;
let guess;

const game = document.querySelector(`game-new`);
const words= document.querySelector(`h1`);

setTimeout(() => {
  guess = Number(window.prompt(`Guess a number between ${min} and ${max}`));
}, 500);

setTimeout(() => {
  while (tries > 0) {
    backDrop(guess);
    isRight(guess);

  guess = Number(
    window.prompt(`Don't give up try again. You have ${tries} chances left.`));

  if (tries == 0 && guess != 2000) {
    words.innerHTML=`Better luck next time!`;
  }

   
  }
}, 600);

function isRight(guess) {
  if (guess === null || guess === undefined) {
    tries = 0;
  }

  if (guess == NaN) {
    words.innerHTML=`Please enter a valid number.`;
  } else if (guess < min || guess > max) {
    words.innerHTML=`Guess a number between ${min} and ${max}`;
  } else {
    tries--;

    if (guess < card) {
      words.innerHTML=`Try again the number is higher.`;
    } else if (guess > card) {
      words.innerHTML=`Try again the number is lower.`;
    } else {
      words.innerHTML=`
        Correct the number was ${card} congrats! It only took you ${
          10 - tries
        } tries.`
      ;
      guess = 2000;
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
