const min = 1;
const max = 1000;
const card = Math.floor(Math.random() * max);

let tries = 10;
let guess;
let running = true;



 
    function isRight(guess){
        if (guess === null || guess === undefined) {
            running = false;
            return running;
          }
          guess = Number(guess);
          if (guess == NaN) {
            console.log(`Please enter a valid number.`);
            return running;
          } else if (guess < min || guess > max) {
            console.log(`Guess a number between ${min} and ${max}`);
            return running;
          } else {
            tries--;
        
            if (guess < card) {
              console.log(`Try again the number is higher.`);
              return running;
            } else if (guess > card) {
              console.log(`Try again the number is lower.`);
              return running;
            } else {
              console.log(
                `Correct the number was ${card} congrats! It only took you ${tries} tries.`
              );
              running = false;
              return running;
            }
          }
    }

//  }
 while(tries>0){
    console.log(running);
 for(let count=10;count<1000;count++){
    count*=3; 
    console.log(count);
    running=isRight(count);
    
 }
}
