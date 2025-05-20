const isUserLoggedIn = true;
const temperature = 50;

if (temperature < 40) {
  console.log("Temperature is less then 40");
} else {
  console.log("Temperature is greater then 50");
}

console.log("Execute");

//Comparision operators : <,> >=,<=, == ,=== !== !

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power is : ${power}`);
}

// console.log("Power: ", power) // out of scope


const balance = 1000;

if (balance>200) console.log("Greater"), console.log("Lesser") // not recommended.

if (balance < 500) {
    console.log("Greater then 500.")
} else if (balance < 750) {
    console.log("Greater then 750")
} else if (balance < 999) {
    console.log("Greater then 999")
} else {
    console.log("Yes")
}

const userLoggedIn = true;
const isUserLoggedInFromGoogle = true;
const debitCard = true;
const isUserLoggedInFromEmail = true

if (userLoggedIn && isUserLoggedInFromEmail) {
    console.log("Ok 200")
}

if (userLoggedIn || isUserLoggedInFromGoogle) {
    console.log("OR")
}