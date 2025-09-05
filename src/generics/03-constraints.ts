function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len("asd");
len(["123123"]);
len({ length: 123 });
// len(122)
// len(true)
// len({a:1})
