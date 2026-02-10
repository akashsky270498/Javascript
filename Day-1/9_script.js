//Print the cubes of numbers from 1 to N
function printCubesUpToN(num) {
    for (let i = 1; i <= num; i++) {
        console.log("Cube of", i, "is", i ** 3);
    }
}

printCubesUpToN(10);