// localStorage.myName will give undefined.
// localStorage.getItem("myName") will give null.

const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name");
const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

/*
nameElement.innerText = localStorage.myName;
ageElement.innerText = localStorage.age;

nameInput.addEventListener("input", (e) => {
  localStorage.myName = e.target.value;
  nameElement.innerText = localStorage.myName;
});

ageInput.addEventListener("input", (e) => {
  localStorage.age = e.target.value;
  ageElement.innerText = localStorage.age;
});
*/

const myData = JSON.parse(localStorage.getItem("myData")) || {};

if (myData.name) {
  nameElement.innerText = myData.name;
}

if (myData.age) {
  ageElement.innerText = myData.age;
}

nameInput.addEventListener("input", (e) => {
  myData.name = e.target.value;
  localStorage.setItem("myData", JSON.stringify(myData));
  nameElement.innerText = e.target.value;
});

ageInput.addEventListener("input", (e) => {
  myData.age = e.target.value;
  localStorage.setItem("age", JSON.stringify(myData));
  ageElement.innerText = e.target.value;
});
