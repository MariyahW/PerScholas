
function backDrop(guess,card,game){
  
        if (guess < card) {
          game.style.backgroundColor=`red`;
       
          
        } else if (guess > card) {
          game.style.backgroundColor=`yellow`;
          
        } else if(guess === card) {
         
            game.style.backgroundColor=`steelblue`;
        }
      }
