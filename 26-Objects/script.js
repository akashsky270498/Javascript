// const user = {
//   firstname: "Shivam",
//   lastname: "Singh",
//   isLoggedIn: true,
//   age: 26,
//   city: "Mumbai",
// };

// const user2 = {
//   firstname: "Shivam",
//   lastname: "Singh",
//   isLoggedIn: true,
//   age: 26,
//   city: "Mumbai",
// };

const myName = "Aditya";

const username1 = "";
const username2 = "";

const user1 = {
  firstName: "Anish",
  lastName: "Singh",
  age: 31,
  city: "Jaipur",
};

const user2 = {
  firstName: "Vicky",
  "last-Name": "Singh",
  Aditya: "Developer",
  age: 37,
  city: "Udaipur",
};

console.log(user2.firstName); // Vicky
console.log(user2["last-Name"]); // Singh
console.log(user2[myName]); // Developer
console.log(user2["first" + "Name"]); // Vicky

const user3 = {
  firstName: "Utsav",
  "last-name": "Verma",
  age: 27,
  address: {
    streetNo: 25,
    landmark: "Red hills",
    city: "Bengaluru",
    state: "karnataka",
    moreDetails: {
      phoneNo: 1234567890,
      pincode: 500082,
    },
  },
};

user3["Education"] = "Graduation";
user3.address.country = "IN";


//Every object will have their own address