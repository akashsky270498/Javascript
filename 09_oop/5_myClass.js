class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
     return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}


const opener = new User("Shubman Gill", "shubh@reddit.com", "123456");
console.log(opener);
/*
User {
  username: 'Shubman Gill',
  email: 'shubh@reddit.com',
  password: '123456'
}
 */
console.log(opener.encryptPassword());  // 123456abc
console.log(opener.changeUsername()); // SHUBMAN GILL

//BTS
function newUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

newUser.prototype.encryptPassword = function() {
    return `${this.password}xyz`;
}

newUser.prototype.changeUsername = function () {
    return `${this.username.toLowerCase()}`;
}

const bowler = new newUser("Jaspreet Bumrah", "jb93@gmail.com", "1234567");
console.log(bowler);
console.log(bowler.encryptPassword()); // 1234567xyz
console.log(bowler.changeUsername()); // jaspreet bumrah
// Note: The class syntax is a more modern and cleaner way to create objects and handle inheritance in JavaScript.