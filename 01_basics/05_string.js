const myName = "Aarav Singh";
const repoCount = 27;

console.log(myName + repoCount); // not recommended; Aarav Singh27

console.log(`My name is ${myName} & my repo count is ${repoCount}.`); // My name is Aarav Singh & my repo count is 27.


const gameName = new String('battle-ground-mobile');
//Note: original value is not changed as it is using stack.

console.log(gameName.__proto__); // {}
console.log(gameName.length); // 20
console.log(gameName[2]); // t
console.log(gameName.toUpperCase()); //BATTLEGROUNDMOBILE
console.log(gameName.toLocaleLowerCase()); // battlegroundmobile
console.log(gameName.charAt(3)); // t
console.log(gameName.indexOf('l')); // 4

const newString = new String('AnujRawat');

// - subString(): takes two index value based on which it derives the new string excludes the last index.
console.log(newString.substring(0,4)); // Anuj

// - slice(): same as substring() but it takes negative value also.
console.log(newString.slice(-8, 4)); // nuj

//trim(): trim() trims or removes the empty spaces.
console.log("   hsksdndk   ".trim()); // hsksdndk

//replace(): replace() method replaces the first value present in the given string with second value.
console.log(gameName.replace('ground', 'maidan')); // battle-maidan-mobile

//inlcudes(): includes method returns boolen value based on wheather the given value is present or not in the string.
console.log(gameName.includes('ground')); // true

//split(): split() method splits the value based on the splitter value & gives the array.
const stringOne = "my-name-is-unknown";
console.log(stringOne.split('-')); // [ 'my', 'name', 'is', 'unknown' ]