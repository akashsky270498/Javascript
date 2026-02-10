//Q:3 Print All Even Numbers from 1 to N

let n = 10;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Time Complexity: O(N)

function printEvenNumbers(num) {
 for (let i = 1; i <= num; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
 }
}

printEvenNumbers(20);