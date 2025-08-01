// 📘 appendChild() vs append() - DOM Methods with Examples

const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// ✅ 1. Append an existing element (moves the node)
container.appendChild(h1);
// h1 is moved from body to inside the container (cut and paste)

// ✅ 2. Clone h1 and append shallow copy (no text)
container.appendChild(h1.cloneNode());
// Only the <h1> tag is cloned (no inner text or children)

// ✅ 3. Clone h1 and append deep copy (with text)
container.appendChild(h1.cloneNode(true));
// Copies <h1> tag, its text, and attributes

// ✅ 4. Clone & append multiple cards using loop
for (let i = 2; i <= 10; i++) {
  const newCard = card.cloneNode(true); // deep clone
  newCard.innerText = i;
  container.append(newCard); // or container.appendChild(newCard)
}

// ✅ 5. Append text using append()
h1.append(" 🚀 Ready to go");
// append() can directly add string as text node

// ✅ 6. Append text using appendChild() (manual text node creation)
h1.appendChild(document.createTextNode(" 🌟 Let's Start"));

// ❌ Error: appendChild doesn't accept string directly
// h1.appendChild(" Hello"); // This will throw an error

// ✅ 7. Append multiple elements at once using append()
const div1 = document.createElement("div");
div1.innerText = "Box 1";

const div2 = document.createElement("div");
div2.innerText = "Box 2";

container.append(div1, div2); // append multiple nodes together

// ✅ 8. Using appendChild (one element at a time)
const box3 = document.createElement("div");
box3.innerText = "Box 3";
container.appendChild(box3); // only one element allowed

// ✅ 9. Move an existing element again
container.appendChild(h1); // Moves h1 again to the bottom of container

// ✅ 10. Dynamically add a button inside the first card
const button = document.createElement("button");
button.innerText = "Click Me!";
card.appendChild(button); // adds button inside the first .card

// ✅ 11. Append using innerHTML vs append (safe vs unsafe)
// ❌ Not safe — parses raw HTML (avoid if possible)
container.innerHTML += '<div class="card">New via innerHTML</div>';

// ✅ Safer approach using createElement + append
const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerText = "New via append";
container.append(newCard);

// 🧠 Summary:
// - appendChild() => only Node, only 1 at a time
// - append() => accepts Node(s) and string(s), multiple allowed
// - append() returns undefined; appendChild() returns the appended node
// - cloneNode(true) for full copy; cloneNode() or cloneNode(false) for shallow
// - Appending existing DOM node moves it, not copies it
