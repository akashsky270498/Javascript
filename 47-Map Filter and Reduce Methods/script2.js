// Given an array of objects representing products in a cart, use reduce() to calculate the total cost.
const cart = [
  { item: "Shoes", price: 2500 },
  { item: "T-shirt", price: 1500 },
  { item: "Jeans", price: 3000 },
];

// Expected Output: 7000

// const totalCost = cart.reduce((startingprice, initialPrice) => {
//   // console.log(startingprice, initialPrice.price)
//   return startingprice + initialPrice.price;
// }, 0);

const totalCost = cart.reduce((acc, { price }) => acc + price, 0);

console.log(totalCost);

//Given an array of numbers, use filter() to extract only the numbers that are divisible by both 2 and 3.
const numbers = [2, 3, 4, 6, 8, 9, 12, 15, 18];
// Expected Output: [6, 12, 18]

// const filteredNumbers = numbers.filter((number) => {
//   if (number % 2 === 0 && number % 3 === 0) {
//     return number;
//   }
// });

const filteredNumbers = numbers.filter(
  (number) => number % 2 === 0 && number % 3 === 0
);

console.log(filteredNumbers);

//You are given an array of names. Write a function using map() that returns an array where each name is converted to uppercase and prefixed with "Mr./Ms.".

const names = ["virat", "rohit", "sachin"];
// Expected Output: ["Mr./Ms. VIRAT", "Mr./Ms. ROHIT", "Mr./Ms. SACHIN"]

// const mappedNames = names.map((name) => {
//   return `Mr./Ms. ${name}`;
// });

const mappedNames = names.map((name) => `Mr./Mrs. ${name.toUpperCase()}`);

console.log(mappedNames);
