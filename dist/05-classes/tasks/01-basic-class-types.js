export class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.log();
    }
    area() {
        return this.height * this.width;
    }
    log() {
        console.log(`new Rectangle was create at ${new Date()}`);
    }
}
class Square extends Rectangle {
    width;
    color;
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
const text = new Rectangle(1, 2);
//# sourceMappingURL=01-basic-class-types.js.map