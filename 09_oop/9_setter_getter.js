class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  /*
  get email() {
    return `${this.email}.toUpperCase()`;
  }

  set email(value) {
    this.email = value;
  }
*/

  // Note nvr use same property name for getter and setter, it will create an infinite loop. [RangeError: Maximum call stack size exceeded]

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}@hit`;
  }

  set password(value) {
    this._password = value;
  }
}

const userObject = new User("romario@gmail.com", "12345678");
console.log(userObject); // User { _username: 'Andy Flower', _email: 'Flower@gmail.com' }
console.log(userObject.email); // ROMARIO@GMAIL.COM
console.log(userObject.password); // 12345678@hit

// Getters and setters are used to control access and validation of an object's properties while keeping the internal data encapsulated and protected.