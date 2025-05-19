//IIFE => Immediately Invoked Function Expression

//- IIFE => Self-invoking function (Immediately Invoked Function Expression) IIFE is a function that immediately executes after it is defined. It is typically used to create private scope & avoid polluting the global namespace.

// => for writing two iffe one after the another use ";" else you will get TypeError.
(function iife() {
  console.log("Named IIFE"); // Named IIFE
})();

((dbName) => {
  console.log(`${dbName} Database connected successfully.`); //Mongo Database connected successfully.
})("Mongo");
