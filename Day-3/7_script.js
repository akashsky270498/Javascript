/*
Print Alternating Binary Triangle

Input: Rows = 5

Output:

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/

function printAlternatingBinaryTriangle(rows) {
  for (i = 1; i <= rows; i++) {
    let start = i % 2 === 1 ? 1 : 0;
    for (j = 1; j <= i; j++) {
      process.stdout.write(start.toString() + " ");
      start = 1 - start;
    }
    console.log();
  }
}

printAlternatingBinaryTriangle(5);
