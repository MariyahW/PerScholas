for (let i = 10; i > 0; i--) {
  console.log(i);
}
for (let i = 1; i < 10; i++) {
  console.log(i);
  i++;
}
console.log(`Even numbers`);
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) console.log(i);
}
console.log(`Multiples of 3 to 60`);
for (let i = 6; i <= 60; i++) {
  if (i % 3 == 0) console.log(i);
}
console.log(`Hash to 7`);
let hash = `#`;
for (let i = 0; i < 7; i++) {
  console.log(hash);
  hash += `#`;
}
console.log(`prime, even, odd`);
let prime = ` `;
for (i = 1; i < 20; i++) {
  switch (i) {
    case 1:
      console.log(`${i} is odd`);
      break;
    case 2:
      console.log(`${i} is even`);
      break;
    case 3:
      console.log(`${i} is odd`);
      break;
    default:
      if (i % 2 == 0) {
        console.log(`${i} is even`);
        break;
      } else {
        for (let x = 2; x < i; x++) {
          if (i % x === 0) {
            prime = ` is not a prime.`;
            break;
          } else {
            prime = ` is prime.`;
          }
        }
      }
      console.log(`${i} is odd and${prime}`);
      break;
  }
}
