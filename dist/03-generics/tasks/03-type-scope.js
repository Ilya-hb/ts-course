function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
const mapNums = createMap([1, 2, 3, 4]);
const result = mapNums((num) => num + 2);
export {};
//# sourceMappingURL=03-type-scope.js.map