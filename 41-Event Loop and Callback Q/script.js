/*
The Event Loop checks if the Call Stack is empty.
If it is, and there are functions in the Callback Queue (from async code like setTimeout, fetch, etc.),
the Event Loop moves them into the Call Stack to be executed.

-> Code that runs directly in the Call Stack is synchronous.

-> Code that goes through Web APIs and the Callback Queue is asynchronous.

-> Some code like setTimeout, fetch, or DOM events goes to Web APIs first.
*/

console.log("Hi-1");

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

function hello() {
  console.log("Hello World!!");
}

hello();
setTimeout(hello, 1000);
setTimeout(hello, 2000);
setTimeout(function () {
  console.log("Hello!!!");
});

console.log("Hi-2");

/*
 Hi-1
 0
 1
 2
 3
 4
 Hello World!!
 Hi-2
 Hello!!!
 Hello World!
 Hello World!
 */
