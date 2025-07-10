"use strict"; //Code in this file is written in newer version of JS.

// alert(3+3) we are using pure nodejs engine & not browser engine

console.log(3 + 3); //poor code rediability.

let box = null;
let box1 = undefined;
console.table([typeof null, typeof undefined, typeof box, typeof box1]);

/*
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'object'    │
│ 1       │ 'undefined' │
│ 2       │ 'object'    │
│ 3       │ 'undefined' │
└─────────┴─────────────┘
*/

console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof []); // object
console.log(typeof {}); // object

console.log([] == false);      // true
// console.log([] === false);     // false
console.log(![]);              // false
console.log(!![]);  // true [is truthy value]

console.log(typeof function () {}); // function
console.log(typeof (() => {})); // function

console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof new Boolean(true)); // object

console.log(typeof 123n); // bigint
console.log(typeof BigInt(123)); // bigint
console.log(typeof "123"); // string
console.log(typeof +false); //number
console.log(typeof +true); // number

console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false

/*
Primitive Datatypes: In JS primitive datatypes are immutable and hold actual values.
- number => let age = 3;
- string => let name = "Ricky";
- boolen => const isLoggedIn = false;
- bigInt => let accounId = 345678865456789956789;
- null => null in JS is not just a datatype but is also a standalone value, null is used to represent empty value.
- undefined => undefined is when you defined a varibale but didn't assigned any value.
- symbol => used for uniqueness

Non-primitive datatypes:
- object
- Array
- functions


NaN !== NaN, NaN is only value in JS, that is not equal to itself.
*/
