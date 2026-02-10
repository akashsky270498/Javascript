/*
Find the Maximum of Three Numbers=
Input: 10 20 5
Output: 20
*/
function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num3 && num2 >= num1) {
    return num2;
  } else {
    return num3;
  }
}

// Example usage:
console.log(maxOfThree(10, 20, 50));

//Optimized Solution
function maximumOfThree(a, b, c) {
  let max;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }
  return max;
}

console.log(maximumOfThree(20, 20, 5));
