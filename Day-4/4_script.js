/*
Count Whole and Fractional Digits Separately

Input: N = 12.345
Output: Whole Count = 2, Fraction Count = 3
✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.
*/
function countWholeAndFractionDigits(num) {
    const [wholeStr, fractionStr = ""] = num.toString().split("."); 
    return { wholeCount: wholeStr.length, fractionCount: fractionStr.length };

}




// Example usage:
const N = 52654212;
const result = countWholeAndFractionDigits(N);
console.log(`Input: N = ${N}`);
console.log(`Output: Whole Count = ${result.wholeCount}, Fraction Count = ${result.fractionCount}`);