/*
Print Pyramid Pattern
Input: Rows = 5
Output:

    *
   ***
  *****
 *******
*********

*/

function printPyramidPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printPyramidPattern(5);
