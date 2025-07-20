const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9];

const joinedArray = [...num1, ...num2, 10, 11, 12, 13];
console.log("Joined Array: ", joinedArray);
/*
Joined Array:  [
   1, 2, 3,  4,  5,  6,
   7, 8, 9, 10, 11, 12,
  13
]
*/

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(...joinedArray)); // 91

const user = {
  name: "Anshul Kamboj",
  age: 23,
  education: "Bachelors",
};


const updatedUser = { ...user, city: "Chennai" };
console.log(updatedUser)

