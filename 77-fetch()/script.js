// fetch('https://dummyjson.com/products')
// .then((res) => {
//     // console.log(res.json())
//     return res.json();
// })
// .then((data) => console.log("Data: ", data))
// .catch((err) => console.log("Error: ", err));

fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Pencil Apsara",
    category: "Stationary",
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => console.log("Err: ", err));
