// Опиши интерфейс User ниже
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

function getUserName(user: User): string {
  return user.name;
}

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
merge({ name: "ilya" }, { surname: "holuban" });

type TUser = { id: number; name: string };
type Nullable<T> = {
  [P in keyof T]?: T[P] | null;
};
type NullableUser = Nullable<TUser>;

// 4. не особо шарю как работает эта функция но вот я попытался сделать такое
function myPick<T, K>(arg1: T, arg2: K) {
  return [arg1, arg2];
}

function identity<T>(val: T): T {
  return val;
}
identity("asd");
