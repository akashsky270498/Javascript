// Find the product of two greatest numbers from a given array product shoould be greatest.
function maxProductOfTwoGreatest(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let num of arr) {
    if (num > max1) {
      if (num !== max1) {
        max2 = max1;
        max1 = num;
      }
    } else if (num > max2 && max1 !== num) {
      max2 = num;
    }

    //for -ve numbers
    if (num < min1) {
      if (num !== min1) {
        min2 = min1;
        min1 = num;
      }
    } else if (num < min2 && min1 !== num) {
      min2 = num;
    }
  }
  //EDGE case: less than 2 unique numbers
  if (max2 === -Infinity && min2 === Infinity) {
    return null;
  }

  return Math.max(max1 * max2, min1 * min2);
}
console.log(maxProductOfTwoGreatest([3, 2, 6, 4, 1, 5]));
console.log(maxProductOfTwoGreatest([5, 5, 5, 2, 2, 1]));
console.log(maxProductOfTwoGreatest([-10, -10, 5, 6]));
console.log(maxProductOfTwoGreatest([7, 7, 7]));
console.log(maxProductOfTwoGreatest([-5, -5, -4, -3, -2, -6, -6, 7, -6]));
console.log(maxProductOfTwoGreatest([-1, -2, -3, -4]));