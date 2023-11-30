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

console.log(longer(["say", "hello", "in", "the", "morning"],3));//[hello,morning]

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function countingUp(num){
    if(num >=1){
        console.log(num);
        countingUp(num-1);
    }
}

countingUp(5);