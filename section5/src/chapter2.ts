/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  name: string; // 반드시 동일한 타입으로 선언, 리터럴 X
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 23,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
