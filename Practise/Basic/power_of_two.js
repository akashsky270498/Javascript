/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
*/

const isPowerOfTwo = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n)) return false;

  if (n < 1) return false;

  // while (n > 1) {
  //     if ( n % 2 !== 0) {
  //         return false;
  //     } else {
  //         n = n /2;
  //     }
  // }

  for (; n > 1; n = n / 2) {
    if (n % 2 !== 0) {
      return false;
    }
  }

  return true;
};

// console.log(isPowerOfTwo(0));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(3));


const isPowerTwo = (num) => {
    return Number.isInteger(num) && num > 0 && (num & (num - 1)) === 0;
}
console.log(isPowerTwo(0));
console.log(isPowerTwo(16));
console.log(isPowerTwo(3));