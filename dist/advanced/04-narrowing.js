"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === "string")
        x.split("");
    else if (typeof x === "number")
        x.toFixed(2);
    else if (x === undefined) {
        console.log("no value");
    }
    else {
        x;
    }
}
function example2(strs) {
    // if(typeof strs === 'object'){} null is also object
    if (strs && typeof strs === "object")
        strs.push("1"); // better checkout
    else if (typeof strs === "string")
        strs.split("");
}
function example3(x) {
    if (x instanceof Date) {
        x.getTime();
    }
    else
        x.push(1);
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
//# sourceMappingURL=04-narrowing.js.map