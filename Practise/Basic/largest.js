const findLargest = (arr) => {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let largest = null;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return false;
    }

    if (largest === null || value > largest) {
      largest = value;
    }
  }
  return largest;
};

console.log(findLargest([1, 2, 3, 4, 5])); // 5
console.log(findLargest([-1, -2, -3, -4, -5])); // -1
console.log(findLargest([0, 0, 0, 0, 0])); // 0
console.log(findLargest([10, 20, 30, 40, 50])); // 50
console.log(findLargest([1.5, -2.3, 3.7, 4.0, 2.8])); // 4
console.log(findLargest([])); // null
console.log(findLargest("string")); // false
console.log(findLargest(12345)); // false
console.log(findLargest({ a: 1, b: 2 })); // false
