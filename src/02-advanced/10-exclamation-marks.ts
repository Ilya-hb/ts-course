let word: string | null | undefined = null;
const num = 10;

if (num > 5) {
  word = "abc";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
  const fullname: string = name!;
}

interface Person {
  name: string;
  age: number;
  sex: "female" | "male";
}
function printName2(person?: Person) {
  console.log(person!.name);
  console.log(person?.name);
}
