export class Vehicle {
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

class Car extends Vehicle {
  changeSpeed(speed: number) {
    this.drive(speed);
    this.alternativeLog("speed was changed");
  }
}

const car1 = new Car();
car1.drive(123);
car1.stop();
