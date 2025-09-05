// Array<string>
//string[]
// Promise<number>

type TypeFactory<T> = T;

type XType = TypeFactory<string>;
type XType2 = TypeFactory<number>;

function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray(1, 2, 3, 4);
toArray("12", "123", "123");

function head(value: string): string;
function head<T>(value: T[]): T;
function head(value: Date[]): Date;
function head(value: string[][]): string;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}
head([`12`]);

interface ModelData<T> {
  title: string;
  value: T;
}
const obj1: ModelData<number> = {
  title: "asd",
  value: 12,
};

// obj1.value = true;
const obj2: ModelData<Array<number>> = {
  title: "asd",
  value: [123123],
};
obj2.title = "asd";
obj2.value = [123123];

const head1 = <T>(value: T[]): T => value[0]!;
