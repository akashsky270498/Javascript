/*
4. MAX SUBARRAY (KADANE)
------------------------------------------------
WHAT?
Find CONTIGUOUS subarray with maximum sum

INPUT:
[-2,1,-3,4,-1,2,1,-5,4]

OUTPUT:
6  (subarray = [4,-1,2,1])
*/

var maxSubArray = function (nums) {

    if (!Array.isArray(nums) || nums.length === 0) return 0;

    let currentSum = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], nums[i] + currentSum);
        maxGlobal = Math.max(maxGlobal, currentSum);
    }
    return maxGlobal;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));