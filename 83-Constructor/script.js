// function getBirthYear(age) {
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear
//   };
//   return user;
// }

// const user1 = createUser("Avinash", "Singh", 25);
// const user2 = createUser("Avantika", "Singh", 27);

// console.log(user1);
// console.log(user2.getBirthYear());
// console.log(user1.getBirthYear === user2.getBirthYear);

//====================================================================================================================================

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear: createUser.commonMethods.getBirthYear,
//   };
//   return user;
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// const user1 = createUser("Avinash", "Singh", 25);
// const user2 = createUser("Avantika", "Singh", 27);
// console.log(user2.getBirthYear())

//====================================================================================================================================

function createUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

createUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

createUser.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const user1 = new createUser("Avinash", "Singh", 25);
const user2 = new createUser("Avantika", "Singh", 27);
console.log("user1: ", user1);
console.log("user2 birth year: ", user2.getBirthYear());
console.log("user1 Full Name: ", user1.getFullName());
