/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

const moveZeros = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) return nums;

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        }
    }
    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([0]));
console.log(moveZeros([1, 0, 3, 0, 12]));
console.log(moveZeros([]));
console.log(moveZeros([1, 2, 3, 4, 5]));

// Time : O(n), Space : O(1)