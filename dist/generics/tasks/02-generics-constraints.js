"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
//# sourceMappingURL=02-generics-constraints.js.map