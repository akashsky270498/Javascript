function countNegatives(arr) {
  if (!Array.isArray(arr)) return false;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (!Number.isFinite(value)) {
      return false;
    }

    if (value < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives([0, -1, 2, -3, 4, -5])); // 3
console.log(countNegatives([-1, -2, -3, -4, -5])); // 5
console.log(countNegatives([0, 0, 0, 0, 0])); // 0
console.log(countNegatives([10, -21, 32, -43, 54])); // 2
console.log(countNegatives([1.5, -2.3, 3.7, -4.0, 2.8])); // 2
console.log(countNegatives([])); // 0
console.log(countNegatives("string")); // false
console.log(countNegatives(12345)); // false
console.log(countNegatives({ a: 1, b: 2 })); // false
