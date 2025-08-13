class CreateUser {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }

    getFullName() {
        console.log("Hii!!")
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 = new CreateUser("Aman", "Kharwal", 25);
const user2 = new CreateUser("Pappu", "Yadav", 30);
console.log(user1.getFullName())
console.log(user2.getBirthYear())
console.log(user2)
user2.age = 17; //we can update it
console.log(user2)

class createStudent {
    #age
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.#age = age
    }

        getBirthYear() {
            return new Date().getFullYear() - this.#age;
        }

        #getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    
}


const student1 = new createStudent("Madhav", "Alkapuri", 21);
const student2 = new createStudent("Sunanda", "Sharma", 19);
console.log(student1)
// console.log(student1.#getFullName()) // Property '#getFullName' is not accessible outside class 'createStudent' because it has a private identifier
student1.age = 9
console.log(student1); // We can't update the student here