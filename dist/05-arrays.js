"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
const strs = [];
const strs2 = [];
strs.push("a");
const cars = [];
cars.push({ wheels: 3, brand: "s" });
// [
//   [1, 3],
//   [4, 5],
// ];
const arrOfArr = [];
arrOfArr.push(["asd"], ["asd"]);
function printArr(arr) {
    arr.forEach((el, index, array) => {
        console.log(el, index);
    });
}
//# sourceMappingURL=05-arrays.js.map