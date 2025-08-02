function sayHi() {
  console.log("2nd way of listening an event H2 is clicked!");
}

function sayHello() {
  console.log("3rd way of listening an event H3 is clicked!");
}
function sayBye() {
  console.log("4th & best way of listening an event H4 is clicked!");
}

const h3 = document.querySelector("h3");
const container = document.querySelector(".container");
h3.onClick = sayHi;
h3.onclick = sayHello;

//The problem with above is sayHi() function will get overridden by sayHello() function. To overcome this issue use addEventListner()

const h4 = document.querySelector("h4");
h4.addEventListener("click", sayHi);
h4.addEventListener("click", sayBye);

const card = document.querySelector(".card");

let cardCount = 1;
card.addEventListener("click", function () {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  //   const newCard = card.cloneNode();
  //   newCard.classList.remove("add-card");
  newCard.innerText = cardCount;
  cardCount++;
  container.appendChild(newCard);
});
