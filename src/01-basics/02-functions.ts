function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 3);
const sum2 = (a: number, b: number): number => a + b;

function log(name: string, userId?: string): void {
  console.log(`Hello, ${name} with ID`, userId || "anonymous");
}
log("ilya", "123");

function crash(): never {
  throw new Error("crash");
}

export function average(...nums: number[]) {
  const sum = nums.reduce((curr, total) => curr + total, 0);

  return sum / nums.length;
}
