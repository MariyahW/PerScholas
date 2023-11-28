function fizzBuzz() {
  let fizzer = ` `;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      i % 3 === 0 ? i % 5 === 0 ? (fizzer += ` Fizz Buzz`) : (fizzer += ` Fizz`) : (fizzer += ` Buzz`);
      console.log(fizzer);
    } else {
      console.log(i);
    }
    fizzer = ` `;
  }
}

function primeTime(num) {
  let isPrime = false;
  myPrime: for (let count = num; isPrime == false; count++) {
    if (count > 6) {
      if (count % 6 == 1) {
        console.log(count);
        break myPrime;
      }
    } else {
      switch (count) {
        case 1:
          console.log(count);
          break myPrime;
        case 2:
          continue myPrime;
          break;
        case 3:
          console.log(count);
          break myPrime;
        case 4:
          continue myPrime;
          break;

        default:
          console.log(count);
          break myPrime;
      }
    }
  }
}
function loopy(csvString){
    let table=` `;
for (const i of csvString) {
    if(i==`\n`){
        console.log(table);
        table=` `;
    }else if(i==`,`){
        continue;
    }
    else{
        table+=`${i}`;
    }
    
}
}
console.log(`Fizz Buzz Results`);
fizzBuzz();
console.log(`Prime Time Results`);
primeTime(12);
console.log(`Feeling Loopy Results`);
loopy(`Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`);