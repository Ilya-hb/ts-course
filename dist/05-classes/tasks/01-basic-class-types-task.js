// Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод log недоступным для инстансов обоих классов.
// @ts-nocheck
export class Rectangle {
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
    constructor(width, color) {
        super(width, width);
        this.width = width;
        this.color = color;
    }
    paint(newColor) {
        this.color = newColor;
    }
}
//# sourceMappingURL=01-basic-class-types-task.js.map