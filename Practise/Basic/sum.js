// function sum(...args) {
//   let sum = 0;
//   if (args.length === 0) return 0;
//   for (let num of args) {
//     if (typeof num !== "number") {
//       throw new Error("Invalid argument");
//     }
//     sum += num;
//   }
//   return sum;
// }

function sum(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return false;
  }

  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(-1, -2, -3, -4, -5));
console.log(sum());
console.log(sum(10, -20, 30));
console.log(sum(1, "2", 3)); // This will throw an error: Invalid argument

function usingReduce(...args) {
  if (args.length === 0) return 0;
  return args.reduce((total, num) => {
    if (typeof num !== "number") {
      throw new Error("Invalid arguments");
    }
    return total + num;
  }, 0);
}

// console.log(usingReduce(1, 2, 3, 4, 5));
// console.log(usingReduce(-1, -2, -3, -4, -5));
// console.log(usingReduce());
// console.log(usingReduce(10, -20, 30));
// console.log(usingReduce(1, "2", 3)); // This will throw an error: Invalid argument
