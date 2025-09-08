// Допиши типы для функции below!
function returnWhatIPass<T>(arg: T): T {
  return arg;
}

// Проверка (раскомментируй и проверь, правильно ли определяются типы)
const result1 = returnWhatIPass("Hello"); // Ожидаемый тип: string
const result2 = returnWhatIPass(123); // Ожидаемый тип: number
const result3 = returnWhatIPass(true); // Ожидаемый тип: boolean

// Допиши типы для функции below!
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Проверка
const firstNum = getFirstElement([1, 2, 3]); // Ожидаемый тип: number
const firstStr = getFirstElement(["a", "b", "c"]); // Ожидаемый тип: string
const firstBool = getFirstElement([true, false]); // Ожидаемый тип: boolean
const und = getFirstElement([]); // undefined

// Допиши типы для функции below!
function makePair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Проверка
const numberAndString = makePair(10, "ten"); // Ожидаемый тип: [number, string]
const boolAndNumber = makePair(true, 100); // Ожидаемый тип: [boolean, number]
const twoStrings = makePair("left", "right"); // Ожидаемый тип: [string, string]

// Допиши типы для функции below!
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

// Проверка
const merged = mergeObjects({ name: "Alice" }, { age: 30 });
// Ожидаемый тип: { name: string; age: number; }

const anotherMerge = mergeObjects({ flag: true }, { values: [1, 2, 3] });
// Ожидаемый тип: { flag: boolean; values: number[]; }

// Допиши типы для функции below!
function wrapInArray<T>(value: T): [T] {
  return [value];
}

// Проверка
const numArray = wrapInArray(5); // Ожидаемый тип: number[]
const strArray = wrapInArray("test"); // Ожидаемый тип: string[]
const objArray = wrapInArray({ id: 1 }); // Ожидаемый тип: { id: number; }[]
