/*
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++){
    while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") return ""
    }
  }
  return prefix;
};
*/

var longestCommonPrefix = function (s) {
  if (!s.length) return "";

  for (let i = 0; i < s[0].length; i++) {
    let ch = s[0][i];

    for (let j = 1; j < s.length; j++) {
      if (s[j][i] !== ch) {
        return s[0].slice(0, i);
      }
    }
  }
  return s[0];
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
