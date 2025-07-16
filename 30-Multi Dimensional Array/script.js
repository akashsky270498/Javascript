const nameAndNumbersList = [
  ["Amit", 90],
  ["Manoj", 89],
  ["Pramod", 94],
];

console.log(nameAndNumbersList[0][0]); // Amit
console.log(nameAndNumbersList[1][1]); // 89

const ticTacToe = [
  ["X", null, null],
  [null, null, "O"],
  ["O", null, "X"],
];

console.log(ticTacToe.flat(Infinity))