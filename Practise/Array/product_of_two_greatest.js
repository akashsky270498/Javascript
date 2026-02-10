//Find the product of two greatest number from a given array
function maxProductOfAnyTwo(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of arr) {
    if (num > max1) {
      if (num !== max1) {
        max2 = max1;
        max1 = num;
      }
    } else if (num > max2 && max1 !== num) {
      max2 = num;
    }
  }
  // Edge case: less than 2 unique numbers
  if (max2 === -Infinity) {
    return null;
  }
  return max1 * max2;
}

console.log(maxProductOfAnyTwo([3, 2, 6, 4, 1, 5]));
console.log(maxProductOfAnyTwo([5, 5, 5, 2, 2, 1]));
console.log(maxProductOfAnyTwo([-10, -10, 5, 6, -7]));
console.log(maxProductOfAnyTwo([-5, -5, -4, -3, -2, -6,-6,7,-6])); // -14 why bcoz 7 * -2 in question it is asking for two greatest number not two maximum product
console.log(maxProductOfAnyTwo([7, 7, 7]));
console.log(maxProductOfAnyTwo([-1,-2,-3,-4]));
