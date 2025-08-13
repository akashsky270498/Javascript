class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static hi = "Hello";

  static {
    this.run = "Running";
    this.getAge = function () {
      return this.age;
    };
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

user1.hi; // undefined
CreateUser.hi; // 'Hello'
const user1 = new CreateUser("Jaydon", "Seales", 21);
const user2 = new CreateUser("Shai", "Hope", 32);
console.log("U1: ", user1);
user1.run; // undefined
CreateUser.run; // running
CreateUser.getAge(); // undefined
