const username = "Anurag";
let userAge = 23;
var a = 50;

function add() {
  const username = "Sameer";
  const x = 23;
  const y = 12;
  console.log(x + y);
  console.log(username); // Sameer
}

function subtract() {
  const x = 23;
  y = 11;
  console.log(x - y);
  console.log(username); // "Anurag"
}

add();
subtract();

console.log("Program ends");

// Block and Lexical scope

function parent() {
  const x = 15;
  const y = 20;
  const z = 32;

  function child() {
    const childName = "Golu";
    console.log("childName: ", childName);
    console.log("Z from parent: ", z);

    if (true) {
      let c = 20;
      var d = 22;
      console.log("C: ", c);
      console.log("D: ", d);
    }
    console.log("D: ", d); // 22 bcoz of var (this is block scope)

    function grandChild() {
      const grandChildName = "Molu";
      console.log("Grand Child Name: ", grandChildName);
      console.log("username from global: ", username);
    }
    grandChild();
  }
  child();
}

parent();

// Note: parent & child are lexical scope for grandChild
/*
suppose if i eclare one variable without using var,let and const lets say "num2" anywhere inside or outside the function it will become window object and it will be accessible from anywhere, to avoid this we use 'use strict'.
*/
