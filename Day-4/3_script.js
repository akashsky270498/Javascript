/*
Separate Whole and Fractional Parts of a Number

Input: N = 5.75
Output: Whole = 5, Fraction = 0.75
✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.
*/
function separateWholeAndFractional(num) {
    const whole = num >= 0 ? num - (num % 1) : num - (num % 1) - 1;
    const fraction = num - whole;
    return { whole: whole, fraction: fraction };
}

// Example usage:
const N = 52654212.215495;
const result = separateWholeAndFractional(N);
console.log(`Input: N = ${N}`);
console.log(`Output: Whole = ${result.whole}, Fraction = ${result.fraction}`);