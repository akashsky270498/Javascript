/*
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

// function moveZeros(arr) {
//   if (arr.length === 0) return arr;
//   let x = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[x] = arr[i];
//       x++;
//     }
//   }

//   for (let i = x; i < arr.length; i++) {
//     arr[i] = 0;
//   }

//   return arr;
// }

var moveZeros = function (nums) {
  if (!Array.isArray(nums) || nums.length === 0) return false;

  let x = 0;

  for (let num of nums) {
    if (num !== 0) {
      nums[x] = num;
      x++;
    }
  }

  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeros([0])); // [0]
console.log(moveZeros([]));
