const tinderUser = new Object();
console.log(tinderUser); // {}

const tinderUser1 = {};
console.log(tinderUser1); //{}

tinderUser1.id = "123abc";
tinderUser1.name = "Venkatesh";
tinderUser1.isLoggedIn = false;

const nestedObject = {
  email: "venkatesh@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Venkatesh",
      lastname: "Iyer",
    },
  },
};

console.log(nestedObject["fullname"]["userFullname"]["firstname"]); //Venkatesh
console.log(nestedObject.fullname.userFullname.lastname); //Iyer

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = Object.assign(obj1, obj2, obj3); // here obj2 & obj3 will get merged in obj1
const obj5 = Object.assign({}, obj1, obj2, obj3);
const obj6 = { ...obj1, ...obj2, ...obj3 };
console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
  {
    id: 1,
    username: "Abhay Singh",
  },
  {
    id: 2,
    username: "Abhinay Singh",
  },
  {
    id: 3,
    username: "Anubhav Singh",
  },
];

console.log(users[1].username); // Abhinay Singh

console.log(Object.keys(users)); // [ '0', '1', '2' ] indexes of an array it will return bcoz array is also an object in JS
console.log(Object.values(users)); // [{ id: 1, username: 'Abhay Singh' },{ id: 2, username: 'Abhinay Singh' },{ id: 3, username: 'Anubhav Singh' }]

console.log(Object.keys(tinderUser1)); // [ 'id', 'name', 'isLoggedIn' ] always returns array
console.log(Object.values(tinderUser1)); // [ '123abc', 'Venkatesh', false ]
console.log(Object.entries(tinderUser1)); // [[ 'id', '123abc' ],[ 'name', 'Venkatesh' ],[ 'isLoggedIn', false ]]

console.log(tinderUser1.hasOwnProperty("isLoggedIn")); // true
