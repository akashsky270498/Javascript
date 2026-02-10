/*

Print Rhombus Pattern

Input: Rows = 5

Output:

    *****
   *****
  *****
 *****
*****

*/

const rhombusPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let j = 1; j <= n; j++) {
      row += "*";
    }
    console.log(row);
  }
};

rhombusPattern(5);
