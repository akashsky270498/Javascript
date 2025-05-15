let score = "332";
console.log(typeof score); //string
const convertInNumber = Number(score);
console.log(typeof convertInNumber); //number
//==============================================================================================================

let sco = "Ongle";
console.log(typeof sco); //string
const converted = Number(sco);
console.log(typeof converted); //number
console.log(converted) // NaN
//==============================================================================================================

let score2 = "222sss";
console.log(typeof score2); //string
const convertInNumbers = Number(score2);
console.log(typeof convertInNumbers); //number
console.log(convertInNumbers)// NaN
//==============================================================================================================

let score3 = null;
console.log(typeof score3); //object
const after = Number(score3);
console.log(typeof after); //number
console.log(after)// 0
//==============================================================================================================

let score4 = undefined;
console.log(typeof score4); //undefined
const afterConversion = Number(score4);
console.log(typeof afterConversion); //number
console.log(afterConversion)// NaN
//==============================================================================================================

let newValue = true;
console.log(typeof newValue); //boolean
const convert = Number(newValue);
console.log(typeof convert); //Number
console.log(convert)// 1

//==============================================================================================================
let isLogged = "Alex";
const converting = Boolean(isLogged);
console.log(typeof converting) // boolean
console.log(converting) // true
// Note: in case of "" value will be false. 

//==============================================================================================================
let someNum = 234;
const conVal = String(someNum);
console.log(typeof conVal) // string
console.log(conVal) // 234