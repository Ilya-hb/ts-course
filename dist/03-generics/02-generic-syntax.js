// Array<string>
//string[]
// Promise<number>
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3, 4);
toArray("12", "123", "123");
function head(value) {
    return value[0];
}
head([`12`]);
const obj1 = {
    title: "asd",
    value: 12,
};
// obj1.value = true;
const obj2 = {
    title: "asd",
    value: [123123],
};
obj2.title = "asd";
obj2.value = [123123];
const head1 = (value) => value[0];
export {};
//# sourceMappingURL=02-generic-syntax.js.map