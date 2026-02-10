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

// console.log(frequncyCounterUsingObject([1, 2, 2, 3, 3, 3])); // { '1': 1, '2': 2, '3': 3 }
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

const frequencyCounterUsingMap = (arr) => {
  const freqMap = new Map();

  for (const key of arr) {
    freqMap.set(key, (freqMap.get(key) || 0) + 1);
  }
  return freqMap;
};

// console.log(frequencyCounterUsingMap([1, 2, 2, 3, 3, 3])); // { '1': 1, '2': 2, '3': 3 }
// console.log(frequencyCounterUsingMap(["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"])); // { 'Apple': 3, 'Banana': 2, 'Orange': 1 }
