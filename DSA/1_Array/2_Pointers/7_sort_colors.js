const sortColors = function (nums) {
    const n = nums.length;
    let low = 0;
    let mid = 0;
    let high = n - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            nums[mid] = nums[low];
            nums[low] = 0;
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            nums[mid] = nums[high];
            nums[high] = 2;
            high--;
        }
    }
    return nums;
}


console.log(sortColors([2, 0, 2, 1, 1, 0]))