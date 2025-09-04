"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPoint(point) {
    console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}
const obj1 = {
    x: "1",
    y: "2",
};
printPoint(obj1);
const obj2 = {
    x: "1",
    y: "2",
    z: "4",
};
printPoint(obj2);
function printName(user) {
    console.log(`Hello,`, user.firstname.toUpperCase);
    if (user.lastname) {
        console.log(`Nice to meet you Mr.`, user.lastname.toUpperCase());
    }
}
printName({ firstname: "Ilya" });
printName({ firstname: "Ilya", lastname: "Holuban" });
//# sourceMappingURL=04-func-with-obj.js.map