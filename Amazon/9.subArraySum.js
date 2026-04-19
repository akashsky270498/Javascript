/*
9. SUBARRAY SUM EQUALS K
------------------------------------------------
INPUT:
nums = [1,1,1], k=2

OUTPUT:
2
*/
const subarraySum = function (nums, k) {

    if (!Array.isArray(nums) || nums.length === 0) return [];

    let map = new Map();
    map.set(0,1);

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum([1,1,1],2))