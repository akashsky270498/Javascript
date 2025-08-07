const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  console.log(xhr);

  xhr.addEventListener("load", () => {
    const responseData = JSON.parse(xhr.responseText); // ✅ Parse the JSON response
    image.src = responseData.message; // ✅ Set image src from API response
    console.log(xhr);
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random", false); // third para we can pass is true or false by default it is true means async false means it becomes sync.
  xhr.send();
});

// In sync code our main thread gets blocked but in async our browser will do all the tasks BTS and give back to JS engine

const xhr2 = new XMLHttpRequest();
console.log("Start sync call");

xhr2.open("GET", "https://dog.ceo/api/breeds/image/randomss", false); // false = sync
xhr2.send();

console.log("Response:", xhr2.responseText);
console.log("End sync call");
