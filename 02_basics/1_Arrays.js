const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1[2]);

const arr2 = new Array(1, 24, 5, 7, 9);
console.log(arr2);

//Array Methods
console.log(arr1.length); // 7
arr1.push(8); //will add elements at the last index of an array
console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8]
arr1.push(9, 10);
console.log(arr1); // [1, 2, 3, 4, 5,6, 7, 8, 9, 10]
arr1.pop(); //pull out the last element of an array
console.log(arr1);
arr1.unshift(0); // will add element at the first index of an array &  total elements will get shifted by index 1
console.log(arr1);

//include, indexof, join
console.log(arr1.includes(9)); // true [includes retuns true or false based on the presence of the element]

// indexOf(): indexOf return the index of the element present in an array if present, if not it always returns -1
console.log(arr1.indexOf(3)); // 4
console.log(arr1.indexOf(23)); // -1

//join() : join method join the array but the array it return will always be in string type
// const newArray = arr1.join()
const newArray = arr1.join();
console.log(newArray); //0,1,2,3,4,5,6,7,8,9

//Slice || Splice
// slice(): slice method excludes the last index value we passed, also it doesn't modifies the original aaray.
//splice(): splice method includes the last index value that we passed, also it modifies the original aaray, it pops out the given range of elements from the original aaray.

console.log("Before Slicing: ", arr1); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const slicedArray = arr1.slice(1, 3);

console.log(slicedArray); // [ 1, 2 ]

console.log("After Slicing and Before Splicing: ", arr1); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const splicedArray = arr1.splice(1, 3);

console.log(splicedArray); //[ 1, 2, 3 ]

console.log("After Splicing: ", arr1); //[0, 4, 5, 6, 7, 8, 9];
