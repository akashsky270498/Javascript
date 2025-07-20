const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum;
// }

function add(a, b, c, ...nums) {
  console.log(a, b, c, nums);
  let sum = a + b + c;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

const result = add(...nums, 12);
console.log("Result: ", result); // 67

// function add2(...nums) {
//   return [arguments].reduce((acc, curr) => acc + curr);
// }

// function add2(...nums) {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr);
// }

function add2(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

const result2 = add2(1, 2, ...nums, 12, 13);
console.log("Result2: ", result2);
