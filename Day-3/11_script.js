/*
Print Hourglass Pattern

Input: Rows = 5

Output:

*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/

const hourglassPattern = (n) => {
  // Top Half
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (j = 1; j <= n - i; j++) {
      row += " ";
    }

    //Stars
    for (let j = 1; j <= 2 * (i - 1) + 1; j++) {
      row += "*";
    }
    console.log(row);
  }

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let j = 1; j <= 2 * (i - 1) + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
};

hourglassPattern(5);
