type ans1 = 64 extends number ? true : false;

type ans2 = number extends 64 ? true : false;

type ans3 = string[] extends 64 ? true : false;

type ans4 = string[] extends any[] ? true : false;

type ans5 = never extends any ? true : false;

type ans6 = any extends any ? true : false;

type ans7 = Date extends { new (...args: any[]): any } ? true : false;

type ans8 = typeof Date extends { new (...args: any[]): any } ? true : false;

type test = typeof Date;

type test2 = typeof NaN;
type T4 = number | string extends string ? true : false;
