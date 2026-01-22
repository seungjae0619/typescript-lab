/**
 * Unknown 타입
 * Unknown 타입은 모든 타입의 부모이기 때문에 업캐스팅은 가능
 * 하지만 다운 캐스팅은 불가능하다
 */
function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  //업 캐스팅 (오류)
  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * Never 타입
 * Never 타입은 모든 타입의 서브타입임
 * 즉, 집합으로 보면 공집합이다
 *
 * Never 타입은 어떠한 값을 가져서는 안 될 때 사용
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 다운 캐스팅은 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 업 캐스팅은 타입 오류 발생
  //   let never1: never = 10;
  //   let never2: string = "string";
  //   let never3: never = true;
}

/**
 * Void 타입
 * 반환 값이 없을 때 사용,
 * undefined 값의 슈퍼 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입
 * 모든 타입의 슈퍼 타입이면서, 모든 타입의 서브 타입이기도 함
 *
 * Any 타입은 타입 계층을 아예 무시해버리기 때문에 사용을 자제해야함
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // unknown 타입을 any 타입으로 다운 캐스팅하는 것은 가능함
  anyVar = unknownVar;

  undefinedVar = anyVar;

  // never 타입은 순수한 골집합이므로 any 타입 조차 불가능
  //   neverVar = anyVar;
}
