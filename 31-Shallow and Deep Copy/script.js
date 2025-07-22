const username = "Anurag";
let username2 = username; //till here address of username and username2 will be same as both have same values stored in it.
username2 = username + " Singh"; // here the address will get changed.

console.log("Username: 2", username2);

//Array
const fruits = ["Mangoes", "Apple", "Papaya"];

// const newFruits = fruits; // wrong way completely

const newFruitsArray = [];
const newFruitsTray = Object.assign(newFruitsArray, fruits);
console.log("New Fruits Tray: ", newFruitsTray);
const fruitsTray = [...fruits];

const concatFruits = [].concat(fruits);
const slicedFruits = fruits.slice();

fruitsTray.push("Grapes");
console.log("Fruits Tray :", fruitsTray);
console.log("Fruits after updating: ", fruits);

//Objects

const user1 = {
  firstName: "Anurag",
  lastName: "Singh",
  pata: {
    city: "Delhi",
    pincode: 989888,
  },
  subject: ["Physics", "CS", "Maths"],
};

//Shallow Copy
const user2 = {};
Object.assign(user2, user1);
const user3 = { ...user1 };

console.log("user 1: ", user1);
console.log("user 3: ", user3);

// problem with Shallow copy is update will make changes in both the objects 
user3.subject.push("Chemistry");
console.log(
  "*******************************After assigning**************************************"
);
console.log("user 1: ", user1);
console.log("user 3: ", user3);

//Deep Copy

const deepCopy = JSON.parse(JSON.stringify(user1));

deepCopy.subject.push("Hindi");
deepCopy.pata.streetNo = 98;
console.log("user 1: ", user1);
console.log("Deep copy: ", deepCopy);
