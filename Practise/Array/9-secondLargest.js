const secondLargest = (nums) => {
  if (!Array.isArray(nums)) return [];

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of nums) {
    if (num >= max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
};

console.log(secondLargest([10, 5, 8, 20, 15, 35]));
console.log(secondLargest([10]));
