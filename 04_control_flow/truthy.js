const useremail = [];

if (useremail) {
  console.log("Got user email");
} else {
  console.log("Didn't got any email");
}

//Falsy Values: false, 0, -0, "", null, undefined, NaN, BigInt 0n

//Truthy Values: " ", "0", "false", [], {}, function(){}

if (useremail.length === 0) {
  console.log("Array is empty.");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty.");
}

console.log(false == 0); // true
console.log(0 == " "); // true
console.log(false == " "); // true

//Nullish Colescing Operator [ ?? ] null || undefined.
//The nullish coalescing operator (??) in JavaScript returns the right-hand value only if the left-hand value is null or undefined.
let val1;
val1 = 2 ?? 10;
console.log(val1); // 2
val1 = null ?? 10;
console.log(val1); // 10
val1 = undefined ?? 10;
console.log(val1); // 10
val1 = null ?? 12 ?? 22;
console.log(val1); // 12
val1 = null ?? undefined ?? 20;
console.log(val1); // 20
val1 = null ?? undefined;
console.log(val1); // undefined
val1 = undefined ?? null;
console.log(val1); // null

//Ternary operator
const icecreamPrize = 180;

icecreamPrize <= 100 ? console.log("Affordable") : console.log("Cannot Afford"); // Cannot Afford
