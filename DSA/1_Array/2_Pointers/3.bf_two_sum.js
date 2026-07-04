const twoSum = (nums, target) => {
    if (!Array.isArray(nums) || nums.length === 0 || !target) return [-1, -1];

    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) { 
            if (nums[i] + nums[j] === target) return [i + 1, j + 1];
        }
    }
    return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([10, 2, 3], 10));    