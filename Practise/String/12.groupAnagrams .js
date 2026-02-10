var groupAnagrams = function (strs) {
  const map = new Map();

  for (let word of strs) {
    const freq = new Array(26).fill(0);

    for (let char of word) {
      freq[char.charCodeAt(0) - 97]++;
    }

    const key = freq.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
