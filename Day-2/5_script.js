/*
Check if a Year is a Leap Year

Input: 2024
Output: Leap Year
✨ Builds compound condition logic using multiple if statements (%4, %100, %400).
A year is a leap year if it satisfies these conditions:

It is divisible by 4,
➜ year % 4 === 0
But not divisible by 100,
➜ year % 100 !== 0
Unless it is also divisible by 400,
➜ year % 400 === 0
🧩 In Simple Words

If a year is divisible by 4, it’s a leap year.
Except if it’s also divisible by 100, then it’s not a leap year.
But if it’s divisible by 400, it is a leap year again.
*/

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a Leap Year.`);
  } else {
    console.log(`${year} is not a Leap Year.`);
  }
}

isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2028);
isLeapYear(2016);
isLeapYear(2018);
