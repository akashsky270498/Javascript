const gender = "M";

const user = `${
  gender.toLocaleLowerCase() === "f" ? "She" : "He"
} is a college student.`;

console.log("User:", user);

const result = false ? "A" : "" ? "12" : "0";

console.log("Result:", result);
