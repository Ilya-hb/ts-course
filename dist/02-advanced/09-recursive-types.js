const nums = [1, 2, 3, [1, 2, [1, 2, [1, 2, [1, 3]]]]];
nums.push(1);
nums.push([1, [1]]);
function isJSON(arg) { }
isJSON("hi");
isJSON({});
isJSON(null);
isJSON(false);
isJSON([1, { x: "" }]);
export {};
//# sourceMappingURL=09-recursive-types.js.map