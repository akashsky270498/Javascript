/*
Input: Rows = 3

Output:

    *
   ***
  *****
   ***
    *

*/

const diamondPattern = (n) => {
  // Top Half
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Spaces
    let spaces = n - i;
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }
    // Stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }

  //Bottom Half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};

diamondPattern(35);
