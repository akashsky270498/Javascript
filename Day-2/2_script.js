/*
Check if a Number is Positive, Negative, or Zero

Input: -9
Output: Negative
*/
function checkNumber(num) {
  if (num === 0) {
    console.log(`Given number ${num} is Zero.`);
  } else if (num > 0) {
    console.log(`Given number ${num} is Positive.`);
  } else {
    console.log(`Given number ${num} is Negative.`);
  }
}

checkNumber(100);
function checkNumberUsingSwitch(n) {
  switch (true) {
    case n === 0:
      console.log(`Given number ${n} is Zero.`);
      break;
    case n > 0:
      console.log(`Given number ${n} is Positive.`);
      break;
    case n < 0:
      console.log(`Given number ${n} is Negative.`);
      break;
    default:
      console.log("Invalid input");
  }
}

// Example usage:
checkNumberUsingSwitch(0);
checkNumberUsingSwitch(9);
checkNumberUsingSwitch(-14);
checkNumberUsingSwitch("a");
checkNumberUsingSwitch(null);

//Optimized Solution
function checkNumberType(num = 0) {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
}

console.log(checkNumberType(0));
