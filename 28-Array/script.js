const username = "Anurag Singh";

const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates"];

const newObject = {};
const newwArray = [];
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1[2]);

const arr2 = new Array(1, 24, 5, 7, 9);
console.log(arr2);

//Array Methods
console.log(arr1.length); // 7
arr1.push(8); //will add elements at the last index of an array
console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8]
arr1.push(9, 10);
console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8, 9, 10]
arr1.pop(); //pull out the last element of an array
console.log(arr1);
arr1.unshift(0); // will add element at the first index of an array &  total elements will get shifted by index 1
console.log(arr1);

//include, indexof, join
console.log(arr1.includes(9)); // true [includes retuns true or false based on the presence of the element]

// indexOf(): indexOf return the index of the element present in an array if present, if not it always returns -1
console.log(arr1.indexOf(3)); // 4
console.log(arr1.indexOf(23)); // -1

//join() : join method join the array but the array it return will always be in string type
// const newArray = arr1.join()
const newArray = arr1.join();
console.log(newArray); //0,1,2,3,4,5,6,7,8,9

//Slice || Splice
// slice(): slice method excludes the last index value we passed, also it doesn't modifies the original aaray.
//splice(): splice method includes the last index value that we passed, also it modifies the original aaray, it pops out the given range of elements from the original aaray.

console.log("Before Slicing: ", arr1); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const slicedArray = arr1.slice(1, 3);

console.log(slicedArray); // [ 1, 2 ]

console.log("After Slicing and Before Splicing: ", arr1); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const splicedArray = arr1.splice(1, 3);

console.log(splicedArray); //[ 1, 2, 3 ]

console.log("After Splicing: ", arr1); //[0, 4, 5, 6, 7, 8, 9];

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

const evenArr = [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const animalsArr = ["Cat", "Dog", "Rat", "Mouse", "Elephant"];
const oddArr = [1, 3, 5, 7, 9];

evenArr.push(295);
console.log(evenArr);
evenArr.pop();
console.log(evenArr);
evenArr.shift();
console.log(evenArr);
evenArr.unshift(0);
console.log(evenArr);

const addedArr = evenArr.concat(animalsArr, oddArr);
console.log(addedArr);

console.log(evenArr.includes(500)); // false
console.log(evenArr.includes(18)); // true
console.log(animalsArr.indexOf("Dog")); // 1
console.log(animalsArr.indexOf("dog")); // -1 (dog is not present in the array)
console.log(evenArr.reverse());
console.log(animalsArr.reverse()); // same array
console.log(animalsArr.sort());
console.log(oddArr.sort());
console.log(evenArr.slice(3, 7)); // returns new Array
console.log(evenArr);
console.log(evenArr.splice(2, 6));
console.log(evenArr);
