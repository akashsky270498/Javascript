const secondLargest = (nums) => {
  if (!Array.isArray(nums)) return false;

  let max = -Infinity;
  let secondMax = -Infinity;
  for (let num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
};

console.log(secondLargest([10, 5, 8, 200, 15, 35]));
console.log(secondLargest([10]));
