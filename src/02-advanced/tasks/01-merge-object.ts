// Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

// Вопросы к этому заданию
// Можно ли через интерфейс описать union тип? //ne
// Можно ли создать в одном файле несколько интерфейсов с одинаковым именем? //da

interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}
interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};
type Car = {
  type: string;
  model: string;
} & Vehicle &
  Product;
