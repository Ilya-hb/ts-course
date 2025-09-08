function isFish(pet) {
    return pet.swim !== undefined; // yooooooo
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
export {};
// function isNull(val: any): val is null {     //bad idea
//   return !val;
// }
// const empty=""
// const zero = 0;
// if(isNull(empty)){
//     empty
// }
//# sourceMappingURL=05-type-guards.js.map