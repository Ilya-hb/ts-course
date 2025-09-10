export declare class Vehicle {
    protected createdAt: Date;
    constructor(createdAt: Date);
    drive(speed: number): void;
    stop(): void;
    private log;
    protected alternativeLog(text: string): void;
}
export declare class Car extends Vehicle {
    readonly color: string;
    maxSpeed: number;
    constructor(color: string, maxSpeed: number);
    getInfo(): void;
}
//# sourceMappingURL=03-constructor.d.ts.map