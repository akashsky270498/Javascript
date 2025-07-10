const arrTwo = [1, 2, 3, 4, 5]; // Packed SMI elements: Best type of an array only number are allowed not even decimals.

arrTwo.push(6.0); // Now arrTwo becomes packed double (optimization changes)
arrTwo.push("7"); // Now also packed double (optimization changes)
// Once we pushed any element lets say decimal or string or anything element except number into a SMI array it's optimization can't be reverted back even after the deletion of those elements.

console.log(arrTwo.length); // 7
// No we can see the length of an arrTwo is 7 so lets inject one element on 10th index of an arrTwo to make it a Holey array.

arrTwo[10] = 11;
console.log(arrTwo); //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
// Now arrTwo is a Holey array because it has holes in it. It has 3 empty items in it.
console.log(arrTwo.length); // 11
console.log(arrTwo[8]); // undefined: Here the tracing is quite difficult (Holes & hasOwnProperty are very expensive operations in JS)
console.log(arrTwo[18]); // undefined : this is a bound check here tracing this is easy bcoz we are trying to get the element from index which is not presnt.
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// Normal SMI > Double > Packed
// Holey SMI > Hoely Double > Holey Packed

const arrThree = new Array(3); // unoptimized way to define array (it has 3 holes in it)
arrThree[0] = "1";
arrThree[1] = "2";
arrThree[2] = "3";
console.log(arrThree); // [ '1', '2', '3' ]

//Better way
const arrFour = []; // Packed SMI
arrFour.push("1");
arrFour.push("2");
arrFour.push("3");
console.log(arrFour); // [ '1', '2', '3' ]

const arrFive = [1, 2, 3, 4, 5]; // Packed SMI
arrFive.push(NaN); // Now arrFive becomes Packed Double
arrFive.push(Infinity); // Now arrFive becomes Packed Double

// ================================================================================================================================

// ==========================
// 🔰 V8 Array Internals: SMI, Packed, Holey - Deep Dive
// ==========================

// --- Example 1: Array Transitions ---

const arr2 = [1, 2, 3, 4, 5]; // ✅ Packed SMI ➤ Fastest type

arr2.push(6.0);
// ❗ Now becomes Packed Double (float introduced)

arr2.push("7");
// ❗ Still Packed Double (string breaks integer assumption, SMI can't return)

console.log(arr2.length); // 7

arr2[10] = 11;
// ❗ Holes created between index 7 to 9 ➤ Holey Packed Double

console.log(arr2);
// ➤ [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]

console.log(arr2.length); // 11

// --- 🔍 Hole access vs Bound check ---

console.log(arr2[8]); // undefined
/*
🧠 This is a hole access:
JS performs:
- arr2.hasOwnProperty(8)? No
- arr2.__proto__.hasOwnProperty(8)? No
- Object.prototype.hasOwnProperty(8)? No
⛔ Expensive prototype chain traversal
*/

console.log(arr2[18]); // undefined
/*
🧠 This is a bound check:
JS knows index is outside length ➤ Instant undefined return ➤ ✅ Fast
*/

// ==========================
// 📊 Optimization Transitions Table
// ==========================

/*

| Step              | Transition To        | Trigger                          |
|------------------|----------------------|----------------------------------|
| [1,2,3,4,5]       | Packed SMI           | All are 31-bit integers          |
| .push(6.0)        | Packed Double        | Float introduced                 |
| .push('7')        | Packed Double        | String ➤ SMI never returns       |
| arr[10] = 11      | Holey Packed Double  | Holes between 7–9                |

*/

// ==========================
// 🧪 Array Creation Comparison
// ==========================

const arr3 = new Array(3);
// ⚠️ Creates [ <3 empty items> ] ➤ Starts as Holey

arr3[0] = "1";
arr3[1] = "2";
arr3[2] = "3";
console.log(arr3); // [ '1', '2', '3' ]
// 🔴 Still Holey Object internally ➤ Suboptimal

const arr4 = [];
arr4.push("1");
arr4.push("2");
arr4.push("3");
console.log(arr4); // [ '1', '2', '3' ]
// ✅ Packed Object ➤ optimal for strings

const arr5 = [1, 2, 3, 4, 5]; // Packed SMI
arr5.push(NaN); // ➤ Packed Double
arr5.push(Infinity); // ➤ Remains Packed Double

// ==========================
// 🔍 Array Internals: Visualization
// ==========================

/*

✅ Packed SMI:
[ 1, 2, 3, 4, 5 ] ➤ 🚀 Fastest ➤ 31-bit integers ➤ tagged ints (SMI = Small Integer)

✅ Packed Double:
[ 1, 2.5, NaN, Infinity ] ➤ ⚡ Fast ➤ float64 values

✅ Packed Object:
[ 'a', {}, [], true ] ➤ ⚡ Fast ➤ any object/non-number

🕳️ Holey SMI/Double/Object:
[ 1, , , 4 ] ➤ 🐢 Slower ➤ needs `hasOwnProperty` checks on proto chain

*/

// ==========================
// ⚠️ Performance & Lookup Cost Table
// ==========================

/*

| Type                | Speed       | Notes                                      |
|---------------------|-------------|--------------------------------------------|
| ✅ Packed SMI        | 🚀 Fastest  | All 31-bit integers                        |
| ✅ Packed Double     | 🚀 Fast     | Float values (still optimized)             |
| ✅ Packed Object     | 🚀 Fast     | Mixed types but no holes                   |
| ❌ Holey SMI         | 🐢 Slow     | Prototype chain + map checks               |
| ❌ Holey Double      | 🐢 Slow     | Same + double processing                   |
| ❌ Holey Object      | 🐌 Very Slow| Worst case: holes + non-number types       |

*/

// ==========================
// ⚙️ Access Mechanics
// ==========================

/*

📦 Accessing arr[i]:
1️⃣ Check: hasOwnProperty(arr, i) ➤ if hole, fails
2️⃣ Check: arr.__proto__ ➤ Array.prototype ➤ has index?
3️⃣ Check: Object.prototype ➤ has index?
4️⃣ Return undefined ➤ ❌ Expensive for hole access

📦 Accessing arr[out-of-bounds]:
- arr[i] where i > length ➤ ✅ Fast ➤ returns undefined directly (no proto chain)

*/

// ==========================
// ✅ Best Practices Summary
// ==========================

/*

✔️ Use [] over new Array(n)
✔️ Use .push() instead of direct index setting
✔️ Don’t mix types (avoid adding float/string into int array)
✔️ Don’t skip indexes (e.g., arr[10] = x)
✔️ Avoid deleting array elements ➤ introduces holes
✔️ Don’t manually set length ➤ creates holes
✔️ Packed arrays keep V8 optimizations

*/

// ==========================
// 🎓 Final Summary Table
// ==========================

/*

| Category       | Packed         | Holey            |
|----------------|----------------|------------------|
| SMI (int)      | ✅ Best        | ❌ Bad           |
| Double (float) | ⚠️ Slower      | ❌ Very Bad      |
| Object (mixed) | ⚠️ Slower      | ❌ Worst         |

Fastest: Packed SMI ➤ Packed Double ➤ Packed Object
Slowest: Holey SMI ➤ Holey Double ➤ Holey Object

*/

// ==========================
// 📘 Keywords Glossary
// ==========================

/*

🔹 SMI: Small Integer ➤ 31-bit integer optimized by V8
🔹 Packed: Dense array with no holes
🔹 Holey: Sparse array with "missing" indices (e.g., [1, , 3])
🔹 Bound check: Accessing index > length ➤ cheap
🔹 Prototype check: Accessing holes ➤ expensive prototype traversal
SMI ➤ Double ➤ Object: This transition never reverts, even if you remove the non-integer elements later.
*/

// ==========================
// 📦 You now know how JS Arrays are optimized! 💪
// ==========================
