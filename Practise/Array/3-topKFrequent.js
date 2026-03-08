// var topKFrequent = function (nums, k) {
//   const freqMap = new Map();

//   for (let num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
//   }

//   const buckets = Array.from({ length: nums.length + 1 }, () => []);

//   for (let [num, freq] of freqMap) {
//     buckets[freq].push(num);
//   }

//   const result = [];

//   for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
//     for (let num of buckets[i]) {
//       result.push(num);
//       if (result.length === k) return result;
//     }
//   }

//   return result;
// };

var topKFrequent = function (nums, k) {
    const map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const arr = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    const result = [];

    for (let i=0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
