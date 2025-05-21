// for in loop
const myObject = {
  js: "Javascript",
  py: "Python",
  rb: "Ruby",
  java: "java",
  cpp: "c++",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  //   console.log(key); // only keys will get printed
  console.log(`Key is ${key} and value is ${myObject[key]}`);
}

const arr = ["Python", "Javascript", "Ruby", "Java", "C++"];

for (const key in arr) {
  console.log(`Index is: ${key} and value is: ${arr[key]}`);
}

//Map
const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("FR", "FRANCE");
map.set("UK", "United Kingdom");

// for..in loop in not applicable in Map.

for (const key in map) {
  console.log(key);
}
