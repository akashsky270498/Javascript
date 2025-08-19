const addCardButton = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");
let count = 1;

addCardButton.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// const intervalId = setInterval(() => {
//   if (count >= 10) {
//     clearInterval(intervalId);
//   }

//   addCardButton.click();
// }, 50);

// Input Focus & Blurred
// setTimeout(() => {
//   input.focus();
//   console.log("Input Focused");
// }, 4000);

// setTimeout(() => {
//   input.blur();
//   console.log("Input Blurred");
// }, 6000);

//Form
// setTimeout(() => {
//   form.submit();
//   console.log("Form Subbmitted");
// }, 4000);

//Form Reset
setTimeout(() => {
  form.reset();
  console.log("Form Resetted.");
},1000);
