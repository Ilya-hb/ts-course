function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: string | number[] | boolean[]): any {
  return value[0];
}

const x = head("asd");
const y = head([true]);
