abstract class Vehice {
  abstract color: string;
  abstract drive(speed: number): void;
  public stop() {
    console.log("stopped");
  }
}

export class Car extends Vehice {
  constructor(public color: string) {
    super();
  }
  drive(speed: number) {
    console.log(speed);
  }
}
// const v1 = new Vehice();
