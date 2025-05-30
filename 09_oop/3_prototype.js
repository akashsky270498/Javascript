// Array declaration
let myHeros = ["AB Devilliers", "Chris Gayle", "Virat Kohli"];

// Object with nicknames and a method
let nickHeros = {
  ab: "Mr. 360",
  gayle: "Universe Boss",
  vk: "King",

  // Method to print a nickname
  getNickName: function () {
    console.log(`My Fullname is ${this.ab}`);
  },
};

// Adding a method to Object prototype (will be available to all objects and arrays)
Object.prototype.universalMethod = function () {
  console.log("Present in every object");
};

// Adding a method to Array prototype (available only to arrays)
Array.prototype.ArrayMethod = function () {
  console.log("Present inside array only");
};

// Testing prototype methods
console.log(nickHeros.universalMethod()); // ✅ Works: inherited from Object.prototype
console.log(myHeros.universalMethod());   // ✅ Works: inherited from Object.prototype

// console.log(nickHeros.ArrayMethod());  ❌ Will throw error: not available to plain objects
console.log(myHeros.ArrayMethod());       // ✅ Works: available only to arrays

// ==========================
// Inheritance Example
// ==========================

// Base object
const User = {
  username: "Ajinkya Rahane",
  isLoggedIn: true,
};

// Another object
const Teacher = {
  makeVideo: true,
};

// Another object for support team
const SupportStaff = {
  isAvaiable: true,
};

// TASupport inherits from SupportStaff using __proto__
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: SupportStaff,
};

// Teacher inherits from User
Teacher.__proto__ = User;

console.log(Teacher.username);     // ✅ Inherited from User
console.log(User.makeVideo);       // ❌ undefined: User doesn't have makeVideo
console.log(TASupport.isAvaiable); // ✅ Inherited from SupportStaff

// Modern way to set prototype (Teacher is now prototype of SupportStaff)
Object.setPrototypeOf(SupportStaff, Teacher);
console.log(SupportStaff.makeVideo); // ✅ Now inherited from Teacher

// ==========================
// String Prototype Extension
// ==========================

// Custom method to calculate true (trimmed) length of a string
String.prototype.trueLength = function () {
  console.log(`${this}`); // prints original string
  console.log(`True length is: ${this.trim().length}`); // prints trimmed length
};

let name = "Mayank    ";
console.log(name.trueLength()); // Output: True length is: 6

console.log("     Agrawal   ".trueLength()); // Output: True length is: 7
