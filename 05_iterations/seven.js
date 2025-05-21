const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const increasednums = myNumbers.map((num) => num + 10);

console.log(increasednums);

const powerNums = myNumbers
  .map((num) => num + 5)
  .map((num) => num * 5) // [30,35,40,45,50,55,60,65,70,75]
  .filter((num) => num % 10 == 0);

console.log(powerNums); // [ 30, 40, 50, 60, 70 ]
