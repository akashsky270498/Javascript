function decodeSecretCode(s) {
  if (!s) return "";

  if (typeof s !== "string") return false;

  if (s.length % 2 !== 0) return "";

  let decode = "";

  for (let i = 0; i < s.length; i += 2) {
    const char = s[i];
    const shiftChar = s[i + 1];

    if (!/[a-zA-Z]/.test(char)) return "";

    if (!/[0-9]/.test(shiftChar)) return "";

    const shift = parseInt(shiftChar, 10);

    const shiftedChar = String.fromCharCode(char.charCodeAt(0) + shift);
    decode += shiftedChar;
  }
  return decode;
}

module.exports = { decodeSecretCode };

console.log(decodeSecretCode("a2b3c1")); // "ced"
console.log(decodeSecretCode("x1y2z3")); // "y{}"
console.log(decodeSecretCode("m0n0o0")); // "mno"
console.log(decodeSecretCode("A5B4C3")); // "FFF"
console.log(decodeSecretCode("z9y8x7")); // "i{"
console.log(decodeSecretCode("")); // false
console.log(decodeSecretCode("a2b3c")); // false
console.log(decodeSecretCode(12345)); // false
console.log(decodeSecretCode([])); // false
console.log(decodeSecretCode(null)); // false
