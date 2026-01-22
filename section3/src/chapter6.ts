/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "승재";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

// 10은 unknown의 서브타입, unknown은 string의 슈퍼타입이므로 단언은 가능 사용은 X
let num3 = 10 as unknown as string;

/**
 * const 단언
 */
let num4 = 10 as const;

// 일일이 다 readonly를 붙여줄 필요 없이 as const만 붙여서 가능
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "승재",
};

// author? js의 옵셔널 체이닝 문법으로 author가 null 또는 undefined일 경우 값 전체가 undefined가 됨 (오류 방지)
// const len: number = post.author?.length;

const len: number = post.author!.length;
