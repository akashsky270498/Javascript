const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

// const firstImg = document.querySelector('img');

// for (let i = 2; i<=100; i++) {
//     const newImgs = firstImg.cloneNode();
//     newImgs.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//     newImgs.alt = `Pokemon_${i}`
//     container.appendChild(newImgs)
// }

//Creating Element
const paragraph = document.createElement("p");
paragraph.innerText = "I'm newly added paragraph added using JS!";
paragraph.classList.add("my-para");
paragraph.id = "new-para";
// container.appendChild(paragraph);

// const image = document.createElement("img");
// for (let i = 1; i <= 100; i++) {
//   const newImage = image.cloneNode();
//   newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   newImage.alt = `Pokemon_${i}`;
//   container.appendChild(newImage);
// }

// for 1 image
// const newImage = document.createElement('img');
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;
// newImage.alt = `Pokemon_1`;
// container.appendChild(newImage);

//for multiple images
for (let i = 1; i <= 100; i++) {
  const newImage = document.createElement("img");
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  newImage.alt = `Pokemon_${i}`;
  const p = document.createElement("p");
  p.innerText = i;
  p.appendChild(newImage);
  container.appendChild(newImage);
}
