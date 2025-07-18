- const => const is a keyword which is used to define a value that can not be changed further.
  ex: const x = 10 --> you can not do x = 20.

- let => let is also a keyword which is used to define a variable whose value can be changed further.
  ex: let x = 10 --> you can do x = 20.

- var => var is also a keyword which is use to define a variable which can also be changed further like let keyword, but it should be avoided as it does not respect block scope. It is a function scoped that can cause unexpected bugs.

- It is allowed to initialize a variable without any value using let keyword (let a) bydefault it will store "undefined".

- # It is also allowed to assign a value directly in a variable without using cont, let & var, it becomes "global variable" which is bad practise and can lead to bugs or memory issues.
- Datatypes => Number, Big Int, Boolean, String, Null , Undefined, Symbol & Object(function || array).

- Based on how we are storing & how we can access Datatypes are divided into two types:
- primitive: (call by value).
- Non-primitive: (call by reference)

- Js is dynamically typed language.

===============================================================================================================================
Stack (Primitive Data Types):
When a variable is stored in the stack, a copy of the value is created.

This means any changes made to the copied value do not affect the original variable.

Primitive data types like number, string, boolean, null, and undefined are stored in the stack.

Heap (Non-Primitive Data Types):
When a variable is stored in the heap, a reference to the actual memory location is stored.

This means any changes made through that reference directly affect the original value.

# Non-primitive data types like objects, arrays, and functions are stored in the heap.

- Hoisting => Hoisting in JS means that "variables & function" declarations are moved to the top of thier scope(page or function) before the code runs. In other word we can use function & variables before they are written into the code.

==> Remember: function declarations are fully hoisted, In case of variables (var, let & const) these are also hoisted but let & const are not initialized but "var" is initialized with value "undefined"

sayHello(); // ✅ This works because the function is hoisted

function sayHello() {
console.log("Hello!");
}

console.log(name); // undefined (variable is hoisted, but not its value)
var name = "Alice";

console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError
console.log(c); // ✅ undefined (because of var)

let a = 10;
const b = 20;
var c = 30;

# Hoisting in JavaScript is the behavior where variable and function declarations appear to move to the top of their scope before the code runs. In reality, this happens during the memory creation phase of the JavaScript engine, where all variable and function declarations are stored in memory. Variables declared with var are hoisted and initialized with undefined, so they can be accessed before their declaration but will return undefined. However, variables declared with let and const are also hoisted but not initialized, which means accessing them before their declaration will throw a ReferenceError because they exist in a “Temporal Dead Zone” (TDZ). Function declarations (defined with the function keyword) are fully hoisted, meaning both their name and body are stored in memory, allowing you to call them even before their definition in the code. In contrast, function expressions and arrow functions behave like variables—only the variable name is hoisted (with var as undefined), so calling them before their definition results in an error. This is why understanding hoisting helps avoid bugs and unexpected behavior in JavaScript code.

- undefined => A variable is declared but not given (assigned) any value.
  ex: let a; (a = undefined)

- null => You have intentionaly set the variable to have "no value".
  ex: let a = null;
  ===============================================================================================================================
- Closure => A closure is a function that remembers the variables of it surrounding scope even if that scope has finished its execution.

function outerFunction() {
let name = "Alice"; // This is the variable to "remember"

return function innerFunction() {
console.log("Hello, " + name); // Still remembers 'name'
};
}

const greet = outerFunction(); // outerFunction is done running
greet(); // Output: Hello, Alice
===============================================================================================================================

- Callback => A callback in JS is a simple function that is passed as an argument to another function, and it gets called when the main function finishes its execution. It is a way of to run the code after something else happens especially for things like waiting for data, timeouts, user actions etc.

function orderFood(callback) {
console.log("Ordering food...");
setTimeout(() => {
console.log("Food is ready!");
callback(); // Call the function passed as an argument
}, 2000);
}

function eatFood() {
console.log("Now eating the food.");
}

orderFood(eatFood);

===============================================================================================================================

- Promise => A promise in JS is an object that represents the result of an asynchronous operation.
  It can be in one of the three states:
- Pending: The operation is still ongoing.
- Fullfiled: The operation got successfully completed. (Resolved)
- Rejected: The operation got failed. (Reject)
  we handle success case with (.then()) & failure case with (.catch()).

const orderFood = new Promise((resolve, reject) => {
const foodDelivered = true;

if (foodDelivered) {
resolve("Food delivered!");
} else {
reject("Delivery failed.");
}
});

orderFood
.then(message => console.log("Success:", message))
.catch(error => console.log("Error:", error));

===============================================================================================================================

- setTimeout() => The purpose of setTimeout() function is to delay the execution of specified piece of code || function for a certain period of time. This will not affect the execution of other parts of code.

function test() {
console.log("I will get printed after 2 seconds.");
};

setTimeout(test, 2000)

===============================================================================================================================

- async => async is a keyword that you put before the function to make it return a Promise automatically.
- await => await is a keyword that is used inside the async function that pauses the execution of next line of code until the Promise is Resolved or Rejected.

async function makeTea() {
await boilWater(); // wait for water to boil
addTeaLeaves(); // only runs after water is ready
pourIntoCup();
drink();
}
===============================================================================================================================

- this => "this" (it's a keyword) refers to the object that is currently executing the code.

const person = {
name: 'Alice',
greet() {
console.log('Hello, my name is ' + this.name);
}
};

person.greet(); // Output: Hello, my name is Alice

- In case of an object it refers to the object itself.
- in case of normal function "this" is undefined.
- In case of arrow function "this" is lexically bound -> means it takes the value from its parental function.

===============================================================================================================================

- == => loose equality, it compares values after converting the types if needed(type coercion).
- === => strict equality, it compares value & types with converting anything.

console.log(5 == "5") //true bcoz "5" is converted into a number
console.log(1 == true) //true bcoz true gets converted into 1
console.log(null == undefined)// true special case in JS
console.log(5 === "5")//false bcoz 5 is a number & "5" is a string
console.log(1 === true)// false bcoz 1 is a number & true is a boolean
console.log(null === undefined) //fase bcoz both are of different types.
===============================================================================================================================

- Implicit Type Coercion => ITC in JS happens when the language automatically converts the one Datatype into another Datatype,
  with out you writing any code to do it.

console.log(5 + "5") //55, 5 is coerced into string "5"
console.log(1 + true) //2, true is coerced into 1
console.log(null == undefined)// true, (special case:- null & undefined are loosely equal)
console.log(5 == "5")//true, 5 is coerced into string "5"
===============================================================================================================================

- Higher Order Function => A Higher order function is a function in JS which either takes any functiion as an argument or returns any function as a result or both.

===============================================================================================================================

- Prototype => In JS, every object has a hidden property called **prototype**,that links to another object called its prototype.
  if u try to access any property or method of any object & let's say if that property or method doesn't exist in that object that, then JS looks for it in the prototype is called prototype chaining & that how inheritance works on JS.
  ===============================================================================================================================
- Local storage => Local storage is the way to store data in the browser that lasts long until you manually deletes it. Even after the opening & closing of the browser also even after turing off your compter , the data will be there in the computer.

- Session storage => Session storage keeps the data only for the current tab or window, once you close the tab or window the data will get vanished.

===============================================================================================================================

- setImmediate() => Runs the code after the current phase of the event loop finishes in the next phase of the event loop cycle but - "as soon as possible".
- # setTimeout() => Runs the code after the current phase of the event loop finishes in the next phase of event loop cycle but after a minimum delay even if (0ms).
- Nodejs Single Threaded => Nodejs is single threaded because it uses an "Event driven & Non-blocking(asynchronous)" I/O model.
  This design helps it to handle many connections at the same without creating a new thread for each one. It makes nodejs fast & efficient, especially for heavy I/O tasks like reading files, accessing databases or calling APIs.
  ===============================================================================================================================
- Event loop => The event loop is the mechanism in JS that allows it to handle multiple operations like (Api calls, timers, user input etc) without blocking the main thread. It constantly checks if the call stack is empty, is so it picks the tasks from the queue & executes them. This helps JS run asynchronously, even though it's single- threaded.

Ex:
console.log("Start");

setImmediate(() => {
console.log("Set Immediate");
});

setTimeout(() => {
console.log("Set Timeout");
}, 1000);

console.log("End");

// o/p:
// Start
// End
// Set Immediate
// Set Timeout

===============================================================================================================================

- Middleware: Middleware is expressJs is a function that runs before the request reaches to the controller. It can:
- Check and change the request & response.
- Add security checks.
- Log details.
- Handle errors.

# Every middleware recieves three arguments (req, res, next). The next() function pass the control to next middleware in the line.

- # Event emitter => In Nodejs, an event emitter is a built-in module that create, emit & listen to any custom events. Think of it like a communication system between different parts of your application -> "When this happens, do this".
- Bind Method => The bind() method in JS always creates a new function with a permanently fixed "this" value. This ensures the function always uses the same context (this), no matter how or where it is called.

problem:-
const obj = {
name: "Alice",
greet() {
console.log(`Hello ${this.name}`) //
}
};

setTimeout(obj.greet, 1000) // Hello undefined

solution:-
const obj = {
name: "Alice",
greet() {
console.log(`Hello ${this.name}`) //
}
};

const fixedValue = obj.greet.bind(obj);
setTimeout(fixedValue, 1000) // Hello Alice

===============================================================================================================================

- Cloning the object => In JS, cloning the object means creating a new object with same properties & values as the original object.

ex:
//Shallow clone using Object.assign
const originalObj = { 1: "A", 2: "B" };
const clonedObj = Object.assign({}, originalObj);
console.log("Cloned Object: ", clonedObj); //{ '1': 'A', '2': 'B' }

//Shallow Clone using spread operator.
const cloneUsingSpread = { ...originalObj };
console.log("Clone using Spread: ", cloneUsingSpread); //{ '1': 'A', '2': 'B' }

//Deep clone using JSON.parse & JSON.stringify
const original = {
a: 1,
b: {
c: 3
}
};

const obj = Object.assign({}, original);
const obj1 = {...original};
const deepObject = JSON.parse(JSON.stringify(original));

console.log(obj); //{ a: 1, b: { c: 3 } }
console.log(obj1); //{ a: 1, b: { c: 3 } }
console.log(deepObject); //{ a: 1, b: { c: 3 } }

===============================================================================================================================

- # Memoization => Memoization is the technique used to speed up the function calls by storing or caching the result of function for a given input. If the same input occur again, the function returns the stored results instead of recalculating it.

- Synchronous programming => Tasks are executed one after the another (in-sequence), each tasks must be finished before the another starts.

- Asynchronous programming => Tasks can start exeuting before the other gets finished, allowing each task to run independently.

===============================================================================================================================

- Handling erros:-
- Using try catch block.
- Using error handling middlewares.
- Using promise (.catch).
- Using validation libraries.
- Using try cacth with async-await.
- # Using event listeners (process.on()).
- # Event Bubbling => Event bubbling(It is usually sequential in JS) is a mechanism in which the an event start from its target element & propagates up to its ancestors (parent element) in the DOM hierarchy.

- # Arrow function => Arrow function in JS is a short hand syntax for writing a function that uses "=>" symbol & they dont have thier own "this" they inherit it from thier surroundings.
- querySelector => A versatile method that let you select any element using CSS selectors (like .class #id tag names). Useful when you need flexibility in selecting different types of element.

- getElementById => A faster method that retrives an element only by its id. Useful when you know the exact id & want a better performance.

===============================================================================================================================
Event Delegation => Event delegation is a technique where you add one event listener to a parent element instead of adding event listerners to each child.
It works bcoz of event bubbling, when an event happens in the child, it "bubbles up" to its parent.
===============================================================================================================================

- event.preventDefault() => We use event.prventDefault() method to stop the browser from performing the default action for an event.
  ex: On clicking the submit button the page usually reloads if we want to stop we can use event.preventDefault().

===============================================================================================================================

- map() => map() function is used to create a new array by applying the function to each element of the array without modifying the existing array.

const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map(num => num \* 2)
console.log("Original Array: ", arr) // [ 1, 2, 3, 4, 5 ]
console.log("Resultant Array: ", doubleArr) // [ 2, 4, 6, 8, 10 ]

===============================================================================================================================

- reduce() => The reduce() function in JS is used to iterate over an array & accumulates a single value based on the callback function. It process each element of an array & reduce it to a single number.

const arr = [1,2,6,4,78,9,0,];

const result = arr.reduce((acc, currValue) => {
const sum = acc + currValue;
return sum
}, 0)

console.log(result) //100

===============================================================================================================================

- splice() = Splice() function changes the original array by adding or removing elements.
- slice() => Slice() function creates returns the new array without modifying the original array.

const arr = [1,2,6,4,8,9,0];
const arr1 = [2,3,4,2,2,6,7,8];

const splice1 = arr.splice(2,3);
const slice1 = arr1.slice(2,3)
console.log(splice1) // [6,4,8]
console.log(slice1) // [4]
===============================================================================================================================

- fetch() => fetch() function in JS is used to make the network requests like getting data from API or sending data to a server.
  fetch() function always return promise, means it handels the request asynchronously(it won't block the rest of your code).

ex:
fetch('https://api.example.com/data')
.then(response => response.json()) // Convert response to JSON
.then(data => console.log(data)) // Use the data
.catch(error => console.error('Error:', error)); // Handle errors
===============================================================================================================================

- Scope of Variables => scope of variables in JS define till where the value of variabel if accessible or usable.

- Global variable => Global variable is accessible every where in the code.
- Local variable => Local variable is accessible only inside the block, function or inside the module of the code where it is defined.

ex:
const globalVar = "Hi, I am global variable!!";

function test() {

    const localVar = "I am local variable";
    console.log("GC: ", globalVar);//Accessible
    console.log("LC: ", localVar); //Accessible

};

test();

console.log("GC: ", globalVar); //Accessible
console.log("LC: ", localVar); //Not Accessible

===============================================================================================================================

- cookie => A cookie is the small piece of data stored in the browser by the website to remember information like login, user preference or tracking data. It is automatically sent to the server with every HTTP request.

ex:
document.cookie = "username=John; path=/; expires=Fri; 31 Dec 2025 23:59:59 GMT" //create
console.log(document.cookie) // read
===============================================================================================================================

- Currying => Currying is a technique in JS where a function that takes multiple arguments are transformed into a sequence of functions, each taking one argument at a time.

function add(a,b){
return a + b;
}
function curryed(a) {
return function(b) {
return a + b
}
}
===============================================================================================================================

- IIFE => Self-invoking function (Immediately Invoked Function Expression) IIFE is a function that immediately executes after it is defined. It is typically used to create private scope & avoid polluting the global namespace.

- An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that runs as soon as it is defined. We use IIFEs to execute code immediately and to avoid polluting the global scope with variables.
  ex:
  (function(){
  console.log("IIFE executing...")
  })()

===============================================================================================================================

- Streams => Stream in nodejs are object that let you read or write data piece by piece (in chunks) instead of loading it all the into memory at once. They are used to handle large files & real time data.

ex:
const fs = require('fs');

//Reading data in chunks
const readData = fs.createReadStream('example.txt');
readData.on('data', (chunks) => {
console.log(`Reading Data: $(chunks)`);
})
===============================================================================================================================

- Clustering in Node.js means running multiple instances (copies) of your Node.js application simultaneously. These instances are called "worker processes", and they all share the same server and port.

By default, Node.js runs on a single CPU core, which can limit performance. Clustering allows your app to utilize all CPU cores, enabling it to handle more users and concurrent requests at the same time.

===============================================================================================================================

- Buffer => A buffer is a store in memory used to store raw binary data like - images, files or network data. So that nodejs can process it efficiently, especially when data arrives in chunks(like from streams).

ex:
const fs = require('fs');

// Reading a file as a buffer
fs.readFile('image.png', (err, data) => {
if (err) throw err;
console.log(data); // data is a Buffer
});

===============================================================================================================================

- Passport.js => Passport.js is a library used for user authentication. It supports multiple features like login with google, facebook, username & password.

===============================================================================================================================

- Kafka => Kafka is a tool that helps sending & recieving messages between systems in real-time, especially when handling a large amount of data.

===============================================================================================================================

- Session based authentication => In session-based authentication, the server stores the login information and gives a cookie to the user to stay logged in.

- Token based authentication => In token-based authentication, the server doesn't store login information. It gives a token to the user after login, and the user must send this token with every request.

===============================================================================================================================

- Rate limiting => Rate limiting is a technique used to control number of API requests a client can make within a specific time period.
- It hepls to:-
- Prevent overloading from server.
- Stop abusing(like span or attacks).
- Make sure everyone gets a fair chance.

===============================================================================================================================

- # CORS => CORS (Cross Origin Resource Sharing) is a security feature that control which domains are allowed to access the resources on a web server. It prevents the unauthorized websites from requests to your server, protecting user data.

- HTTP codes => HTTP status code indicate the result of the request. They help the client to understand the server response.

===============================================================================================================================

- Securing sensitive data in API:-
- HTTPS => Encrypts data during transit.
- Input validation / sanitization => Blocks malicious input (SQL Injection).
- Authentication => Verifies who the user is ?
- Authorization => Controls what user can access ?
- Secure Headers => Protect against XSS, clickjacking etc.
- Rate limiting / Throttling => Prevent from brute force & abuse.
- Data Encryption at Rest => Protects stored data.

===============================================================================================================================

- Why is JWT commonly used ?
- JWT is commonly used because it is stateless, self-contained, easy to validate on the server making it scalable for the distributed system.

===============================================================================================================================

- Authentication => Authentication confirms 'who you are'.
- # Authorization => Authorization confirms 'what you can do'
- MVC => MVC is a design pattern used to seprate bussiness logic.
- Model -> Manages the data & bussiness logic (eg. databases)
- View -> Handles the user interface (what users sees)
- Controller -> Act as middle man, process the user input and updates the view or model.

===============================================================================================================================

- Rest v/s GraphQl => Rest gives you a set meal. GraphQl let u pick exactly what u want from the buffet with a single plate.

===============================================================================================================================

- Docker => Docker is tool that lets you package your app & everything that it needs into a small unit called container, so that it can run anywhere, fast, safely & consistently.

===============================================================================================================================

- CI/CD (Continous Integration/Continous Deployment) => CI/CD is a process where code is automatically tested, build & deployed so that developer can push there changes faster & safely.
- CI => Check & build code when developer commits.
- # CD => Push working code to live server automatically.
- Clound Computing => Cloud computing refers to the delivery of computing resources like (servers, databases, networking, software, storage) over the internet, allowing users to access and use resources on-demand without owing the physical infrastructure.

===============================================================================================================================

- # Kubernetes => kubernetes is an open source system for automating the deployments, scaling and management of containerized applications. It helps manage clusters of machines, ensuring that applications run smoothly, are easily scaled and available during failures.

- Debugging => Debugging is the process of identifying, analysing & fixing the defects in the code to restore expected functionality. Debugging often involves using tools like debugger, logs & tests to pinpoint the issues.

- Setter's and Getter's are used to control access and validation of an object properties while keeping the internal data encapsulated and protected.
