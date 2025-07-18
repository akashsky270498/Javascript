const objectWithMethods = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  subtract: function (num1, num2) {
    return num1 - num2;
  },

  square(num) {
    return num ** 2;
  },

  cube(num) {
    return num ** 3;
  },
};

console.log("Addition: ", objectWithMethods.add(12, 15));
console.log("Subtract: ", objectWithMethods.subtract(62, 45));
console.log("Square: ", objectWithMethods.square(5));
console.log("Cube: ", objectWithMethods.cube(4));

/*
All methods are functions, but not all functions are methods.

A function becomes a method when it is defined as a property of an object.
In other words, a method is simply a function that belongs to an object.
*/
