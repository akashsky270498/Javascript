function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (value) {
      this._email = value;
    },
  }),
    Object.defineProperty(this, "password", {
      get: function () {
        return `${this._password}@hit`;
      },
      set: function (value) {
        this._password = value;
      },
    });
}

const newUser = new user("jittu@fox.com", "12345678");
console.log(newUser.email); // JITTU@FOX.COM
console.log(newUser._email); // jittu@fox.com
console.log(newUser.password); // 12345678@hit
console.log(newUser._password); // 12345678
//Note: remember we can access the _email and _password properties directly, but it's not recommended as it breaks encapsulation.

// also under function define with email & password
