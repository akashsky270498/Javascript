/*
1. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
------------------------------------------------
WHAT IS THIS?
A substring = continuous part of string
We need longest substring where NO character repeats

INPUT:
s = "abcabcbb"

VALID SUBSTRINGS:
"abc" (length 3)
"bca" (length 3)

OUTPUT:
3
*/

//1
// var longestSubstring = function (str) {
//     return new Set(str).size;
// }

//===============================================================================================
//2
// var longestSubstring = function (str) {

//     if (!str || str.length === 0) return "";

//     let set = new Set();

//     for (let s of str) {
//         if (set.has(s)) {
//             set.delete(s);
//         }
//         set.add(s);
//     }
//     return set.size;
// }

//===============================================================================================
//correct one
const longestSubstring = function (str) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(longestSubstring("abcabcdbb"));