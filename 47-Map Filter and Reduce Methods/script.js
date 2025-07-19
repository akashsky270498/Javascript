const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = months.forEach((month, index) => {
  console.log(index + 1, month);
  return month.toUpperCase(); // this will return undefined
});

console.log("****************************************************************");

const monthWithMap = months.map((month, index, array) => {
  console.log(index + 1, month);
  // console.log(array)
  return month.toUpperCase();
});

console.log(monthWithMap); // Map function always return new Array

console.log("****************************************************************");

const filteredMonths = months.filter((month, index, array) => {
  // console.log(index, month);
  return month.toUpperCase().includes("M");
});

console.log(filteredMonths);

console.log("****************************************************************");

const filteredMonths2 = months.filter((month, index, array) => {
  return false; // return empty array
});

console.log(filteredMonths2);

console.log("****************************************************************");

const students = [
  {
    name: "Akash",
    age: 21,
  },
  {
    name: "Adarsh",
    age: 17,
  },
  {
    name: "Amir",
    age: 18,
  },
  {
    name: "Raman",
    age: 23,
  },
  {
    name: "Nidhi",
    age: 16,
  },
];

const studentsData = students
  .filter((student, index, array) => {
    return student.age >= 18;
  })
  .map((student, index, array) => {
    return student.name;
  })
  .filter((student) => student.includes("A"));

console.log(studentsData);

console.log("****************************************************************");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumOfNumbers);

/*
If no initial value is provided,
the first element of the array is used as the initial accumulator,
and reduce starts from the second element.
*/
