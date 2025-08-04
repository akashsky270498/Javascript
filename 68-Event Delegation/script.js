const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;

    // newCard.addEventListener("click", () => { //without delegation
    //   newCard.remove();
    // });
  container.append(newCard);
});

//With Delegation
container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});

/*
- Event Delegation: Event Delegation means adding an event to the parent element so it can handle events from its child elements.
Event Delegation is a technique where a single event listener is added to a parent element to manage events triggered by its child elements. Instead of attaching event listeners to each child individually, the parent listens for events that bubble up from its children, improving performance and code simplicity.
*/
