const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 10;
let guess;


const game = document.querySelector(`game-new`);



  setTimeout(() => {
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
  }, 2000);

setTimeout(()=>{
  while (tries>0) {
 isRight(guess);
  guess=window.prompt(`Don't give up try again. You have ${tries} chances left.`);
}
if(tries==0&&guess!=2000){
    window.alert(`Better luck next time!`);
}


function isRight(guess){
    if (guess === null || guess === undefined) {
        tries=0;
      }
      guess = Number(guess);
      if (guess == NaN) {
        window.alert(`Please enter a valid number.`);
        
      } else if (guess < min || guess > max) {
        window.alert(`Guess a number between ${min} and ${max}`);
        
      } else {
        tries--;
    
        if (guess < card) {
          window.alert(`Try again the number is higher.`);
          
        } else if (guess > card) {
          window.alert(`Try again the number is lower.`);
          
        } else {
          window.alert(
            `Correct the number was ${card} congrats! It only took you ${10-tries} tries.`
          );
           guess=2000;
          tries=0;
        }
      }
}
},5000);

function backDrop(guess,card,game){
  
  if (guess < card) {
    game.style.backgroundColor=`red`;
 
    
  } else if (guess > card) {
    game.style.backgroundColor=`yellow`;
    
  } else if(guess === card) {
   
      game.style.backgroundColor=`steelblue`;
  }
}