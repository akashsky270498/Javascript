//for each
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (value) {
  console.log(value);
});

coding.forEach((item) => {
  console.log(item);
});

const useMe = (item) => {
  console.log(item);
};

coding.forEach(useMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(`Language FileName is : ${item.languageFileName}`);
});

/*
Language FileName is : js
Language FileName is : java
Language FileName is : py
*/
