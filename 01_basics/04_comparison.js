console.log("2" > 1); // true
console.log("02" > 1); // true
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false
console.log(null<= 0); // true


console.log(undefined > 0); //false
console.log(undefined >= 0); //false
console.log(undefined < 0); //false
console.log(undefined <= 0); //false
console.log(undefined === 0); //false

console.log(2 == "2") // true
console.log(2 === "2") // false
/*
The reason is that an equality check == & the comparisons (>,<,>=,<=) works differently.
Comparison converts null to a number, treating it as zero(0), thats why null >= 0 is true & null > 0 is false.
*/
