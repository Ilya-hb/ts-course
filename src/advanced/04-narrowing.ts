function example1(x?: number | string) {
  if (typeof x === "string") x.split("");
  else if (typeof x === "number") x.toFixed(2);
  else if (x === undefined) {
    console.log("no value");
  } else {
    x;
  }
}

function example2(strs: string | string[] | null) {
  // if(typeof strs === 'object'){} null is also object
  if (strs && typeof strs === "object") strs.push("1"); // better checkout
  else if (typeof strs === "string") strs.split("");
}

function example3(x: number[] | Date) {
  if (x instanceof Date) {
    x.getTime();
  } else x.push(1);
}
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}
