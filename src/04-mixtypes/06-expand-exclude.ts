type T0 = Exclude<"a" | "b" | "C", "a">;
type T1 = Exclude<"a" | "b" | "C", "a" | "b">;
type T2 = Exclude<string | number | (() => void), Function>;

type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>;

type TextStatus = Exclude<Status, number>;

// opposite of exclude
type T4 = Extract<"a" | "b" | "C", "a">;
type T5 = Extract<"a" | "b" | "C", "a" | "b">;
type T6 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: "male" | "female";
}

type PersonNames = Extract<keyof Person, "fisrtName" | "lastName" | "fullName">;

type T00 = NonNullable<string | number | undefined>;

type T11 = NonNullable<string[] | null | undefined>;
