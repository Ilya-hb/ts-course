function fromPair(pair: [string, string]) {
  const [key, val] = pair;
  return { [key]: val };
}

// fromPair(myPair as [string, string]);
type FirstArg<T> = T extends (first: infer First, ...arg: any[]) => any
  ? First
  : never;
const myPair2: [string, string] = ["ast", "astast"];
const myPair: FirstArg<typeof fromPair> = ["mykey", "myvalue"];
fromPair(myPair);
fromPair(myPair2);

type ConstructorFirstArg<T> = T extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = "asd";

let dateArg: ConstructorFirstArg<typeof Date>;
