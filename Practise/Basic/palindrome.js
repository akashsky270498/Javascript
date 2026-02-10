/*
Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

//without converting into string
// const isPalindrome = (x) => {
//     if (x < 0 || !Number.isInteger(x)) return false;

//    let original = x;
//    let reversed = 0;

//    while (x > 0 ) {
//     reversed = reversed * 10 + (x % 10);
//     x = Math.trunc( x / 10);
//    }
//    return reversed === original;
// }

// using string

const isPalindrome = (x) => {
  if (!Number.isInteger(x)) return false;

  if (x < 0 ) return false;

  let str = String(x);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(0)); // true
console.log(isPalindrome(1)); // true
console.log(isPalindrome(1234321)); // true
console.log(isPalindrome(123456)); // false
console.log(isPalindrome("121")); // false
console.log(isPalindrome([])); // false
