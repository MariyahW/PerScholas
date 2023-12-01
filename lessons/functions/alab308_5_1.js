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

console.log(`Part 1: sum of numbers ${getSum([1, 2, 4, 5])}`); //12

// Take an array of numbers and return the average.
function getAvg(arrAvg) {
  let sum = getSum(arrAvg);
  let avg = sum / arrAvg.length;
  return avg;
}
console.log(` Part 1: Average ${getAvg([1, 2, 4, 5])}`); //3

// Take an array of strings and return the longest string.
function longString(arrString) {
  let compare = ` `;
  arrString.forEach((element) => {
    if (element.length > compare.length) compare = element;
  });
  return compare;
}

console.log(`Part 1 Longest String ${longString(["say", "hello", "in", "the", "morning"])}`); // morning

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function longer(arrString, num) {
  let arrRet = [];
  arrString.forEach((element) => {
    if (element.length > num) arrRet.push(element);
  });
  return arrRet;
}

console.log(`Part 1: String longer than a number ${longer(["say", "hello", "in", "the", "morning"], 3)}`); //[hello,morning]

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function countingDown(num) {
  if (num >= 1) {
    console.log(num);
    countingDown(num - 1);
  }
}

countingDown(5);

//Part 2
let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
//Sort by ages
function sortAge(arr){
let sorted=arr;
sorted.sort((a,b)=>a.age-b.age);
return sorted;
}

//Remove people over 50 using a callback function
function removeOlder(arr,sortAge){
  let old=sortAge(arr);
 let young=old.filter(eachOBJ=> eachOBJ.age<50)
  return young;
}
console.log(`Sort by age results`);
console.log(sortAge(arr));
console.log(`Remove people over 50`);
console.log(removeOlder(arr,sortAge));

//Change occupation to job and increment ages by 1
function jobBirthday(arr){
  const job = arr.map(function(eachOBJ){
    eachOBJ.job=eachOBJ.occupation;
    delete eachOBJ.occupation;
    return eachOBJ;
  } );
console.log(job);
  job.forEach(element=>{ageUp(element)});
  return job;
}

console.log(`Part 2: Change job`);
console.log(jobBirthday(arr));



//Part 3 this function changes the original object
function ageUp(obj) {
  obj.age == null || obj.age == undefined ? (obj.age = 0) : (obj.age += 1);
  obj.date == null || obj.date == undefined
    ? (obj.date = new Date())
    : (obj.date = new Date());
}
let anObj = { name: `Steve`,age: 45,  date: 2022 - 12 - 20 };
ageUp(anObj);
console.log(`Age up 1 year`);
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

/* Part 5
* My previous code did employ functions. The parameters range from strings, to numbers, to arrays and objects. Some items may be able to made into smaller code but thus far the functions I have created have not been substantial so they may be left as is. I could look for more was to make certain code snippets more efficient.*/