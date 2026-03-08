const rotate = (nums, k) => {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
};

const reverse = (nums, left, right) => {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
