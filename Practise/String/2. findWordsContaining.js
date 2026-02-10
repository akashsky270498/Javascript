/*
var findWordsContaining = function (arr, char) {
    if (!arr || !char) return [];

    let outputArr = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i].includes(char)) {
            outputArr.push(i);
        }
    }
    return outputArr;
}
*/

var findWordsContaining = function (arr, char) {
    if (!arr || !char) return [];

    let outputArr = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === char) {
                outputArr.push(i);
                break;
            }
        }
    }
    return outputArr;
}

console.log(findWordsContaining(["leet","code"], "e"))