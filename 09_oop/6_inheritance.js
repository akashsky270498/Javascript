class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email= email;
        this.password = password;
    }

    addCourse() {
        console.log(`New course is added by ${this.username}`);
    }
}

const newUser = new Teacher("Ravi Shastri", "ravi@bcci.com", "Ravi@123");
newUser.addCourse(); // New course is added by Ravi Shastri
newUser.logMe(); // Username is: Ravi Shastri

const oldUser = new User("Rahul Dravid");
oldUser.logMe(); // Username is: Rahul Dravid
// oldUser.addCourse(); ❌ Will throw error: addCourse is not a method of User

console.log(newUser instanceof User); // true
console.log(newUser instanceof Teacher); // true
console.log(oldUser instanceof User); // true
console.log(oldUser instanceof Teacher); // false
console.log(User instanceof Teacher); // false
console.log(Teacher instanceof User); // false 
/*
User and Teacher are constructor functions (classes), not instances of one another.
User is not an instance of Teacher, and Teacher is not an instance of User.
*/
console.log(User instanceof Function);    // true
console.log(Teacher instanceof Function); // true