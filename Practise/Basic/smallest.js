const findSmallest = (arr) => {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let smallest = null;
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return false;
    }

    if (smallest === null || value < smallest) {
      smallest = value;
    }
  }
  return smallest;
};

console.log(findSmallest([1, 2, 3, 4, 5])); // 1
console.log(findSmallest([-1, -2, -3, -4, -5])); // -5
console.log(findSmallest([0, 0, 0, 0, 0])); // 0
console.log(findSmallest([10, 20, 30, 40, 50])); // 10
console.log(findSmallest([])); // null
console.log(findSmallest("string")); // false
console.log(findSmallest(12345)); // false
console.log(findSmallest({ a: 1, b: 2 })); // false
