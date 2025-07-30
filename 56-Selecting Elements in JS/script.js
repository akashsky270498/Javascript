const allImages = document.images; //special case for images It will return HTMLCollection

const allImagess = document.getElementsByTagName("img"); // getElementsByTagName will also return HTMLCollection
const allLis = document.getElementsByTagName("li");
const emptyData = document.getElementsByTagName("section"); // In case if not data found it will return HTMLCollection []

const allClassess = document.getElementsByClassName("css-image"); // getElementsByClassName will return HTMLCollection
const firstElement = document.getElementsByClassName("css-image")[0]; // to extract the first element from HTMLCollection
const emptyClassess = document.getElementsByClassName("no-class"); // return HTMLCollection []

const byIds = document.getElementById("css-image"); // getElementById will return the first element with that id, if not found it will return null, in case if multiple elements will be there with same ID it will return first element only.

//Most used
const qsUsingClass = document.querySelector(".css-image"); // querySelector will return the first element that matches the selector, if not found it will return null

const qsUsingId = document.querySelector("#css-image"); // querySelector will return the first element that matches the selector, if not found it will return null

const qsaUsingClass = document.querySelectorAll(".css-image"); // querySelectorAll will return a NodeList of all elements that match the selector, if not found it will return empty NodeList

const qsaUsingId = document.querySelectorAll("#css-image"); // querySelectorAll will return a NodeList of all elements that match the selector, if not found it will return empty NodeList

/*
-> The main difference between HTMLCollection and Node List is in HTML Collection we dont have forEach method, nut in Node List we have forEach method. "for loop" we can use in both also we can convert HTMLCollection to Array using Array.from() or spread operator [...HTMLCollection].

-> HTMLCollection is live, meaning it updates automatically when the document changes, while NodeList is static, meaning it does not update automatically.
*/

const jsImage = document.querySelector('[alt="javascript roadmap');

const uls = document.querySelector('ul');

const allImgs = document.querySelectorAll('img');

const imageInsideUls = uls.querySelector('.css-image')

const imagesUrl = [
  "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.jpg?s=612x612&w=0&k=20&c=jWUMrHgjMY9zQXsAwZFb1jfM6KxZE16-IXI1bvehjQM=",
];


// allImgs[0].src = imagesUrl[0];
// allImgs[1].src = imagesUrl[1];
// allImgs[2].src= imagesUrl[2];

for (let i =0 ; i < allImgs.length; i++) {
  allImgs[i].src = imagesUrl[i]
}

// const AllImages = [...allImages];

// AllImages.forEach((image, index) => {
//   image.src = imagesUrl[index];
// })