const users = [
  "Akash",
  "Rahul",
  "Adarsh",
  "Arif",
  "Gaurav",
  "Anurag",
  "Rakesh",
];

for (let i = 0; i < users.length; i++) {
  console.log(`${i + 1}. ${users[i]} procodrr`);
}

for (let i = 0; i <= 100; i++) {
  if (i !== 0 && i % 2 === 0) {
    console.log(i);
  }
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// For numbers 1–30:
// If divisible by 3 → print "Fizz"
// If divisible by 5 → print "Buzz"
// If divisible by both → print "FizzBuzz"
// Else print the number

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
