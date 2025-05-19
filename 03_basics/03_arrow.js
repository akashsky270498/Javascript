const user = {
  username: "Kevin",
  price: 999,
  welcomeMessage: function () {
    console.log(`Hi ${this.username}, welcome to our world.`);
    console.log(this); // this will give current context (values of object)
  },
};

user.welcomeMessage(); // Hi Kevin, welcome to our world.
user.username = "Sam";
user.welcomeMessage(); // Hi Sam, welcome to our world.
console.log(this); // {} In node env here this will give {}, where as in browser it will give window object as in browser global object is window object.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function one() {
  const username = "One";
  console.log(this); // it will give some properties
  console.log(this.username); // undefined
}

const two = function () {
  const username = "Two";
  console.log(this); // it will give some properties
  console.log(this.username); // undefined
};

const three = () => {
  const username = "Three";
  console.log(this); //  {}
  console.log(this.username); // undefined
};

one();
two();
three();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Arrow function
const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(9, 7)); // 16

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 4)); // 9

const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(1, 2, 3));

const show = () => ({ username: "Arrow" });
{
  username: "Arrow";
}

console.log(show());

//Note: In Normal function & Expression this will give some properties but in case of Arrow function it will give {}.
