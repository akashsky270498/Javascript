/*
Generate a Decimal Number from Whole and Fractional Digits

Input: Whole = [1, 2], Fraction = [3, 4]
Output: 12.34
✨ Form the number mathematically by combining the digits from both arrays using powers of 10.
*/

function generateDecimalNumber(wholeDigits, fractionDigits) {
  let wholeNumber = 0;
  for (let i = 0; i < wholeDigits.length; i++) {
    wholeNumber = wholeNumber * 10 + wholeDigits[i];
  }

  let fractionNumber = 0;
  for (let i = 0; i < fractionDigits.length; i++) {
    fractionNumber = (fractionNumber + fractionDigits[i]) / 10;
  }

  return wholeNumber + fractionNumber;
}

// Example usage:
const wholeDigits = [5, 2];
const fractionDigits = [2, 5];
const result = generateDecimalNumber(wholeDigits, fractionDigits);
console.log(
  `Input: Whole = [${wholeDigits.join(
    ", "
  )}], Fraction = [${fractionDigits.join(", ")}]`
);
console.log(`Output: ${result}`);
