/*
Check if a Character is a Vowel or Consonant

Input: e
Output: Vowel
*/

function checkVowelOrConsonant(char) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (char.length !== 1 || !/[a-zA-Z]/.test(char)) {
    console.log(
      `Invalid input: '${char}' Please enter a single alphabetic character.`
    );
  } else if (vowels.includes(char)) {
    console.log(`${char} is a Vowel.`);
  } else {
    console.log(`${char} is a Consonant.`);
  }
}
checkVowelOrConsonant("b");
checkVowelOrConsonant("AD");
checkVowelOrConsonant("4");

function checkVowel(char = "0") {
  if ("aeiou".includes(char.toLowerCase()) && char !== "") {
    return "Vowel";
  } else if (/[a-z]/.test(char.toLowerCase())) {
    return "Consonant";
  }
  return "Not a valid request";
}

console.log(checkVowel("A"))
console.log(checkVowel("J"))
console.log(checkVowel("2"))