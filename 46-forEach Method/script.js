/*
forEach is a method of an Array, it will always return undefined in console bcoz it is designed like that.
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

for (const beer of beerNames) {
  console.log(beer);
}

console.log("****************************************************************");

beerNames.forEach(function (beerName) {
  console.log(beerName);
});

console.log("****************************************************************");

beerNames.forEach((beerName) => console.log(beerName));

console.log("****************************************************************");

function beer(beerName) {
    console.log(beerName)
}

beerNames.forEach(beer)
