// Create variable declarations using both let and const.
// Apply different types of data literals.
// Use arithmetic operators to manipulate data.
// Use comparison operators to compare data.
// Perform string concatenations.
// Implement escape sequences in strings for special characters.
// Use template literals for string interpolation and multi-line strings.
// Create effective documentation through the use of comments.

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
//Part 1
const under25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && under25 && isUnique;

// Finally, log the results.
// console.log(isValid);

//Part 1 is below as well as under25 above.
// Check if all numbers are divisible by 5

let div5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

// Check if the first number is larger than the last. Cache the result in a variable.

let isLarger = n1 > n4;

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

let result = n2 - n1;
result *= n3;
result %= n4;

// Part 2
let totalDistance = 1500;
let speed = null;
let gallons = null;
let cost = null;
let hours = null;

function roadTrip(speed) {
  if (speed == 55) {
    gallons = totalDistance / 30;
    cost = gallons * 3;
    hours = 1500 / 55;
    console.log(
      `At an average speed of ${speed} mph you will need ${gallons} of gas.
        You will spend \$${cost} on that gas and it will take you 
        ${hours} hours to get there.
        `
    );
  } else if (speed == 60) {
    gallons = totalDistance / 28;
    cost = gallons * 3;
    hours = 1500 / 60;
    console.log(
      `At an average speed of ${speed} mph you will need ${gallons} of gas.
            You will spend \$${cost} on that gas and it will take you 
            ${hours} hours to get there.
            `
    );
  } else if (speed == 70) {
    gallons = totalDistance / 23;
    cost = gallons * 3;
    hours = 1500 / 70;
    console.log(
      `At an average speed of ${speed} mph you will need ${gallons} of gas.
            You will spend \$${cost} on that gas and it will take you 
            ${hours} hours to get there.
            `
    );
  } else {
    console.log(
      `Unable to tell as speeds 55,60, and 70 are the only valid options`
    );
  }
}



function canAfford(speed) {
  roadTrip(speed);
  if (cost > 175) {
    return `You cannot afford to average ${speed} mph as the full cost is \$${cost} and the is more than $175.`;
  } else {
    return `You can afford to average ${speed} mph.
    `;
  }
}

console.log(canAfford(55));
console.log(canAfford(60));
console.log(canAfford(70));


