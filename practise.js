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
// const containsDuplicate = (nums) => new Set(nums).size !== nums.length;
var containsDuplicate = function (nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 3]));
console.log(containsDuplicate([1, 2, 3, 4]));

var removeDuplicates = function (nums) {
  if (!Array.isArray(nums)) return false;

  // const seen = new Set();

  // for (let num of nums) {
  //   if (!seen.has(num)) {
  //     seen.add(num);
  //   }
  // }
  // return [...seen];

  return Array.from(new Set(nums))
};
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));
console.log(removeDuplicates([]));
