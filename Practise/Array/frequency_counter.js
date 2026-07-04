// Frequency Counter.
/*
Input:  [1, 2, 2, 3, 3, 3]
Output: { 1: 1, 2: 2, 3: 3 }
*/

// Using object avoid nested loops Fast & Scalable TC: O(n), SC: O(n)
function frequncyCounterUsingObject(arr) {
  const freq = {};

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    freq[value] = (freq[value] || 0) + 1;
  }
  return freq;
}

console.log(frequncyCounterUsingObject([1, 2, 2, 3, 3, 3])); // { '1': 1, '2': 2, '3': 3 }
console.log(
  frequncyCounterUsingObject([
    "Apple",
    "Banana",
    "Apple",
    "Orange",
    "Banana",
    "Apple",
  ])
); // { 'Apple': 3, 'Banana': 2, 'Orange': 1 }

// Using Map

const frequencyCounterUsingMap = (arrs) => {
  if (!Array.isArray(arrs) || arrs.length === 0) return {};

  const freqMap = new Map();

  for (let arr of arrs) {
    freqMap.set(arr, (freqMap.get(arr) || 0) + 1);
  }

  console.log(new Map(Object.entries(Object.fromEntries(freqMap))))
  return Object.fromEntries(freqMap);

}

// console.log(frequencyCounterUsingMap([1, 2, 2, 3, 3, 3])); // { '1': 1, '2': 2, '3': 3 }
// console.log(frequencyCounterUsingMap(["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"])); // { 'Apple': 3, 'Banana': 2, 'Orange': 1 }
