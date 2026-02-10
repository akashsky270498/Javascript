/*
Split Number into Digits

Input: N = 12345
Output: [1, 2, 3, 4, 5]
✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.

*/

// function splitNumbersIntoDigits(num) {
//     let digits = [];
//     while (num > 0) {
//         let digit = num % 10;
//         console.log(digit);
//         digits.unshift(digit);
//         num = Math.floor(num / 10);
//     }
//     return digits;
// }

function splitNumbersIntoDigits(num) {

    num = BigInt(num); // Convert to BigInt for large numbers
    if (num === 0n) return [0];

    let digits = [];

    num = num < 0n ? -num : num; // Handle negative numbers

    while (num > 0n) {
        digits.push(Number(num % 10n));
        num = num / 10n;
    }
    return digits.reverse();
}

console.log(splitNumbersIntoDigits(12345)); // [1, 2, 3, 4, 5]
console.log(splitNumbersIntoDigits(0)); // [0]
console.log(splitNumbersIntoDigits(-6789)); // [6, 7, 8, 9]