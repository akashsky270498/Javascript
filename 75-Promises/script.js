//CallStack is a collection of function which are currently under execution if not function then global anonymous function will be there.
//Micro task queue have more priority then that if callback queue(task queue).

const resolveBtn = document.querySelector("#resolve-btn");
const rejectBtn = document.querySelector("#reject-btn");

const p1 = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });

  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
});

p1.then((data) => {
  console.log("Resolved: ", data);
}).catch((error) => {
  console.log("Rejected: ", error);
});

const p2 = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });

  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
});

p2.then((data) => {
  console.log("1st: ", data);
  return 155;
})
  .then((data) => {
    console.log("2nd: ", data);
    return "Hello";
  })
  .then((data) => {
    console.log("3rd: ", data);
  })
  .catch((error) => {
    console.log("Rejected: ", error);
  });
