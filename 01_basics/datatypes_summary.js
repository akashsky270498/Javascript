const age = 32;
const name = "Kl Rahul";
const bigNumber = 234567890987654345678909876n;
const symbol1 = Symbol("123");
const symbol2 = Symbol("123");
console.log(symbol1 === symbol2); // false
const box = null;
let accountNumber;
isLoggedIn = true;

console.table({
  age: typeof age,
  name: typeof name,
  bigNumber: typeof bigNumber,
  symbol1: typeof symbol1,
  box: typeof box,
  accountNumber: typeof accountNumber,
  isLoggedIn: typeof isLoggedIn,
});

/*
┌───────────────┬─────────────┐
│ (index)       │ Values      │
├───────────────┼─────────────┤
│ age           │ 'number'    │
│ name          │ 'string'    │
│ bigNumber     │ 'bigint'    │
│ symbol1       │ 'symbol'    │
│ box           │ 'object'    │
│ accountNumber │ 'undefined' │
│ isLoggedIn    │ 'boolean'   │
└───────────────┴─────────────┘
*/

const arr = ["aarya", "nicely", "coded"];

const obj = {
  name: "Krunal",
  team: "RCB",
  number: 32,
};

const myFunc = function () {};

console.table({ arr: typeof arr, obj: typeof obj, myFunc: typeof myFunc });

/*
┌─────────┬────────────┐
│ (index) │ Values     │
├─────────┼────────────┤
│ arr     │ 'object'   │
│ obj     │ 'object'   │
│ myFunc  │ 'function' │
└─────────┴────────────┘
*/
