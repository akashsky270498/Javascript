/*
Print Butterfly Pattern

Input: Rows = 5

Output:

*       *
**     **
***   ***
**** ****
*********
**** ****
***   ***
**     **
*       *

*/


const butterFlyPattern = (n) => {
  //Top half
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Left Stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    // Spaces
    let spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    // Right Stars
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }

  //Bottom Left
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (j = 1; j <= i; j++) {
      row += "*";
    }

    //Spaces
    let spaces = 2 * (n - i);
    for (let j = 1; j <= spaces; j++) {
      row += " ";
    }

    //Right Stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
};
butterFlyPattern(5);
