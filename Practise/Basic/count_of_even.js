function countEvens(arr) {
  if (!Array.isArray(arr)) return false;

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isFinite(value)
    ) {
      return false;
    }

    if (value % 1 !== 0) continue;

    if (value % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(countEvens([0, 1, 2, 3, 4, 5])); // 3
console.log(countEvens([-1, -2, -3, -4, -5])); // 2
console.log(countEvens([0, 0, 0, 0, 0])); // 5
console.log(countEvens([10, 21, 32, 43, 54])); // 3
console.log(countEvens([1.5, -2.3, 3.7, 4.0, 2.8])); // 1
console.log(countEvens([])); // 0
console.log(countEvens("string")); // false
console.log(countEvens(12345)); // false
console.log(countEvens({ a: 1, b: 2 })); // false
