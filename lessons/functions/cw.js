//Part 1
function computeArea(width, height){
    return (`The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`)
}
let areaString= computeArea(5,10);
console.log(areaString);

//Part 2
const planetHasWater =function (planet) {return((planet.toLowerCase()===`earth`||planet.toLowerCase()===`mars`)?true:false);
}

console.log(`MARS`);
console.log(planetHasWater(`MARS`)); 
console.log(`Saturn`);
console.log(planetHasWater(`Saturn`));