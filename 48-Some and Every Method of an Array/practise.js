//Given [1, 2, 3, 4], print the square of each number using forEach.
const nums = [1, 2, 3, 4];

const squaredNums = nums.forEach((num) => console.log(num ** 2));

//Given ["anurag", "singh", "developer"], print each name in uppercase using forEach
const names = ["anurag", "singh", "developer"];
const namesInCapital = names.forEach((name) => console.log(name.toUpperCase()));

/*
Double the Numbers:
Input: [1, 2, 3, 4]
Output: [2, 4, 6, 8] — using map.
*/
const numbers = [1, 2, 3, 4];
const doubleArr = numbers.map((number) => number * 2);
console.log(doubleArr);
/*
Extract Initials:
Given ["Akash Thakur", "John Doe"], return ["AT", "JD"].
*/
const array = ["Akash Thakur", "John Doe"];
const extractedInitials = array.map((fullName) => {
    const words = fullName.split(" ")

    const initials = words.map(word => word[0].toUpperCase()).join("")
    console.log(initials)
    return initials;
});
console.log(extractedInitials)

/*
Filter Even Numbers:
From [1, 2, 3, 4, 5, 6], return only even numbers.
*/
const evenNumbers = [1, 2, 3, 4, 5, 6];
const evenNums = evenNumbers.filter((evenNumber) => evenNumber % 2 === 0);
console.log(evenNums);

/*
Filter Names Longer Than 5 Letters:
Input: ["Akash", "Ram", "Jennifer", "Jay"]
Output: ["Jennifer", "Akash"]
*/
const namings = ["Akash", "Ram", "Jennifer", "Jay"];
const namingsLongerThenFiveLetters = namings.filter((name) => name.length >= 5);
console.log(namingsLongerThenFiveLetters);

/*
Sum of All Numbers:
Input: [10, 20, 30] → Output: 60
*/
const numArr = [10, 20, 30];
const sumOfAnArray = numArr.reduce(
  (acc, initailValue) => acc + initailValue,
  0
);
console.log(sumOfAnArray);

// /*
// Find Longest Word:
// Input: ["code", "developer", "js", "chatgpt"]
// Output: "developer"
// */
const words = ["code", "developer", "js", "chatgpt"];
const longestWord = words.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");
console.log(longestWord);

/*
Check for Negative Numbers:
Input: [5, 7, -1, 3] → Output: true
*/
const arrOfNegNum = [5, 7, -1, 3];
const negNum = arrOfNegNum.some((num) => num < 0);
console.log(negNum);

/*
Check if All Are Strings:
Input: ["a", "b", "c"] → Output: true
Input: ["a", 1, "c"] → Output: false
*/

const strings = ["a", "b", "c"];
const strings2 = ["a", 1, "c"];
const allString = strings.every((string) => typeof string === "string");
const allString2 = strings2.every((string) => typeof string === "string");
console.log(allString, allString2);
