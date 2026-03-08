var isValidSudoku = function (board) {
  const seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;

      const rowKey = `r - ${i} - ${val}`;
      const columnKey = `c - ${i} - ${val}`;
      const boxKey = `b-${Math.floor(i / 3) * 3 + Math.floor(j / 3)} - ${val}`;

      if (seen.has(rowKey) || seen.has(columnKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(columnKey);
      seen.add(boxKey);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
