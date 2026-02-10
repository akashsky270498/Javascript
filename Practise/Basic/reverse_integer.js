/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

const reverse = (x) => {
  if (!Number.isInteger(x)) return false;

  const INT_MAX = 2147483647; // 2^31 - 1
//   const INT_MIN = -2147483648; // -2^31

  const sign = Math.sign(x);
  x = Math.abs(x);

  let reversed = 0;
  while (x > 0) {
    const digit = x % 10

     if (reversed > Math.trunc(INT_MAX / 10) || (reversed === Math.trunc(INT_MAX / 10) && digit > INT_MAX % 10)) {
      return 0;
    }

    reversed = reversed * 10 + digit
    x = Math.trunc(x / 10);
  }

  return reversed * sign;
};

console.log(reverse(1213));
console.log(reverse(123456789000564313));
console.log(reverse(-123));
