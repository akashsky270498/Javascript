// "default" at last is for if suppose any condition doesn't match One point to remember is always use "break" keyword else all the code after matching the given keyword will get executed.

const month = "1";

switch (month) {
  case "January":
    console.log("Jan");
    break;

  case "Febuarary":
    console.log("Febuarary");
    break;

  case "March":
    console.log("Mar");
    break;

  case "April":
    console.log("Apr");
    break;

  default:
    console.log("Default");
    break;
}
