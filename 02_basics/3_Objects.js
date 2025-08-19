// We have two ways to declare an object: as Constructor & as Literal
// When we define object using constructor it will like "Singleton".
//Object.create()

//Note => In objects "keys" are bydefault string value you can define of any datatype.
//Object Literals
const myUser = {
  firstName: "Philip",
  "lastName": "Salt",
  location: "Bengaluru",
  email: "saltofrcb@rcb.com",
  isLoggedIn: false,
  loggedInDays: ["Monday", "Saturday"],
};

//accessing object
console.log("Using .:", myUser.firstName); // Philip
console.log("Using [] :", myUser["email"]); // saltofrcb@rcb.com

//problem
console.log("If i will use . for accessing lastName will get error.");
console.log("Accessing lastName using []: ", myUser["lastName"]); //  Salt

//*********************Inserting Symbol in an object************************************** */

//first define it
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const mySecondUser = {
  firstName: "Philip",
  "lastName": "Salt",
  mySym: "myKey1",
  [mySym2]: "myKey2", // correct way to use symbol as a key in the object
  location: "Bengaluru",
  email: "saltofrcb@rcb.com",
  isLoggedIn: false,
  loggedInDays: ["Monday", "Saturday"],
};

// accessing
console.log(mySecondUser.mySym);
console.log(typeof mySym); // symbol
console.log(mySecondUser[mySym2]); // correct way to access symbol from an object
console.log(typeof mySym2); // symbol

//overriding or updting values in objects.
mySecondUser.email = "philsalt@rcb.com";
Object.freeze(mySecondUser); // locking the objects now no one can change or update the values inside this object.
mySecondUser.email = "philip@rcb.com";
console.log(mySecondUser);
/*
{
  firstName: 'Philip',
  lastName: 'Salt',   
  mySym: 'myKey1',    
  location: 'Bengaluru',
  email: 'philsalt@rcb.com',
  isLoggedIn: false,
  loggedInDays: [ 'Monday', 'Saturday' ],
  [Symbol(key2)]: 'myKey2'
}
*/

const myThirdUser = {
  firstName: "Philip",
  "lastName": "Salt",
  mySym: "myKey1",
  [mySym2]: "myKey2", // correct way to use symbol as a key in the object
  location: "Bengaluru",
  email: "saltofrcb@rcb.com",
  isLoggedIn: false,
  loggedInDays: ["Monday", "Saturday"],
};

myThirdUser.greeting = function () {
  console.log("Hello user.");
};

myThirdUser.greetingTwo = function () {
  console.log(`Hello ${this.firstName}.`);
};

console.log(myThirdUser.greeting); // [Function (anonymous)]: function is retured not been executed.
console.log(myThirdUser.greeting()); // Hello user.
console.log(myThirdUser.greetingTwo()); // Hello Philip.
