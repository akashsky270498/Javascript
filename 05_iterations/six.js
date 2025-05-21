const coding = ["js", "py", "c++", "c", "java", "ruby"];

const languages = coding.forEach((lang) => {
  // console.log(lang)
  return lang;
});
console.log(languages); // undefined

// filter function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const greaterThanFive = myNums.filter((num) => num > 5);
console.log(greaterThanFive); // [ 6, 7, 8, 9, 10 ]

const lessThanEqualToFive = myNums.filter((num) => {
  return num <= 5;
});

console.log(lessThanEqualToFive); // [ 1, 2, 3, 4, 5 ]

//same with forEach

const newArray = [];
myNums.forEach((num) => {
  if (num > 5) {
    newArray.push(num);
  }
});
console.log(newArray); // [ 6, 7, 8, 9, 10 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const booksPublishedAfter2000 = books.filter((book) => {
  const books = book.publish > 2000;
  return books;
});

console.log(booksPublishedAfter2000);

const booksAfterFilter = books.filter((bk) => bk.publish > 1995);
const count = booksAfterFilter.length;

console.log({ booksAfterFilter, count });

const historyBooks = books.filter((book) => book.genre === "History");
console.log(historyBooks);

const genreAndPublishBooks = books.filter((book) => {
  return book.genre === "History" && book.publish >= 1995;
});

console.log(genreAndPublishBooks)