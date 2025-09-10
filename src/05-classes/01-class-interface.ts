interface ICar {
  go(speed: number): void;
}

export class Car implements ICar {
  go(speed: number) {
    console.log(`were goin`);
  }
  stop() {
    console.log(`we stopped`);
  }
}
const car = new Car();
