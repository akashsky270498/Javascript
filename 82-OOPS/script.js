function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - age;
    },
  };
  return user;
}

const user1 = createUser("Shivansh", "Singh", 12);
const user2 = createUser("Rudransh", "Singh", 6);
console.log(user1 === user2); //false
console.log(user1);
console.log(user2);
console.log(user1.getAgeYear());
console.log(user2.getAgeYear());

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.pop === arr2.pop); // true bcoz pop is defined at one address

/*
Encapsulation → Wrapping data and methods into a single unit and restricting direct access to the data.
Abstraction → Hiding implementation details and showing only the essential features to the user.
*/