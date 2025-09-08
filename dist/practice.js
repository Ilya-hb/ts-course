function getUserName(user) {
    return user.name;
}
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
merge({ name: "ilya" }, { surname: "holuban" });
// 4. не особо шарю как работает эта функция но вот я попытался сделать такое
function myPick(arg1, arg2) {
    return [arg1, arg2];
}
function identity(val) {
    return val;
}
identity("asd");
export {};
//# sourceMappingURL=practice.js.map