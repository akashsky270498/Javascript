console.log(Math.PI); // 3.141592653589793
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793

// Note: Math.PI is a read-only property, attempting to change it will not have any effect. below is the prooof

const descriptionOfPI = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptionOfPI);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}
*/
// Note: The property is not writable, enumerable, or configurable, meaning it cannot be changed, iterated over, or deleted.

const chai = {
  name: "Ginger Chai",
  price: 25,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nhi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'Ginger Chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
{
  value: 'Ginger Chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
chai.name = "Masala Chai"; // Will not change the name property because writable is set to false
console.log(chai.name); // Ginger Chai

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(`${key}: ${value}`);
}
/*
price: 25
isAvailable: true
*/

// for changing multiple properties of an object at once we can use
/*
Object.defineProperties(chai, {
  name: {
    writable: false,
    enumerable: false,
  },
  price: {
    writable: false,
    enumerable: true,
  },
  isAvailable: {
    configurable: false,
    enumerable: false,
  },
});
*/
