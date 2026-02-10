/*

Print Inverted Right-Angled Triangle
Input: Rows = 5
Output:

* * * * * 
* * * * 
* * * 
* *
*

*/

function printInvertedRightAngeledTriangle(rows) {
  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

printInvertedRightAngeledTriangle(5);
