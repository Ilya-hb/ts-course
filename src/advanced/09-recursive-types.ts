type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, 3, [1, 2, [1, 2, [1, 2, [1, 3]]]]];
nums.push(1);
nums.push([1, [1]]);

//JSON
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}
isJSON("hi");
isJSON({});
isJSON(null);
isJSON(false);
isJSON([1, { x: "" }]);
