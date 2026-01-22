/**
 * 타입 추론
 * 타입 추론은 변수를 초기화 할 때 많이 사용됨
 */
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "승재",
  profile: {
    nickname: "tmdwo",
  },
  urls: ["tmdwo0619.vercel"],
};

let { id, name, profile, urls } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 초기화를 하지 않으면 암묵적으로 any 타입으로 지정함
// 명시적 any 타입과는 다름
let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
