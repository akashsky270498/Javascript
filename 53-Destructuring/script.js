const colors = ["red", "pink", "black", "white", "green", "orange"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//With any name we can de-structure the array
// Order matters here
const [color_1, color_2, color_3, color_4, color_5, color_6] = colors;
console.log(color_1, color_2);

//destructring any individual value from array
const [, , thirdColor] = colors;
console.log(thirdColor);

const { 3: color3, 4: color4 } = colors;
console.log(color3, color4);

//Objects: we can de-str but with the help of keys
//Order doesn't matter here
const user = {
  name: "Anurag Singh",
  age: 27,
  address: {
    city: "Hyderabad",
    state: "Telangana",
  },
};

// -> Normal de-str

// const { name, age, address } = user;
// console.log(name, address);

// -> with another name also we can de-str

// const { name: username, age: userAge, address: userAddress } = user;
// console.log(username, userAge, userAddress);

const {
  name,
  age,
  address: { city, state },
} = user;
console.log(city, state);
console.log(city, state, name, age);

//one more way
const { address } = user;
const { city: seher, state: rajya } = address;
console.log(seher, rajya);

function userIntro({ age, name, address: { city } }) {
  console.log(`Hi, I'm ${name}, ${age} years old from ${city}`); //Hi, I'm Anurag Singh, 27 years old from Hyderabad
}

userIntro(user);

function holiColors([c1, c2, , c4]) {
  console.log(c1, c2, c4);
}
holiColors(colors); // red pink white
