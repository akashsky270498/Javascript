/*
3. TWO SUM
------------------------------------------------
WHAT IS THIS?
Find TWO numbers whose sum = target

INPUT:
nums = [2,7,11,15], target = 9

OUTPUT:
[0,1] (because 2 + 7 = 9)
*/

var twoSum = function (nums, target) {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 26));