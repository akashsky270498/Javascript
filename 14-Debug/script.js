var firstName = "Adarsh";
let lastName = "Nigam";
let age = 23;
const year = 1997;

const userInfo =
  "My name is " + firstName + " " + lastName + " & I am " + age + " years old.";
console.log("userInfo: ", userInfo);

/*
- const => const is a keyword which is used to define a value that can not be changed further. ((We cannot override the values)
ex: const x = 10 --> you can not do x = 20.

- let => let is also a keyword which is used to define a variable whose value can be changed further.  (we can override the values)
ex: let x = 10 --> you can do x = 20.

- var => var is also a keyword which is use to define a variable which can also be changed further like let keyword, but it should be avoided as it does not respect block scope. It is a function scoped that can cause unexpected bugs.

- It is allowed to initialize a variable without any value using let keyword (let a) bydefault it will store "undefined".

- It is also allowed to assign  a value directly in a variable without using const, let & var, it becomes "global variable" which is bad practise and can lead to bugs or memory issues.


-> diff b/n let & var
1. Let is a blocked scope. Var is a function scoped can be accessed outside its blocked scope.
2. let & const can't be accessed before its initialization, var can be accessed before its initilzation with value called undefined
*/
