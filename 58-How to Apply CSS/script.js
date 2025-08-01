const h1 = document.querySelector("h1");
const paragraph = document.querySelector("p");
const allLinks = document.querySelectorAll("a");

h1.style.color = "hotpink";
h1.style.backgroundColor = "black";

// for (let i = 0; i< allLinks.length; i++) {
//     allLinks[i].style.color = "teal"
// }

// for (const link of allLinks) {
//     link.style.color = "teal";
//     link.style.fontFamily = "cursive";
//     link.style.fontWeight = "700";
//     link.style.textDecoration="none";
//     link.style.fontSize = "18px";
// }

// for (const link of allLinks) {
//   link.style.cssText = `
//     color: teal;
//     font-family: cursive;
//     font-weight: 700;
//     font-size: 18px;
//     text-decoration: none;
//     `;
// }

for (const link of allLinks) {
    // link.className = "green-link"
    // link.setAttribute("class", "green-link")
    // link.classList.add("green-link");
    // link.classList.remove("green-link");
    link.classList.toggle("green-link");
}

