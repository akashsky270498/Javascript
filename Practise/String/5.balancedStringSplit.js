const balancedStringSplit = (s) => {
    if (!s || s.length === 0) return 0;

    let splits = 0;
    let balance = 0;

    for (let ch of s) {
        if (ch !== 'R' && ch !== 'L') return "Invalid String";

        if (ch === 'R') {
            balance++;
        } else if (ch === 'L') {
            balance--;
        }

        if (balance === 0) {
            splits++;
        }
    }
    return splits;
}
console.log(balancedStringSplit("RLRRLLRLRL"))