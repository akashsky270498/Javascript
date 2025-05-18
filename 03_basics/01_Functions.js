function callRcb() {
  // = Function definition
  console.log("R");
  console.log("C");
  console.log("B");
}

// callRcb => Function refrence
callRcb(); // => Function execution

// *************************************************************************************************************************

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// addTwoNumbers => Not print anything
addTwoNumbers(); // NaN

function sumOfTwoNumbers(num1, num2) {
  console.log(num1 + num2); // 5
}

// sumOfTwoNumbers(2,3) => not print anything
const sum = sumOfTwoNumbers(2, 3);
console.log("SUM: ", sum); // undefined bcoz we are not returing anything from function.

// *************************************************************************************************************************

function sumOfTwoNums(num1, num2) {
  console.log(num1 + num2);
  //   return num1 + num2;
  let res = num1 + num2;
  return res;
  //   console.log(res) => anything after return keyword will not get executed inside function.
}

const result = sumOfTwoNums(10, 20);

console.log("result: ", result); // 30

// *************************************************************************************************************************

function userLoggedIn(username) {
  return `${username} just logged in.`;
}

userLoggedIn("Philip"); // not print anything
console.log(userLoggedIn("Philip")); // Philip just logged in.
console.log(userLoggedIn()); // undefined just logged in.
console.log(userLoggedIn("")); // just logged in.

// *************************************************************************************************************************

function userLoggedOut(username) {
  if (username === undefined) {
    // if (!username)
    return `Please give the username.`;
  }
  return `${username} logged out successfully.`;
}

console.log(userLoggedOut()); // Please give the username.
console.log(userLoggedOut("Tim David")); // Tim David logged out successfully.

// *************************************************************************************************************************
function hiUser(username = "Josh") {
  if (!username) return `Please pass the username.`;
  return `Hi! ${username}, welcome to user portal.`;
}

console.log(hiUser()); // Hi! Josh, welcome to user portal. [default name will come automatically if we will not pass anything.]
console.log(hiUser("Romario")); //  Hi! Romario, welcome to user portal.

// *************************************************************************************************************************

//rest operator
function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(100, 200, 300, 400, 500)); // [ 100, 200, 300, 400, 500 ] rest will always returns array
// *************************************************************************************************************************
function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice2(100, 200, 300, 400)); // [ 300, 400 ] val1 = 100, val2 = 200
// *************************************************************************************************************************

//Passing objects in function as an arguments

const user = {
  username: "Alex Carey",
  id: 12312,
};

function getUser(anyObject) {
  return `Hi! ${anyObject.username} your id is ${anyObject.id}`;
}

console.log(getUser(user)); //Hi! Alex Carey your id is 12312
console.log(
  getUser({
    username: "marcus Stoinis",
    id: 56789876,
  })
); //Hi! marcus Stoinis your id is 56789876

//Passing Arrays in function as an arguments

const newArray = [1, 2, 3, 4, 5];

function handleArray(anyArray) {
  return anyArray[3];
}

console.log(handleArray(newArray)); // 4
console.log(handleArray([100, 1000, 10000, 100000])); // 100000
