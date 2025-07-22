const dayNumber = 0;

switch (dayNumber) {
  case 0:
    console.log("It's Sunday");
    break;

  case 1:
    console.log("It's Monday");
    break;

  case 2:
    console.log("It's Tuesday");
    break;

  case 3:
    console.log("It's Wednesday");
    break;

  case 4:
    console.log("It's Thrusday");
    break;

  case 5:
    console.log("It's Friday");
    break;

  case 6:
    console.log("It's Saturday");
    break;

  default:
    console.log("Wrong input");
}

const userName = "Nitish Kumar Reddy";
const userAge = 20;

switch (true) {
  case userAge >= 0 && userAge <= 4:
    console.log(`${userName} is ${userAge} year's old & is a kid`);
    break;
  case userAge >= 5 && userAge <= 17:
    console.log(`${userName} is ${userAge} year's old & is a school student`);
    break;
  case userAge >= 18 && userAge <= 24:
    console.log(`${userName} is ${userAge} year's old & is a college student`);
    break;
  case userAge >= 25 && userAge <= 44:
    console.log(
      `${userName} is ${userAge} year's old & is a working professional`
    );
    break;
  case userAge >= 24 && userAge <= 120:
    console.log(`${userName} is ${userAge} year's old & is retired.`);
    break;
  default:
    console.log(`Enter a valid age.`);
}

const grade = "D";

switch (grade.toLowerCase()) {
  case "a":
    console.log("Your score is above 85%");
    break;
  case "b":
    console.log("Your score is between 70% to 84%");
    break;
  case "c":
    console.log("your score is between 55% to 69%");
    break;
  case "d":
    console.log("Your score is between 33% to 54%");
    break;
  default:
    console.log("Sorry, you are failed.");
}
