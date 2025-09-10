declare abstract class Vehice {
    abstract color: string;
    abstract drive(speed: number): void;
    stop(): void;
}
export declare class Car extends Vehice {
    color: string;
    constructor(color: string);
    drive(speed: number): void;
}
export {};
//# sourceMappingURL=04-abstract-class.d.ts.map