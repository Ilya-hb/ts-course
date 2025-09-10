export class Circle {
    radius;
    static pi = Math.PI;
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    constructor(radius) {
        this.radius = radius;
    }
    get area() {
        return Circle.pi * this.radius * this.radius;
    }
}
const c1 = new Circle(29);
c1.radius;
c1.area;
class Ellipse extends Circle {
    radius;
    constructor(radius) {
        super(radius);
        this.radius = radius;
        Circle.pi;
    }
}
//# sourceMappingURL=06-static.js.map