//Find the sum of all odd numbers up to N

let sum = 0;
const sumOfAllOddNumbers = (num) => {
    for (let i = 0; i <= num ; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
            console.log(i)
        }
    }
    return sum;

}

console.log(sumOfAllOddNumbers(100))