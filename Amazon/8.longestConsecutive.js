/*
8. LONGEST CONSECUTIVE SEQUENCE
------------------------------------------------
INPUT:
[100,4,200,1,3,2]

OUTPUT:
4 (sequence = 1,2,3,4)
*/

var longestConsecutive = function (nums) {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    const set = new Set(nums);
    let maxLen = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let currNum = num;
            let len = 1;

            while (set.has(currNum + 1)) {
                currNum++;
                len++
            }
            maxLen = Math.max(maxLen, len);
        }
    }
    return maxLen;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 5]));