/**
 * 기본 타입의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 *
 * 객체의 속성이 더 적은 타입이 슈퍼 타입이 됨
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "책",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사로 인해 정의된 프로퍼티만 초기화를 해줘야함
 *
 */
let book2: Book = {
  name: "책",
  price: 33000,
  // skill: "reactjs",
};

// 객체 리터럴을 사용한 건 아니기 때문에 초과 프로퍼티 검사를 하지 않음
// (리터럴은 변수에 데이터 그 자체를 대입하는 것을 뜻함)
let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: "책",
    price: 33000,
    // skill: "reactjs",
  });
  // 초과 프로퍼티 검사를 방지하기 위해서는 인자로 객체를 넘겨줘야 함
  func(programmingBook);
}
