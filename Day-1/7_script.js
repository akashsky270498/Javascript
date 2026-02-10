//Print all numbers divisible by 3 and 5 up to N

function printAllNumbersDivisibleBy3And5(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Numbers divisible by 3 & 5 are: ", i);
    }
  }
}

printAllNumbersDivisibleBy3And5(1000);
