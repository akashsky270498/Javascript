const promiseOne = new Promise(function (resolve, reject) {
  //Do async task, db calls etc.
  setTimeout(function () {
    console.log("Async task completed.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

//********************************************************************************************************* */
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed.");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Consumed");
});

//********************************************************************************************************* */

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Third promise created");
    resolve({ username: "John", email: "guru30@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("user", user); // { username: 'John', email: 'guru30@gmail.com' }
});

//********************************************************************************************************* */

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "Sachin tendulkar", password: "100@hundreD" });
    } else {
      reject("Error: Something went wrong.");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("User obj. coming from promise four: ", user);
    return user?.username;
  })
  .then((username) => {
    console.log("Username: ", username); // => in case error = false, Username: Sachin tendulkar
  })
  .catch((error) => {
    console.log(error); // =>  in case error = true, Error: Something went wrong.
  })
  .finally(() => {
    console.log("Promise four completed, either resolved or rejected."); // this will always execute
  });

//********************************************************************************************************* */
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; // change this to false to see the resolved case

    if (!error) {
      resolve({ username: "Saurav Ganguly", password: "100@hundreD" });
    } else {
      reject("Error: Something went wrong.");
    }
  }, 1000);
});

// we can consume any promise with asyn await also, always use try catch block to handle errors inside async await.

async function consumePromiseFive() {
  try {
    const userData = await promiseFive;
    console.log(userData); // in case of true, { username: "Saurav Ganguly", password: "100@hundreD" }
  } catch (error) {
    console.log(error); // in case of true, Error: Something went wrong.
  }
}

consumePromiseFive();

//********************************************************************************************************************** */

async function getAllUsers() {
  const userPromisedData = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const userData = await userPromisedData.json();
  console.log("get user data: ", userData);
}

getAllUsers();
//********************************************************************************************************************** */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // this need to be converted
  })
  .then((convertedData) => {
    console.log("Converted Data: ", convertedData);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// from above all these last two will get printed first as they are promise "fetch returns a promise & promise has high pririty task queue"
