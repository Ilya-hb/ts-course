type Status = "ok" | "Loading" | "error";

const x: Status = "Loading";

function printId(id: number | string): void {
  if (typeof id === "string") console.log(id.toUpperCase());
  else console.log(id.toFixed(2));
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    person.forEach((e) => console.log(e));
    return 0;
  } else {
    return "yes";
  }
}
