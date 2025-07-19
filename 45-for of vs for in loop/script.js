/*
Why not use for...of directly on objects?
-> Because plain objects are not iterable. You must use Object.entries(), Object.keys(), etc.

When to use let vs const in loops?
-> Use let for loop counters. Use const when the value doesn’t need to be reassigned.

Difference between for...in and for...of?
-> for...in iterates over keys, for...of iterates over values (in iterable objects like arrays, strings).
*/

const beerNames = [
  "Heineken",
  "Budweiser",
  "Corona",
  "Stella Artois",
  "Kingfisher",
  "Guinness",
  "Bira 91",
  "Hoegaarden",
];

for (let i = 0; i < beerNames.length; i++) {
  console.log(beerNames[i]);
}

console.log("****************************************************************");

for (const beerName of beerNames) {
  console.log(beerName);
}

console.log("****************************************************************");

const names = "Virat Kohli";

for (const letter of names) {
  console.log(letter);
}

console.log("****************************************************************");

const beers = {
  lager: "Heineken",
  ale: "Bira 91",
  stout: "Guinness",
  pilsner: "Corona",
  wheat: "Hoegaarden",
  premium: "Stella Artois",
  strong: "Budweiser Magnum",
  indian: "Kingfisher",
};

// Use `for...in` to iterate over object keys.
// Use `for...of` with Object.entries() for key-value pairs.
for (const beer in beers) {
  console.log(`${beer}: ${beers[beer]}`);
}

console.log("****************************************************************");

const beerKeys = Object.keys(beers);
const beerValues = Object.values(beers);
const beerEntries = Object.entries(beers);

console.log(beerKeys);
console.log(beerValues);
console.log(beerEntries); // it will always returns array of arrays

console.log("****************************************************************");

//optimized way

for (const beer of beerKeys) {
  console.log(`${beer}: ${beers[beer]}`);
}

console.log("****************************************************************");

for (const [key, value] of beerEntries) {
  console.log(`${key}: ${value}`);
}
