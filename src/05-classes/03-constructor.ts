export class Vehicle {
  // private createdAt: Date;

  constructor(protected createdAt: Date) {}
  public drive(speed: number): void {
    console.log(`Let us go with speed ${speed}`);
    this.log(speed);
  }
  public stop() {
    console.log(`Stopped`);
  }
  private log(speed: number) {
    console.log(`Vehicle has changed speed to ${speed}`);
  }
  protected alternativeLog(text: string) {
    console.log(text.toUpperCase());
  }
}

export class Car extends Vehicle {
  //   color: string = "black";
  //   color: string;
  //   maxSpeed: number;

  constructor(public readonly color: string, public maxSpeed: number) {
    super(new Date());
    // this.color = color
    // this.maxSpeed = maxSpeed
  }
  getInfo() {
    console.log(this.color, this.stop, this.createdAt);
  }
}

const car1 = new Car("red", 200);
// car1.color = 'blue'
