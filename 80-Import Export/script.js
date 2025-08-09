// import { usersData } from "./user.js";
import { usersData as uData } from "./user.js"; //Named export using {} is necessary also it can be renamed while importing & exporting.
import prdtData from "./product.js"; //Default export can be imported with any name it can't be renamed

console.log(uData);
console.log(prdtData);
