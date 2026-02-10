/*
Print Multiplication Table (Single and Upto N)
Input 1: Number = 5
Output:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

Input 2: Upto = 3
Output:

Table of 1
1 x 1 = 1
...
Table of 3
3 x 10 = 30
*/
const multiplicationTable = (num, upto = null) => {
    // Case 1: Single table
    if (upto === null) {
        console.log("=====================");
        console.log(`Table of ${num}`);
        console.log("=====================");

        for (let j = 1; j <= 10; j++) {
            console.log(`${num} x ${j} = ${num * j}`);
        }
        return;
    }

    // Case 2: Tables from 1 to upto
    for (let i = num; i <= upto; i++) {
        console.log("=====================");
        console.log(`Table of ${i}`);
        console.log("=====================");

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
};
d

multiplicationTable(2, 10)