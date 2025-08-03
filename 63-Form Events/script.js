const usernameInput = document.querySelector("#username");
const p = document.querySelector("p");
const form = document.querySelector("form");

// usernameInput.addEventListener('click', () => {
//     console.log('You clicked the input.')
// });

// usernameInput.addEventListener('dblclick', () => {
//     console.log("Double clicked!!")
// })

// usernameInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   p.innerText = e.target.value;
// });

// usernameInput.addEventListener("change", (e) => {
//     p.innerText = e.target.value;
// })

// usernameInput.addEventListener("focus", (e) => {
//     console.log(e.type)
//   p.innerText = e.target.value;
// });

// usernameInput.addEventListener("blur", (e) => {
//     console.log(e.type)
//     p.innerText = e.target.value;
// });

form.addEventListener("submit", (e) => {
  console.log(e.type);
  e.preventDefault(); // Prevents the default form submission behavior
  const myFormData = new FormData(form);
  console.log(e)

  for (const [key, data] of myFormData.entries()) {
    console.log(`${key}: ${data}`);
  }
});

// form.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log("form clicked")
// })

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(e)
//     console.log("form submitted")
// })
