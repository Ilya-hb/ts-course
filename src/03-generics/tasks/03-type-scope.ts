function createMap<T>(list: Array<T>) {
  return function <U>(cb: (item: T) => U) {
    const result: U[] = [];

    for (let el of list) {
      result.push(cb(el));
    }
    return result;
  };
}

const mapNums = createMap([1, 2, 3, 4]);
const result = mapNums((num) => num + 2);
