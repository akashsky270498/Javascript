// var maxFreqSum = function (s) {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);

//   const vowelCount = {};
//   const consonantCount = {};

//   for (let ch of s) {
//     if (vowels.has(ch)) {
//       vowelCount[ch] = (vowelCount[ch] || 0) + 1;
//     } else {
//       consonantCount[ch] = (consonantCount[ch] || 0) + 1;
//     }
//   }

//   let maxVowel = 0;
//   for (let key in vowelCount) {
//     maxVowel = Math.max(maxVowel, vowelCount[key]);
//   }

//   let maxConsonant = 0;
//   for (let key in consonantCount) {
//     maxConsonant = Math.max(maxConsonant, consonantCount[key]);
//   }

//   return maxVowel + maxConsonant;
// };


// const maxFreqSum = (s) => {

//     if (!s || s.length === 0) return 0;

//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

//     const vowelCount = new Map();
//     const consonantCount = new Map();

//     for (let ch of s) {
//         if (vowels.has(ch)) {
//             vowelCount.set(ch, (vowelCount.get(ch) || 0) + 1);
//         } else {
//             consonantCount.set(ch, (consonantCount.get(ch) || 0) + 1);
//         }
//     }
//     let maxVowel = 0;
//     for (let val of vowelCount.values()) {
//         maxVowel = Math.max(maxVowel, val)
//     }

//     let maxConsonant = 0;
//     for (let val of consonantCount.values()) {
//         maxConsonant = Math.max(maxConsonant, val)
//     }

//     return maxConsonant + maxVowel;
// }

const maxFreqSum = (s) => {
    if (!s || s.length === 0) return 0;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const freq = new Map();

    let maxVowel = 0;
    let maxConsonant = 0;

    for (let ch of s) {
        const newCount = (freq.get(ch) || 0) + 1;
        freq.set(ch, newCount);
        if (vowels.has(ch)) {
            maxVowel = Math.max(maxVowel, newCount);
        } else {
            maxConsonant = Math.max(maxConsonant, newCount);
        }
    }
    return maxConsonant + maxVowel;
}
console.log(maxFreqSum("successes"));
