interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name: string;
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "sedan",
  name: "535i",
};

car.brand = "Skoda";
car["go"] = true;
