const userName = prompt("Please enter your name: ") || "procodrr";
const userAge = parseInt(prompt("Please enter your age: ")) || 0;
const userGender = prompt("Please enter your gender: ") || null;

const gendersArray = ["M", "F"];
if (!gendersArray.includes(userGender)) {
  console.log("Gender is not valid: plz enter M||F ");
}

console.log("User Name: ", userName);
console.log("User Age: ", userAge);
console.log("User Gender: ", userGender);

if (userAge >= 0 && userAge <= 4) {
  console.log(`${userName} is a kid`);
  console.log(`And ${userGender === "M" ? "he" : "she"} playing`);
}
if (userAge >= 5 && userAge <= 17) {
  console.log(`${userName} is a school student`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is learning PCM`);
}
if (userAge >= 18 && userAge <= 24) {
  console.log(`${userName} is a college student`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is learning CS`);
}
if (userAge >= 25 && userAge <= 45) {
  console.log(`${userName} is a working professional`);
  console.log(`And ${userGender === "M" ? "he" : "she"} is web developer`);
}
if (userAge > 45) {
  console.log(`${userName} is retired`);
  console.log(`And ${userGender === "M" ? "he" : "she"} reads newspaper`);
}

console.log("Finally program ends.");
