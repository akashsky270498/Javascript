const generateAtoZ = () => {
  const letters = [];

  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
};

console.log(generateAtoZ()); // ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
/*

function generateAtoZ() {
  let letters = "";

  for (let i = 65; i <= 90; i++) {
    letters += String.fromCharCode(i) + " ";
  }
  return letters;
}

console.log(generateAtoZ());
// */
