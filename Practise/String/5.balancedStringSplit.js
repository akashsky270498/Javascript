var balancedStringSplit = function (s) {
    let count = 0;
    let balance = 0;

    for (let ch of s) {
        if (ch === 'R') {
            balance++;
        } else {
            balance--;
        }

        if (balance === 0) {
            count++;
        }
    }
    return count;
}

console.log(balancedStringSplit("RLRRLLRLRL"))