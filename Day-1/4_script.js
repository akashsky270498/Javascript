//Product (Factorial) of N
let n = 5;
let product = 1;
if ( n === 0) {
    console.log(1);
} else {
    for (let i = 1; i <= n; i++) {
        product = product * i;
    }
    console.log(product);
}
