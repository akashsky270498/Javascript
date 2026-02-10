function factorial(n) {
  if (
    typeof n !== "number" ||
    !Number.isFinite(n) ||
    !Number.isInteger(n) ||
    n < 0
  ) {
    return false;
  }

  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));
console.log(factorial("10"));
console.log(factorial([]));
