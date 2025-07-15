let username = "Anurag";

const user = {
  firstName: "Adarsh",
  lastName: "Singh",
  pata: {
    city: "Bangalore",
    pinCode: 876876,
    state: "Karnataka",
    moreDetails: {
      population: 9798897897,
      area: "787 sq km",
    },
  },
  age: 15,
  isGraduate: false,
};

// Object.seal(user) // existing values can be updated but cannot be deleted also we cannot add any new value
Object.freeze(user); // can't update, add or delete anything the object will remain intect.

// IMP:  const means the variable itself is locked, but the contents can be edited if it is an Object or an Array. why bcoz in case of object & array refernce remains the same the content are edited
