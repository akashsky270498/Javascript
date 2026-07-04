const maxArea = function (nums) {

    const n = nums.length;
    let maxArea = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let width = j - 1;
            let length = Math.min(nums[i], nums[j]);
            let area = width * length;
            maxArea = Math.max(area, maxArea);
        }
    }
    return maxArea;
}



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))