/*Part1: Thinking Functionally
 * I would say out the examples the first function and second are the best.
 *My reasoning is that the first function is easy to follow and the second is
 *extremely efficient.*/

// Take an array of numbers and return the sum.
function getSum(arrNum) {
  let sum = null;
  arrNum.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(getSum([1, 2, 4, 5])); //12

// Take an array of numbers and return the average.
function getAvg(arrAvg) {
  let sum = getSum(arrAvg);
  let avg = sum / arrAvg.length;
  return avg;
}
console.log(getAvg([1, 2, 4, 5])); //3

// Take an array of strings and return the longest string.
function longString(arrString) {
  let compare = ` `;
  arrString.forEach((element) => {
    if (element.length > compare.length) compare = element;
  });
  return compare;
}

console.log(longString(["say", "hello", "in", "the", "morning"])); // morning

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function longer(arrString, num) {
  let arrRet = [];
  arrString.forEach((element) => {
    if (element.length > num) arrRet.push(element);
  });
  return arrRet;
}

console.log(longer(["say", "hello", "in", "the", "morning"], 3)); //[hello,morning]

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function countingDown(num) {
  if (num >= 1) {
    console.log(num);
    countingDown(num - 1);
  }
}

countingDown(5);

//Part 2

//Part 3 this function changes the original object
function ageUp(obj) {
  obj.age == null || obj.age == undefined ? (obj.age = 0) : (obj.age += 1);
  obj.date == null || obj.date == undefined
    ? (obj.date = new Date())
    : (obj.date = new Date());
}
let anObj = { name: `Steve`,age: 45,  date: 2022 - 12 - 20 };
ageUp(anObj);
console.log(anObj);
//Part 3 this function does not change the original
function anotherAge(obj) {
  let copyObj = { ...obj };
  ageUp(copyObj);
  return copyObj;
}

let myCopy = anotherAge(anObj);
console.log(`myCopy is ${JSON.stringify(myCopy)}`);
console.log(`the original anObj is ${JSON.stringify(anObj)}`);
