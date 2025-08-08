/*
Can we use await without async? → Only at top-level in modules or special REPLs, otherwise no.

Does async always return a Promise? → Yes, always.

Is async/await a function or keyword? → They are keywords, not functions.

Blocking? → No, it’s non-blocking to the main thread — only suspends that async function
*/
async function makeAsyncRequest() {
  const url = "https://httpbin.org/delay/3";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

makeAsyncRequest().then((data) => {
  console.log(data);
});

const anonymous = () => {
  console.log("Anonymous");
};
