//while loop

let i = 10;
while (i > 0) {
  console.log(`values: ${i}`);
  i--;
}

const myArray = [
  "RCB",
  "PBKS",
  "RR",
  "KKR",
  "DC",
  "SRH",
  "LSG",
  "GT",
  "CSK",
  "MI",
];

let index = 0;
while (index < myArray.length) {
  console.log(`Value at index: ${myArray[index]}`);
  index = index + 1;
}

let j = 0;
do {
  console.log("value:", i);
  i++;
} while (i <= 10);

const myArray2 = [
  "RCB",
  "PBKS",
  "RR",
  "KKR",
  "DC",
  "SRH",
  "LSG",
  "GT",
  "CSK",
  "MI",
];

let arr1 = 0;
do {
  console.log(`Value @ index ${arr1}: ${myArray2[arr1]}`);
  arr1 = arr1 + 1;
} while (arr1 < myArray2.length);
