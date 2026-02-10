var maxFreqSum = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const vowelCount = {};
  const consonantCount = {};

  for (let ch of s) {
    if (vowels.has(ch)) {
      vowelCount[ch] = (vowelCount[ch] || 0) + 1;
    } else {
      consonantCount[ch] = (consonantCount[ch] || 0) + 1;
    }
  }

  let maxVowel = 0;
  for (let key in vowelCount) {
    maxVowel = Math.max(maxVowel, vowelCount[key]);
  }

  let maxConsonant = 0;
  for (let key in consonantCount) {
    maxConsonant = Math.max(maxConsonant, consonantCount[key]);
  }

  return maxVowel + maxConsonant;
};
console.log(maxFreqSum("successes"));
