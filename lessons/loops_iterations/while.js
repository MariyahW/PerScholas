function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
function multiThree(num) {
  while (num < 35) {
    if (num % 3 === 0) {
      console.log(num);
    }
    num++;
  }
}
function multiFive(num) {
  while (num < 100) {
    if (num % 5 === 0) {
      console.log(num);
    }
  }
}
// let count = 0;
// while (count < 20) {
//   if (count % 2 === 0) {
//     console.log(count * 3);
//   }
//   count++;
// }
console.log(` `);
let prime = 0;
while (prime < 20) {
  myloop: for (let x = 2; x < prime; x++) {
    if (prime % x === 0) {
      break;
    } 
    console.log(prime);
  }
 

  prime++;
}
function change(cost, input) {
  console.log(`Romeo will receive ${(input - cost) * 4} quarters`);
}

// change(3.75,10);
