// function definition
function userIntro(
  username = "Procodrr",
  profession = "Web Developer",
  age = 25
) {
  console.log(
    `Hi, My name is ${username}, I'm a ${profession} and I'm ${age} year's old.`
  );
}

userIntro("Subhangi Singh", "Python Dev", 23);
userIntro("Shashank Singh", "UI/UX Designer", 22);
userIntro();

//Note: If we will not return anything from the function the function will bydefault return "undefined".
// Console.log is not the result of the function

function add(num1 = 0, num2 = 0) {
  return num1 + num2;
}

const result_1 = add(5, 3);
const result_2 = add(add(10, 20), add(30, 40));

console.log("Result 1: ", result_1);
console.log("Result 2: ", result_2);

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);

function secondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? null : secondLargest;
}

const secLargest = secondLargestNumber([
  10, 25, 12, 63, 45, 98, 100, 56, 47, 56, 198, 12,
]);
console.log("Second Largest: ", secLargest);
