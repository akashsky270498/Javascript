const user = {
  username: "Kl Rahul",
  isLoggedIn: true,
  loginCount: 12,

  getUserDetails: function () {
    console.log("Got user details from Database");
    // console.log("Username", this.username); 
    console.log(`Username: ${this.username}`) // Kl rahul
    console.log(this)
  },
};

console.log(user.username); // Kl Rahul
console.log(user.getUserDetails()); // Got user details from Database
console.log(this) // {}

function newUser(username, isLoggedIn, loginCount) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    return this;
}

const user1 = newUser('Shreyas Iyer', true, 12);
const user2 = newUser('Rohit Sharma', true, 15);
console.log(user1); //username: 'Rohit Sharma',isLoggedIn: true,loginCount: 15 [overlap the values]
console.log(user1 === user2); // true


const newUser1 = new newUser('Virat Kohli', true, 20);
const newUser2 = new newUser('Rishabh Pant', true, 18);
console.log(newUser1); // username: 'Virat Kohli', isLoggedIn: true, loginCount: 20
console.log(newUser2); // username: 'Rishabh Pant', isLoggedIn: true, loginCount: 18
console.log(newUser1 === newUser2); // false, because they are different objects

console.log(newUser1.contrutor) // undefined, because we didn't define a constructor function