//Print only the numbers that are both even and perfect squares
function printEvenPerfectSquaresUpToN(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            if (i ** 0.5 % 1 === 0) {
                console.log(i);
            }
        }
}
}

printEvenPerfectSquaresUpToN(100);