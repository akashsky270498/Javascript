/*
2. GROUP ANAGRAMS
------------------------------------------------
WHAT IS ANAGRAM?
Two words are anagrams if they have same letters
Example:
"eat", "tea", "ate" → same letters → anagrams

INPUT:
["eat","tea","tan","ate","nat","bat"]

OUTPUT:
[
 ["eat","tea","ate"],
 ["tan","nat"],
 ["bat"]
]
*/

var groupAnagrams = function (strs) {
    if (!Array.isArray(strs) || strs.length === 0) return [];

    const map = new Map();

    for (let str of strs) {
        let key = str.split('').sort().join('');

        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }

    const result = Array.from(map.values());
    return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));