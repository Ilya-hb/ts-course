const numbers = [1, 2, 3, 4, 5];
const strs: string[] = [];
const strs2: Array<string> = [];
strs.push("a");

interface Car {
  wheels: number;
  brand: string;
}
const cars: Car[] = [];
cars.push({ wheels: 3, brand: "s" });
// [
//   [1, 3],
//   [4, 5],
// ];
const arrOfArr: string[][] = [];
arrOfArr.push(["asd"], ["asd"]);

function printArr(arr: unknown[]): void {
  arr.forEach((el, index, array) => {
    console.log(el, index);
  });
}
