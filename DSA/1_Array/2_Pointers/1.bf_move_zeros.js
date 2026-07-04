/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

function moveZeros(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

// Time - O(n), Space - O(1)
console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0]));
console.log(moveZeros([]));
console.log(moveZeros([1, 2, 3, 4, 5]));