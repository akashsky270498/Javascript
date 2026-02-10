/*
Print Hollow Square Pattern

Input: Rows = 5

Output:

*****
*   *
*   *
*   *
*****

*/
function printHollowSqquare(rows) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || (i === rows) | (j === 1) || j === rows) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log(" ");
  }
}

printHollowSqquare(10);
