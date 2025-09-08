const x = "Loading";
function printId(id) {
    if (typeof id === "string")
        console.log(id.toUpperCase());
    else
        console.log(id.toFixed(2));
}
function welcome(person) {
    if (Array.isArray(person)) {
        person.forEach((e) => console.log(e));
        return 0;
    }
    else {
        return "yes";
    }
}
export {};
//# sourceMappingURL=08-union.js.map