const myDate = new Date();
console.log(myDate); // 2025-05-17T11:13:28.158Z

console.log(myDate.toLocaleDateString());//17/5/2025
console.log(myDate.toJSON());//2025-05-17T11:13:28.158Z
console.log(myDate.toISOString());//2025-05-17T11:13:28.158Z
console.log(myDate.toDateString());//Sat May 17 2025
console.log(myDate.toLocaleString());//17/5/2025, 4:43:28 pm
console.log(myDate.toString());//Sat May 17 2025 16:43:28 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleTimeString());//4:43:28 pm

console.log(typeof myDate) // object
const newDate = Date.now();
console.log(newDate); //1747480535345

console.log(myDate.getMonth()); //4 month starts from 0
console.log(myDate.toLocaleString('default', 
    {
        weekday: "long", //Saturday
        // calendar:"Jan"
    }
))
