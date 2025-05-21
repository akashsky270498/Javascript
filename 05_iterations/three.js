//for of loop

const arr = [1, 2, 4, 6, 6, 89, 0, 4];

for (const element of arr) {
  console.log(element);
}

const greetings = "Hello World!";

for (const words of greetings) {
  console.log(words);
}

//Maps: Map is not iterable

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("FR", "FRANCE");
map.set("UK", "United Kingdom");

for (const key of map) {
  console.log(key);
}
/*
[ 'IN', 'INDIA' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'FRANCE' ]
[ 'UK', 'United Kingdom' ]
 */

for (const [key, value] of map) {
  console.log(`${key} extends to ${value}`);
}

/*
IN extends to INDIA
USA extends to United States of America
FR extends to FRANCE
UK extends to United Kingdom
*/

const myobject = {
  username: "John Cena",
  id: "12ees",
  city: "NYC",
};

// for (const [key, value] of myobject) {
//   console.log(key, " ", value) //TypeError: myobject is not iterable
// }

//Note: we cannot use for..of loop in object.
