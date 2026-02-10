//4. Sum of First N Natural Numbers
let n = 5;
for (let i = 0; i <= n; i++) {
    console.log(n * (n + 1) / 2);
    break;
}

//Optimized version
const sumOfNaturalNumbers = (num) => {
    return num * (num + 1) / 2;
}

console.log(sumOfNaturalNumbers(10));