"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
sum(2, 3);
const sum2 = (a, b) => a + b;
function log(name, userId) {
    console.log(`Hello, ${name} with ID`, userId || "anonymous");
}
log("ilya", "123");
function crash() {
    throw new Error("crash");
}
function average(...nums) {
    const sum = nums.reduce((curr, total) => curr + total, 0);
    return sum / nums.length;
}
//# sourceMappingURL=02-functions.js.map