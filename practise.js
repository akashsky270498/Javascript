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
