// numbers
let x = 10;
let y = 1234n;
let z = NaN;

// string
let str1 = "Hello World";
// str1 = 1;
let symb = Symbol("as");
// let d = str1 + symb;

// boolean
let o = true;
o = false;
// o = 1;

// nothing
let h: undefined = undefined;
let g: null = null;

// literal
const num = 108;
const str2 = "str";

// universal
let mm: any = 1;
mm = "str"; // no error
mm = [];

let xx: unknown = 2;
// xx.toUppercase(); // error
if (typeof xx === "string") xx.toUpperCase(); // correct
