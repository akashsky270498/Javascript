const add = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(add(1, 2, 3, 4, 5)); // 15

// in arrow function it will not work
const addThroughArrow = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(addThroughArrow(1, 2, 3, 45, 3));
