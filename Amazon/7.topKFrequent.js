/*
7. TOP K FREQUENT ELEMENTS
------------------------------------------------
WHAT?
Find k most frequent numbers

INPUT:
nums = [1,1,1,2,2,3], k=2

OUTPUT:
[1,2]
*/

var topKFrequent = function (nums, k) {

    if (!Array.isArray(nums) || nums.length === 0) return [];

    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const arr = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    const result = [];

    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
}

console.log(topKFrequent([1,1,1,2,2,3],2));