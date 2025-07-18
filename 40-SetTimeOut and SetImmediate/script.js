const timer1 = setTimeout(`console.log("Hi-1")`, 0);
const timer2 = setTimeout(`console.log("Hi-2")`, 0);
const timer3 = setTimeout(a, 2000, "ldahjdh", 40, "dahsdaj");

const interval1 = setInterval(`console.log("Hi-Interval")`, 1000);
const interval2 = setInterval(b, 2000, "dakd", 9999, "hdhd");

function a() {
  console.log("Hello World!!");
}

function b() {
  console.log(arguments);
}

console.log("Last line");

/*
 Last line
 Hi-1
 Hi-2
 Hello World!!
*/
