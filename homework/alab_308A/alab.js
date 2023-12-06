var counter = 0;

//Part 1 code has been commented so the rest of program will run
//as its created to make an error
// function recurse(){
//     counter+=1;
//     recurse();
// }
// try {
//     recurse();
// } catch (error) {
//     console.log(error);
//     console.log(counter);
// }

//Part 2
function flatArray(arr) {
  let arp = [];
  arp = arr.flat();
  //   console.log(arp);
  for (const element of arp) {
    if (Array.isArray(element)) {
      return flatArray(arp);
    }
  }
  return arp;
}

function trampoline(func, arr) {
  let result = func(arr);
  while (typeof result === `function`) {
    result = result();
  }
  return result;
}

let arrayy = [1, 2, 3, [4, 5]];
let arrayx = [0, 1, [2, [3, [4, 5]]]];
console.log(trampoline(flatArray, arrayx));
console.log(trampoline(flatArray, arrayy));

