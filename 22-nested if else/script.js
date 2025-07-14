const userName = prompt("Please enter your name: ") || "procodrr";
const userAge = parseInt(prompt("Please enter your age: ")) || 0;
const userGender = prompt("Please enter your gender: ") || null;

const gendersArray = ["M", "F"];
if (!gendersArray.includes(userGender)) {
  console.log("Gender is not valid: plz enter M||F ");
}

if (userName) {
  console.log("User Name: ", userName);
}
if (userAge) {
  console.log("User Age: ", userAge);
}

if (userGender) console.log("User Gender: ", userGender);

if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a kid`);
  console.log(`And ${userGender === "M" ? "he" : "she"} playing`);
} else if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is a school student`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is learning PCM`);
} else if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a college student`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is learning CS`);
} else if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a working professional`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is web developer`);
} else if (userAge > 45 && userAge < 120) {
  console.log(`${userName} is retired`);
  console.log(`And ${userGender === "M" ? "he" : "she"} reads newspaper`);
} else if (userAge >= 121) {
  console.log(`${userName} is Immortal`);
} else {
  console.log("Please enter a valid age.");
}

console.log("Finally program ends.");
