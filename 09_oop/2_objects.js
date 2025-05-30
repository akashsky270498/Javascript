function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2 [in JS functions are object so you can attach properties to them]
console.log(multipleBy5.prototype); // {}

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  return this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`username: ${this.username} score: ${this.score}`);
};

const user1 = new createUser("Yuzvendra Chahal", 10); // username: Yuzvendra Chahal score: 10
const user2 = new createUser("Sai Sudarshan", 15); // username: Sai Sudarshan score: 15

console.log(user2.printMe()); // username: Sai Sudarshan score: 15
console.log(user2.increment()); // 15
console.log(user2.score)  // 16

/*
Creates a brand new empty object.
→ Like saying: "Hey JavaScript, give me a fresh object."

Connects that object to the constructor's prototype.
→ This means: The new object can use any functions or properties written on the .prototype of the constructor.

Calls the constructor function with this pointing to the new object.
→ So when the constructor uses this.name = ..., it's setting that property on the new object.

Returns the new object automatically (unless you manually return a different object).
→ If you don’t say “return something else,” JavaScript gives you the object it made in step 1.


************************************************************************************************************
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/