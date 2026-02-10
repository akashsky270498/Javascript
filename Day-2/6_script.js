/*
Check if a Character is Uppercase, Lowercase, Digit, or Special Character
Input: A
Output: Uppercase Letter
✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
🔍 Concepts: ASCII range checks, compound && and || operators.
*/
function checkCharacterType(char) {
  const charCode = char.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    console.log(`${char} is an Uppercase Letter`);
  } else if (charCode >= 97 && charCode <= 122) {
    console.log(`${char} is a Lowercase Letter`);
  } else if (charCode >= 48 && charCode <= 57) {
    console.log(`${char} is a Digit`);
  } else {
    console.log(`${char} is a Special Character`);
  }
}

checkCharacterType("A");
checkCharacterType("b");
checkCharacterType("0");
checkCharacterType("@");
checkCharacterType("    ");
