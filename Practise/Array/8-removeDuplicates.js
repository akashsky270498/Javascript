/*

2. Remove Duplicates (Sorted Array)

Input: [1,1,2,2,3,4,4]
Output: [1,2,3,4]
Topic: Two pointers

*/
// const removeDuplicates = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     throw new Error("Array cannot be empty");
//   }

//   let set = new Set();

//   for (let num of arr) {
//     if (!set.has(num)) {
//       set.add(num);
//     }
//   }
//   //   return [...set];
//   return Array.from(set);
// };

const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Expected an array.");
  }

  //   return [...new Set(arr)];
  return Array.from(new Set(arr));
};



console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));
console.log(removeDuplicates([]));
