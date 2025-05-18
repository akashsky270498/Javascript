const batters = [
  "virat Kholi",
  "Rohit Sharma",
  "AB Develliers",
  "Surya Kumar Yadav",
];

const bowlers = [
  "Jasprit Bumrah",
  "Josh Hazelewood",
  "Kuldeep Yadav",
  "Jofra Archer",
];

console.log(batters.push(bowlers));
console.log(batters[4][1]);

//with push method the existing array got modified

// with concat method we get a new array but only two array can be concatenated

const concatArray = batters.concat(bowlers);
console.log(concatArray);

//with spread operators unlimited numbers can be merged into single this also return new array

const spreadedArray = [...batters, ...bowlers];
console.log(spreadedArray);

const mesedArray = [1, 2, 3, 4, [5, 6], 7, 8, [9, 10, 11, [12, 13]], 14];
const flattedArray = mesedArray.flat(Infinity);
console.log(flattedArray); // [1,  2, 3,  4,  5,  6, 7,  8, 9, 10, 11, 12,13, 14]

console.log(Array.isArray("RomeoShephard")); // false
console.log(Array.from("TimDavid")); // ['T', 'i', 'm','D', 'a', 'v','i', 'd']
console.log(Array.from({ myName: "Jitesh" })); //[]

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
