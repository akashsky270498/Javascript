//Sum of All Even Numbers up to N
let n = 1000;
let sum = 0;

console.time();
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}
console.log(sum);
console.timeEnd();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Optimized
let n2 = 1000000000;

console.time('optimized');

let k = Math.floor(n / 2);
let sum2 = k * (k + 1);

console.log(sum2);
console.timeEnd('optimized');


