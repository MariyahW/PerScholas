//Part 1
let initialPlants = 20;
const PI = 3.1415;

// Predict the plant growth after a specific number of weeks.
function plantGrowth(initialPlants, numWeeks) {
  return initialPlants * 2 ** numWeeks;
}

function plantDecide(numWeeks, gardenRadius) {
  const gardenSize = PI * gardenRadius * gardenRadius;
  const maxCapacity = gardenSize / 0.8;
  numPlants = plantGrowth(initialPlants,numWeeks);
  //Pruned
  
  try{
  if (numPlants > (maxCapacity * 0.8)&& numPlants<=maxCapacity) {
    console.log(
      `Please prune the plants, it has been ${numWeeks} and the plants have consumed over 80% of the available area.`
    );
  }
  //Monitored
  else if(maxCapacity * (0.5) <=numPlants && numPlants < (maxCapacity * 0.8)){
    console.log(
        `Please monitor the plants. There are ${numPlants} and they have adequate space to grow.`);
  }
  //Planted
  else if(numPlants>0 && numPlants<maxCapacity){
    console.log(`Please plant more plants as there are only ${numPlants} and they take up less than 50% of the area.`)
  }
  else{
    throw `Error - Garden overgrown.`
  }
}catch(error){
     console.log(error);
}

}
//Part2
function spaceNeeded(numPlants){
    return(numPlants*.8);
}
function gardenRadius(area){
const radiusSq = (area/PI);
return(Math.sqrt(radiusSq));
}

// {
//     initialPlants=100;
//     let numWeeks = 10;
//     let numberOFPlants=plantGrowth(initialPlants, numWeeks);
//     console.log(`${spaceNeeded(numberOFPlants)} square meters are needed to house ${numberOFPlants} plants.`);
//     console.log(`The radius of the garden needed is ${gardenRadius(spaceNeeded(numberOFPlants))} square meters.`);

// }

//Part3
{
initialPlants=100;
console.log(plantDecide(2,5));

}