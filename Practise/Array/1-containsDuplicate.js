/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
*/

// Set → O(n) time, O(n) space

// var containsDuplicate = function (nums) {
//   const seen = new Set();

//   for (let num of nums) {
//     if (seen.has(num)) return true;
//     seen.add(num);
//   }
//   return false;
// };

// const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

//No extra space
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 3]));
console.log(containsDuplicate([1, 2, 3, 4]));
