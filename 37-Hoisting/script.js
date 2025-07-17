console.log("a: ", a); // undefined

var a = "Anurag";

// console.log("b", b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// console.log("c", c); // Uncaught ReferenceError: Cannot access 'b' before initialization

const b = "Anurag";
let c = "Anurag";

const yes = greetings(); // Hi...
console.log(yes); // yes

//function declaration, function definition
function greetings() {
  console.log("Hi...");
  return "yes";
}

sayHello(); //Uncaught ReferenceError: Cannot access 'sayHello' before initialization

//function expression, function definition
const sayHello = function () {
  console.log("Say hello");
};

sayHellow();
var sayHellow = function () {
  // sayHello is not a function
  console.log("Say hello");
};

/*
Hoisting in JavaScript is the behavior where variable and function declarations appear to move to the top of their scope before the code runs. In reality, this happens during the memory creation phase of the JavaScript engine, where all variable and function declarations are stored in memory. Variables declared with var are hoisted and initialized with undefined, so they can be accessed before their declaration but will return undefined. However, variables declared with let and const are also hoisted but not initialized, which means accessing them before their declaration will throw a ReferenceError because they exist in a “Temporal Dead Zone” (TDZ). Function declarations (defined with the function keyword) are fully hoisted, meaning both their name and body are stored in memory, allowing you to call them even before their definition in the code. In contrast, function expressions and arrow functions behave like variables—only the variable name is hoisted (with var as undefined), so calling them before their definition results in an error. This is why understanding hoisting helps avoid bugs and unexpected behavior in JavaScript code.
*/
