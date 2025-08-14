// inside a class/constructor this will point the object inside normal function this will point window object
//inside addEventListner this will pointt the tag

function hi() {
  //   console.log("hello");
  console.log(this); // will point window object
}

hi();
console.log("================================================================");

const user = {
  firstName: "Java",
  lastName: "Script",
  items: ["A", "B", "C", "D"],
  printTags: function () {
    console.log(this);
  },
};

user.printTags(); // point the object

console.log("================================================================");
const h1 = document.querySelector("h1");

h1.addEventListener("click", function (e) {
  console.log(this); // <h1>'this' keyword in JavaScript</h1>
});
// this = the DOM element that received the event.
// in case of arrow function window object

console.log("================================================================");

class User {
  constructor() {
    this.firstName = "Jhonny Walker";
    console.log(this); // {"firstName": "Jhonny Walker"}
  }

  getUser() {
    console.log(this); //  {"firstName": "Jhonny Walker"}
  }
}

const user1 = new User();
const user2 = new User().getUser(); // this = the instance created from the class.


/*
- this refers to the object that is calling the function, unless it's in a regular function in the global scope (then it’s window), or in an event listener (then it’s the element), or in a class (then it’s the instance).

- Arrow functions take this from where they are created, so they don’t rebind it. Great for class callbacks, bad for object methods and event listeners if you need dynamic this.

Context: Normal Function – this	Arrow Function – this (Lexical binding)
Global function (hi):	undefined (strict) / window (non-strict)	undefined (strict) / window (non-strict)
Object method (printTags):	The object itself	undefined (strict) / window (non-strict)
Event listener:	The element that triggered the event	undefined (strict) / window (non-strict)
Class method (getUser):	The instance of the class	The instance of the class
*/