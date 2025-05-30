let myHeros = ["AB Devilliers", "Chris Gayle", "Virat Kohli"];

let nickHeros = {
  ab: "Mr. 360",
  gayle: "Universe Boss",
  vk: "King",

  getNickName: function () {
    console.log(`My Fullname is ${this.ab}`);
  },
};

Object.prototype.universalMethod = function () {
  console.log("Present in every object");
};

Array.prototype.ArrayMethod = function () {
  console.log("Present inside array only");
};

console.log(nickHeros.universalMethod()); // Present in every object
console.log(myHeros.universalMethod()); // Present in every object
// console.log(nickHeros.ArrayMethod()); // TypeError: nickHeros.ArrayMethod is not a function
console.log(myHeros.ArrayMethod()); // Present inside array only

//Inheritance

const User = {
  username: "Ajinkya Rahane",
  isLoggedIn: true,
};

const Teacher = {
  makeVideo: true,
};

const SupportStaff = {
  isAvaiable: true,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: SupportStaff, // Setting the prototype of TASupport to SupportStaff
};

Teacher.__proto__ = User; // Setting the prototype of Teacher to User

console.log(Teacher.username); // Ajinkya Rahane
console.log(User.makeVideo); // undefined
console.log(TASupport.isAvaiable); // true

//Modern Syntax
Object.setPrototypeOf(SupportStaff, Teacher);
console.log(SupportStaff.makeVideo); // true

let name = "Mayank    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

console.log(name.trueLength()); // True length is: 6
console.log("     Agrawal   ".trueLength());// True length is: 7