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