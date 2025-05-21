const myNums = [1, 2, 3, 4, 5];

const sumOfElements = myNums.reduce(
  (acc, currentvalue) => acc + currentvalue,
  0
);
console.log(sumOfElements); // 15

const sum = myNums.reduce(function (acc, currentvalue) {
  console.log(`CV: ${currentvalue} and ACC: ${acc}`);
  return acc + currentvalue;
}, 0);

console.log("SUM:", sum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalCartPrice = shoppingCart.reduce((startingPrice, shoppingCart) => {
    console.log(`Starting Price: ${startingPrice} and Current Price: ${shoppingCart.price}`)
  return startingPrice + shoppingCart.price;
}, 0);

console.log("Total Amount to Pay: ", totalCartPrice)