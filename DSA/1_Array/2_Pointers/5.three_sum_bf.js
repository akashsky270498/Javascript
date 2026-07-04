const threeSum = function (nums) {
    const n = nums.length;
    let seen = new Set();
    let result = [];
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    let key = triplet.join(',');

                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))