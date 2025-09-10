class Vehice {
    stop() {
        console.log("stopped");
    }
}
export class Car extends Vehice {
    color;
    constructor(color) {
        super();
        this.color = color;
    }
    drive(speed) {
        console.log(speed);
    }
}
// const v1 = new Vehice();
//# sourceMappingURL=04-abstract-class.js.map