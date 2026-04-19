// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   let count = {};

//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of t) {
//     if (!count[char]) return false;
//     console.log(count[char])
//     count[char]--;
//   }

//   return true;
// };

var isAnagram = (s, t) => {
  if (!s || !t || s.length !== t.length) return false;

  let count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    const index = t.charCodeAt(i) - 97;

    if (count[index] === 0) return false;
    count[index]--;
  }
  return true;
}


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
