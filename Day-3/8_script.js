/*
Print Hollow Inverted Pyramid
Input: Rows = 5
Output:

*********
 *     *
  *   *
   * *
    *

*/
function hollowInvertedTriangle(rows) {
  for (let i = rows; i >= 1; i--) {

    // leading spaces
    for (let space = 1; space <= rows - i; space++) {
      process.stdout.write(" ");
    }

    // stars and hollow spaces
    for (let star = 1; star <= 2 * i - 1; star++) {
      if (i === rows || i === 1 || star === 1 || star === 2 * i - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }

    console.log(); // new line only
  }
}

hollowInvertedTriangle(5);
