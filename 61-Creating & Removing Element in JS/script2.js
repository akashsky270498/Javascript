const container = document.querySelector(".container");

// for (let i = 1; i <= 100; i++) {
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("img-container");

//   const newImage = document.createElement("img");
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   newImage.alt = `Pokemon_${i}`;

//   const paragraph = document.createElement("p");
//   paragraph.innerText = i;

//   imgContainer.append(newImage, paragraph);
//   container.append(imgContainer);

//   //using HTML
//   //   const myHTML = `
//   // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="Pokemon_${i}">
//   // <p>${i}</p>
//   // `;

//   //   imgContainer.innerHTML = myHTML;
//   //   container.append(imgContainer);
// }

let myHTML = ``;

for (let i = 1; i <= 100; i++) {
  myHTML += `
    <div class="img-container"> 
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
    <p>${i}</p>
    </div>
    `;
}

container.innerHTML = myHTML;

//
let itemToDelete = document.querySelector("body > div > div:nth-child(4)");
itemToDelete.remove() || itemToDelete.parentElement.removeChild(itemToDelete);
itemToDelete = null;


/*
Either dont save the reference to the element you want to delete or set it to null after removing it.
This helps in garbage collection, allowing the browser to reclaim memory.
*/