let a = 5;
a += 3;
console.log(a); //  8 

let b = 10;
b *= 2; // 10 * 2 = 20
b -= 5; // 20 - 5 = 15
console.log(b); //  15 

let x = 20;
x /= 4; // 20 / 4 = 5
x += 2; // 5 + 2 = 7
x %= 5; // 7 % 5 = 2
console.log(x); //  2 

let j = 20;
j /= 4; // 20 / 4 = 5
j += 2; // 5 + 2 = 7
j %= 5; // 7 % 5 = 2
console.log(j); //  2 

let score = 50;
score -= 20; // 30
score += 10; // 40
score *= 2; // 80
console.log(score); //  80 

let count = 8;
count *= 3; // 24
count /= 4; // 6
console.log(count); //  6 

let n = 7;
n %= 4; // 7 % 4 = 3
n *= 3; // 3 * 3 = 9
n -= 2; // 9 - 2 = 7
console.log(n); //  7 

let i = 5;
let k = i++;
console.log(i, k);

//***************************************************************************************************************** */
let c = 4;
let y = c++ + ++c;
// Step 1: c++ → 4 (c becomes 5)
// Step 2: ++c → 6 (c becomes 6)
// y = 4 + 6 = 10
console.log(c, y); //  6, 10 

let d = 5;
let e = --d + d++;
// --d = 4, d++ = 4 (d becomes 5)
// e = 4 + 4 = 8
console.log(d, e); //  5, 8 

let p = 3;
let q = p++ + p++ + ++p;
// p++ → 3 (p=4)
// p++ → 4 (p=5)
// ++p → 6 (p=6)
// q = 3 + 4 + 6 = 13
console.log(p, q); //  6, 13 

let l = 6;
let m = l-- + --l + l++;
// l-- → 6 (l=5)
// --l → 4 (l=4)
// l++ → 4 (l=5)
// m = 6 + 4 + 4 = 14
console.log(l, m); //  5, 14 

let z = 2;
let r = ++z + z++ + z;
// ++z = 3 (z=3)
// z++ = 3 (z=4)
// z = 4
// r = 3 + 3 + 4 = 10
console.log(z, r); //  4, 10 

let t = 7;
let u = t++ - --t + t++;
// t++ = 7 (t=8)
// --t = 7 (t=7)
// t++ = 7 (t=8)
// u = 7 - 7 + 7 = 7
console.log(t, u); //  8, 7 

let f = 10;
let s = f-- + f-- + ++f;
// f-- = 10 (f=9)
// f-- = 9 (f=8)
// ++f = 9 (f=9)
// s = 10 + 9 + 9 = 28
console.log(f, s); //  9, 28 
