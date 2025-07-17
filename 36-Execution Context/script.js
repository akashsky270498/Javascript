sayHi();

const username = "Akshay saini";
const userAge = 23;
function sayHi() {
  const a = 14;
  const b = 13;
  add(7, 9);
}

function add(x, y) {
  kuchbhi();
  return x + y;
}

function kuchbhi() {
  console.log("kuch bhi...");
}

//callstack

function introduceMe() {
  console.log("Done!!!");
  introduceMe();
}

introduceMe();
