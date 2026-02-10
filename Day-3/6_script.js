/*
Print Hollow Pyramid Pattern

Input: Rows = 5

Output:

    *
   * *
  *   *
 *     *
*********

*/
function printHollowPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k === 1 || k === rows * 2 - (2 * (rows - i)) - 1 || i === rows) {
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log(" ");
    }
}
printHollowPyramid(5)