/*

Print Hollow Diamond Pattern
Input: Rows = 3
Output:

    *
   * *
  *   *
   * *
    *
*/

const hollowDiamondPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    // Spaces
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    row += "*";
    for (let j = 1; j < 2 * i - 1; j++) {
      row += " ";
    }
    if (i > 1) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    row += "*";
    for (let j = 1; j < 2 * i - 1; j++) {
      row += " ";
    }
    if (i > 1) {
      row += "*";
    }
    console.log(row);
  }
};

hollowDiamondPattern(3);
