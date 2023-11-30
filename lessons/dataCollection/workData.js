// Part 1: I will use arrays instead of a string
 //Do not need to call each function to view results they each console.log the results as well as return. The function are used in each other so if you run the code just in part 4 you will see all results.

//Part 2
function refactoredArray(csvString) {
  const dataT = [];
  let rows = [];
  let aString = ` `;
  for (const i of csvString) {
    if (i != `\n` && i != `,`) {
      aString += i;
    } else if (i == `,` || i == `\n`) {
      rows.push(aString);
      aString = ` `;
    }

    if (i == `\n`) {
      dataT.push(rows);
      rows = [];
    }
  }
  rows.push(aString);
  dataT.push(rows);
  console.log(`Part 2`);
  console.log(dataT);
  return dataT;
}
;

//Part 3
function makingObjects(csvString) {
  //Variable
  let obArray = [];
  obArray = refactoredArray(csvString);
  let objectWords = [];
  let tempObj = {};
  let obKeys = [];
  let lower = obArray[0];
  //loop to make keys lowercase
  lower.forEach((key) => {
    obKeys.push(key.toLowerCase());
  });

  for (let i = 1; i < obArray[0].length + 1; i++) {
    for (let nest = 0; nest < obKeys.length; nest++) {
      tempObj[obKeys[nest]] = obArray[i][nest];
    }
    objectWords.push(tempObj);
    tempObj = {};
  }

  console.log(`Part 3`);
  console.log(objectWords);
  return objectWords;
}


//Part 4
{
 
  let arrObj = makingObjects(
    `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
  );
  arrObj.pop();
  arrObj.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25",
  });
  arrObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
  console.log(`part4`);
  console.log(arrObj);

  //Part 5
  let myString = ` `;
  let subObj = {};
  arrObj.forEach((element) => {
    subObj = element;

    for (let i in subObj) {
      myString += ` ${subObj[i]},`;
    }
  });

  console.log(myString);
}
