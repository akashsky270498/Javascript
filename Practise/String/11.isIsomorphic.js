var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sToT = {};
  let tToS = {};

  for (let i = 0; i < s.length; i++) {
    let chS = s[i];
    let chT = t[i];

    if ((sToT[chS] && sToT[chS] !== chT) || (tToS[chT] && tToS[chT] !== chS))
      return false;

    sToT[chS] = chT;
    tToS[chT] = chS;
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("f11", "b23"));   // false
console.log(isIsomorphic("paper", "title"));// true