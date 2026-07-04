const maxArea = function (nums) {

    const n = nums.length;
    let left = 0;
    let right = n - 1;
    let maxArea = 0;

    while (left <= right) {
        let area = Math.min(nums[left], nums[right]) * (right - left);

        if (nums[left] <= nums[right]) {
            left++;
        } else {
            right--;
        }
        maxArea = Math.max(area, maxArea);
    }
    return maxArea;
}



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))