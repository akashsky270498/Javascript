// Normal function declaration

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(5, 9));

//Function Expression
const subtract = function (num1, num2) {
  return num1 - num2;
};

console.log(subtract(9, 5));

//Arrow function expression
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 6));

const addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(10, 1));

const square = num => num ** 2;
console.log(square(5));

setTimeout(() => {
  console.log("I'll come after 2 seconds...");
}, 2000);
