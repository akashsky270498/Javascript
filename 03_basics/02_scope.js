var c = 100;

let a = 200;
let ab = 22;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(ab); // 22 outer global can be accessed but inner variables cannot be accessed outside
  console.log("Inner: ", c); // 30
  console.log("Inner Let: ", a); // 10
}

console.log("Outer", c); // 30 => problem
console.log("Outer Let: ", a); // 200

// var keyword has scope problem

//Functional Scope : with Nested function
function one() {
  const username = "Jack Wills";
  function two() {
    const website = "youtube";
    console.log(`Hi! my name is ${username} & my website is ${website}`); //Hi! my name is Jack Wills & my website is youtube
  }
  //   console.log("Website: ", website);  => RefrenceError: not accesssible "Child func can access parent func variable but Parent function can't access variables of child function."

  two();
}

one();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

if (true) {
  const email = "someone@gmail.com";
  if (email) {
    const location = "Chennai";
    console.log(`My email is ${email} & my Location is ${location}.`); //My email is someone@gmail.com & my Location is Chennai.
  }

  // console.log(location) => Reference error = location can't be access outside its scope same as function
}

// console.log(email) => Reference error = email can't be access outside its scope.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Hoisting

console.log(top(5)); // 6
function top(num) {
  return num + 1;
}

// console.log(bottom(4));  => ReferenceError: Cannot access 'bottom' before initialization
const bottom = function (num) {
  return num + 2;
};

console.log(bottom(6)) // 8

// normal function in JS can be access before its initialization but if we will hold any function inside a variable(known as expression) it cant be accessed before its initialization.