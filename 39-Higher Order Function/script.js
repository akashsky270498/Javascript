function hof(func) {
  console.log("Hi, It's me Higer Order Function");
  func();
}

function cb() {
  console.log("Hi, I'm a callback function");
}

hof(cb);

/*
We can pass a function to another function, and we can also return a function from another function. In fact, we can do both. A function that takes another function as an argument or returns a function (or does both) is called a Higher-Order Function. The function that is passed as an argument is called a Callback Function 
*/
