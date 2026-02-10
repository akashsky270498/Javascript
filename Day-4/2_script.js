/*
Remove the Decimal Point Mathematically

Input: N = 12.34
Output: 1234
✨ Do not use string operations.
*/
function removeDecimalPoint(num) {
  if (Number.isInteger(num)) return num;

  let multiplier = 1;

  while (!Number.isInteger(num * multiplier)) {
    multiplier *= 10;
  }
  return Math.round(num * multiplier);
}

console.log(removeDecimalPoint(12.34)); // 1234
console.log(removeDecimalPoint(-0.056)); // 56
console.log(removeDecimalPoint(0)); // 0
