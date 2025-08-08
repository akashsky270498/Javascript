const user = {
  firstname: "Aarambh",
  lastname: "Singh",
  age: 23,
  getFullName: function () {
    return `${user.firstname} ${user.lastname}`;
  },
//   address: {
//     city: "Chennai",
//   },
};

console.log(user.address); // undefined
// console.log(user.address.city); // RefrenceError
if (user.address) {
  console.log("Using if-else: ", user.address.city);
}
console.log("Using &&: ", user.address && user.address.city); // undefined
console.log(user.address?.city); // undefined
console.log(user.getFullName()); // Aarambh Singh
console.log(user.getFullName?.())// undeifned if function is not defined
