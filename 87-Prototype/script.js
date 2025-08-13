class Person {
  live() {
    console.log("Living");
  }
}

class User {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  work() {
    console.log("Working from user side");
  }

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age);
    this.standard = standard;
  }

  study() {
    console.log("Study");
  }
}

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age);
    this.company = company;
  }
  work() {
    console.log("Working");
  }
}

const student1 = new Student("Aman", "Mishra", 32, "BCA");
const employee1 = new Employee("Anurag", "Singh", 72, "Google");
