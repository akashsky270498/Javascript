/*
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

 

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.
*/

const secondHighest = (s) => {
  let max = -1;
  let secondMax = -1;

  for (let ch of s) {
    if (ch >= "0" && ch <= "9") {
      const digit = ch.charCodeAt(0) - 48;

      if (digit > max) {
        secondMax = max;
        max = digit;
      } else if (digit < max && digit > secondMax) {
        secondMax = digit;
      }
    }
  }
  return secondMax;
};

console.log(secondHighest("dfa12321afd")); // 2
console.log(secondHighest("abc1111")); // -1
console.log(secondHighest("a1b2c3d4e5")); // 4
console.log(secondHighest("zzzz")); // -1
console.log(secondHighest("9876543210")); // 8
console.log(secondHighest("a0b0c0")); // -1 