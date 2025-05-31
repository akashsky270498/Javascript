const User = {
  _email: "dk@chatgpt.com",
  _password: "12345678",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return `${this._password}@hit`;
  },

  set password(value) {
    this._password = value;
  },
};

const newUser = Object.create(User);
console.log(newUser.email); // DK@CHATGPT.COM
console.log(newUser._email); // dk@chatgpt.com
console.log(newUser._password); // 12345678
console.log(newUser.password); // 12345678@hit
