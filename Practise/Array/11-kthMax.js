const kthMax = (nums, k) => {
    if (!Array.isArray(nums) || nums.length < 2 || k <= 0 ) return null;

    // nums.sort((a,b) => b - a)
    // return nums[k - 1];

    const unique = [...new Set(nums)];

    if (unique.length < k) return null;

    unique.sort((a,b) => b - a);
    return unique[k - 1];
}

console.log(kthMax([10, 5, 8, 20, 35, 15, 35], 2));
console.log(kthMax([10], 2));