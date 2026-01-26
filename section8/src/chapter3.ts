/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type Partialuser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 수정하는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: "박승재",
    age: 23,
  };
}

function updateUser(user: Partialuser) {
  // ...수정하는 기능
}

updateUser({
  age: 24,
});
