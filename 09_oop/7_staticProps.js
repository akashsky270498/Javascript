class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }

  static createId() {
    return `112233`;
  }
}

const newUser = new User("Josh Hazlewood");
// console.log(newUser.createId()); ❌ Will throw error: createId is not a method of User instance

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const oldUser = new Teacher("Pat Cummins", "pat@fox.com");
// console.log(oldUser.createId());
console.log(oldUser.email); // pat@fox.com

console.log(User.createId()); // 112233
console.log(Teacher.createId()); // 112233


// Note: Static Method defined inside the class can be used with the class name directly, not with the instance of the class.
// Static methods are not available on instances of the class, only on the class itself.