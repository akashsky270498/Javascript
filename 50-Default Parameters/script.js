function multiply(num1, num2) {
  return num1 * num2;
}
function es6Multiply(num1 = 1, num2 = 1) {
  return num1 * num2;
}

console.log(multiply(2, 4));
console.log(multiply(2, undefined)); // NaN
console.log(es6Multiply(2, undefined)); //2

// Note: Apart from undefined if any other values like "", null it will not get overridden by default params value in case of undefined only it will get overriden.

const rollADice = (numberofSides = 6) => {
  return Math.floor(Math.random() * numberofSides) + 1;
};

console.log(rollADice(28))