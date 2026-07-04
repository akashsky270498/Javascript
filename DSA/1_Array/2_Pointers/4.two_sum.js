const twoSum = (nums, target) => {
    if (!Array.isArray(nums) || nums.length === 0 || !target) return [-1, -1];
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));