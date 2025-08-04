const black = document.querySelector(".black");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");

yellow.addEventListener(
  "click",
  (e) => {
    console.log("1. Yellow Event Listener.");
  },
  { capture: false }
);

red.addEventListener(
  "click",
  (e) => {
    console.log("2. Red Event Listener.");
  },
  { capture: false }
);

black.addEventListener(
  "click",
  (e) => {
    console.log("3. Black Event Listener.");
  },
  { capture: false }
);

document.body.addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the document
    console.log("4. Body Event Listener.");
  },
  { capture: false }
);

document.addEventListener(
  "click",
  (e) => {
    console.log("5. Document Event Listener.");
  },
  { capture: false }
);

window.addEventListener(
  "click",
  (e) => {
    console.log("6. Window Event Listener.");
  },
  { capture: false }
);

/*
- Event: A signal that something (like click, keypress etc) has happened on an element.
- Event Bubbling: In Event Bubbling, the event starts from the target element and moves upward towards its ancestors.
- Event Capturing: In Event Capturing, the event starts from outermost ancestor and moves downward to the target element.   

- By default, { capture: false } means **event bubbling** will occur.
- If we set { capture: true }, **event capturing** will occur.
- e.stopPropagation() stops the event from propagating further (both in bubbling or capturing).
- If an element has no listener, it won’t fire its own handler, but the event will still propagate to parents.
*/
