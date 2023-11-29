// Part 1: I will use arrays instead of a string

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
refactoredArray(
  `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
);

//Part 3
function makingObjects(csvString) {
  let obArray = [];
  obArray = refactoredArray(csvString);
  let objectWords = [];
  let tempObj = {};
  let obKeys = obArray[0];
  
  for (let i = 1; i < obArray[0].length; i++) {
    for (let nest = 0; nest < obKeys.length; nest++) {
      tempObj[obKeys[nest]] = obArray[i][nest];
    }
    objectWords.push(tempObj);
    tempObj = {};
  }
  objectWords.push(tempObj);
  console.log(`Part 3`);
  console.log(objectWords);
  return objectWords;
}
// makingObjects(`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`);

//Part 4
{
let arrObj= makingObjects(`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`);
// arrObj.pop();
// arrObj[1]={ id: "48", name: "Barry", occupation: "Runner", age: "25" };
// arrObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// console.log(`part4`);
// console.log(arrObj);
}