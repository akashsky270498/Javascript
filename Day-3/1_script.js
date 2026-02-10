/*
Print Right-Angled Star Triangle
Input: Rows = 5
Output:

* 
* * 
* * * 
* * * * 
* * * * * 

*/

// function printRightAngledTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write('* ');
//         }
//         console.log(); // Move to the next line after each row
//     }
// }

// printRightAngledTriangle(5)

const printRightAngledTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(" ");
  }
};

printRightAngledTriangle(5);

console.log("============================================================");
const printReversedRightAngledTriangle = (rows) => {
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log(" ");
  }
};
printReversedRightAngledTriangle(5);
