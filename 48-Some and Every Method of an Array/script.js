const numbers = [0, 2, 4, 6, 8, 10];

const someResult = numbers.some((number, index) => {
  if (number % 2 === 1) {
    console.log(index);
  }
  return number % 2 === 1;
});

console.log(someResult);

console.log("****************************************************************");

const everyResult = numbers.every((number) => {
  return number % 2 === 0;
});

console.log(everyResult);

/* 
some(): returns true if at least one element satisfies the condition.
every(): returns true only if all elements satisfy the condition.
*/

console.log("****************************************************************");

//Check if any number is negative (some)
const nums = [1, 2, -3, 4];
// Output: true

const negativeNumber = nums.some((num) => {
  return num < 0;
});

console.log(negativeNumber);

console.log("****************************************************************");
// Check if all numbers are positive (every)
const posnum = [1, 2, 3, 4];
// Output: true

const isPositive = posnum.every((num) => num > 0);
console.log(isPositive);

console.log("****************************************************************");

// Check if all names start with a capital letter (every)
const names = ["Akash", "Thakur", "Developer"];
// Output: true

const upperLetter = names.every((name) => name[0] === name[0].toUpperCase());
console.log(upperLetter);
