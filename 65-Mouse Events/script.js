const h1 = document.querySelector("h1");
const addCardContainer = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 0;

// addCardContainer.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// });

// addCardContainer.addEventListener("dblclick", (e) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("mousedown", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("mouseup", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("mouseenter", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("mouseleave", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// when we will move the mouse inside the element the event will get file.
// addCardContainer.addEventListener("mousemove", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

//mouseleavee and mouseout are same but when we have child element inside the element we are keeping an event then in that case also mouseout will work but mouseleave will not
// addCardContainer.addEventListener("mouseout", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

//mouseover and mouseout are same but when we have child element inside the element we are keeping an event then in that case also mouseout will work but mouseover will not
// addCardContainer.addEventListener("mouseover", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("wheel", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("scroll", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("touchstart", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardContainer.addEventListener("touchend", (r) => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

h1.addEventListener("drag", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

// addCardContainer.addEventListener('touchmove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardContainer.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardContainer.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addCardContainer.addEventListener('pointerleave', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

/*
 Mouse Events
click – Fires when an element is clicked (press + release).

dblclick – Fires when an element is double-clicked quickly.

mousedown – Fires when a mouse button is pressed down on an element.

mouseup – Fires when a pressed mouse button is released over an element.

mouseenter – Fires when the mouse enters the element (does not bubble).

mouseleave – Fires when the mouse leaves the element (does not bubble).

mousemove – Fires continuously as the mouse moves within an element.

mouseover – Fires when the pointer enters the element or its children (bubbles).

mouseout – Fires when the pointer leaves the element or its children (bubbles).

wheel – Fires when the mouse wheel is rotated over an element.

Touch Events (for mobile/tablets)
touchstart – Fires when a finger touches the screen.

touchend – Fires when the finger is removed from the screen.

touchmove – Fires when the finger moves across the screen.

 Pointer Events (unified: mouse, touch, pen)
pointermove – Fires when a pointer (mouse/touch/stylus) moves over an element.

pointerenter – Fires when a pointer enters an element (does not bubble).

pointerleave – Fires when a pointer leaves an element (does not bubble).

 Other Events
drag – Fires continuously while an element is being dragged.

scroll – Fires when a scrollable element is scrolled.
*/
