let num=25;
let grade=92;

if (num >= 0) {
  if (num >= 100) {
    console.log(`positive and greater or equal to 100 than 100`);
  } else {
    console.log(`positive and less than 100`);
  }
} else {
  console.log(`negative`);
}

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 55) {
  console.log("D");
} else {
  console.log("F");
}

let x = 10;

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - I don't know what I'm doing.";
	}
} catch (error) {
	console.log(error);
}

console.log("Does this log?");
