const width = +prompt("Please enter the width of the Rectangle");
const height = +prompt("Please enter the height of the Rectangle");

document.writeln(`Area of Rectangle is: ${width * height}`);


const score = 4000;
console.log(score); // 4000

const anotherScore = new Number(522);
console.log(anotherScore); //[Number: 522]

console.log(score.toString().length); // converts it into string => 4

const newNumber = 4500.5448;
console.log(newNumber.toFixed(2)); // 4500.54

const precisedNumber = 123.45;
console.log(precisedNumber.toPrecision(4)); // 123.5

const dollars = 100000000;
console.log(dollars.toLocaleString("en-IN")); // 10,00,00,000

//********************************Maths******************************** */

console.log(Math); //
console.log(Math.abs(-4)); // 4
console.log(Math.round(406.3)); // 406
console.log(Math.ceil(40.2)); // 41
console.log(Math.floor(40.9)); // 40
console.log(Math.random()); // 0.695645465556552
console.log(Math.random() * 10 + 1); // 6.95645465556552 [+1 bcoz it can come 0.063685465655 also]
console.log(Math.floor(Math.random() * 10 + 1)); // 6

//formula
const min = 20;
const max = 40;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // between 20 to 40 including 20 & 40
