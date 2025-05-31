function setUsername(username) {
  //complex db calls
  this.username = username;
}

function createUser(username, age, isLoggedIn) {
  //   setUsername(this.username);
  setUsername.call(this, username);
  this.age = age;
  this.isLoggedin = isLoggedIn;
}
const user = new createUser("Shikhar Dhawan", 37, true);
// console.log(user) createUser { age: 37, isLoggedin: true }
console.log(user); // createUser { username: 'Shikhar Dhawan', age: 37, isLoggedin: true }

//Note: this keyword will get confused for its current context so thats why we need to use call method.
