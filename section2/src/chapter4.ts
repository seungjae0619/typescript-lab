// 타입 별칭

type User = {
  id: number;
  nickname: string;
  name: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  nickname: "tmdwo",
  name: "승재",
  birth: "2004.06.19",
  bio: "안녕하세요",
  location: "인천",
};

let user2: User = {
  id: 2,
  nickname: "tmdwo",
  name: "승재",
  birth: "2004.06.19",
  bio: "안녕하세요",
  location: "인천",
};

// 인덱스 시그니처
type CountryCode = {
  [key: string]: string;
};

let countryCodes: CountryCode = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountrtNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberAndStringCodes: CountrtNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
