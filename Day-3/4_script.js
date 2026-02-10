/*
Print Inverted Pyramid Pattern

Input: Rows = 5

Output:

*********
 *******
  *****
   ***
    *

*/

function printInvertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {

    for (let space = 0; space < rows - i; space++) {
      process.stdout.write(" ");
    }

    for (let star = 0; star < 2 * i - 1; star++) {
      process.stdout.write("*");
    }

    console.log();
  }
}

printInvertedPyramid(5);

