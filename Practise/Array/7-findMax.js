/*

1. Find Maximum Element

Input: [3, 7, 2, 9, 5]
Output: 9

*/
//TC: O(n) & SC: O(1)
const findMax = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must not be empty");
  }

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([3, 7, 2, 9, 5]));
