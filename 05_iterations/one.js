//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("Five: ", element);
  }
  console.log(element);
}

// console.log(element)

//************************************************************************************************ */

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
}

//************************************************************************************************************ */

const arr = ["RCB", "PBKS", "RR", "KKR", "DC", "SRH", "LSG", "GT", "CSK", "MI"];

for (let i = 0; i < arr.length; i++) {
  console.log(`Number ${i + 1} : ${arr[i]}`);
}

//************************************************************************************************************ */

for (let i = 1; i <= 20; i++) {
  element = i;
  if (element === 5) {
    console.log("Break at 5");
    break;
  }
  console.log(element);
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
for (let j = 1; j <= 20; j++) {
  element = j;
  if (element === 5) {
    console.log("continue at 5");
    continue;
  }
  console.log(element);
}
