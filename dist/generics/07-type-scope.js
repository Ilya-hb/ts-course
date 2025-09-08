"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith1 = tuplePairCreator(1); // [number, U]
const val1 = toTupleWith1(2); // [number, number]
const val2 = toTupleWith1("asd"); // [number, string]
//# sourceMappingURL=07-type-scope.js.map