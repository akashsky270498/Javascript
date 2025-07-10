class User{
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    };
    
    encryptPassword() {
        return `${this.password}dfghjklkjh`
    };
    
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
};

const user1 = new User("Swapnil Sahu", "swap@gmail.com", "Swapnil@12");

console.log("User 1", user1);
console.log(user1.username)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())
