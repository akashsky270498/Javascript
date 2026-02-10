function  sumOfArray (arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // 15
console.log(sumOfArray([-1, -2, -3, -4, -5]));  // -15
console.log(sumOfArray([0, 0, 0, 0, 0])); // 0
console.log(sumOfArray([10, 20, 30, 40, 50])); // 150       
console.log(sumOfArray([])); // 0