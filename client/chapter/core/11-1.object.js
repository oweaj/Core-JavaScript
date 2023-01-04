/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

console.log(cssMap);

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: "user-valskoss002",
  name: "oweaj",
  email: "qwe1520156@naver.com",
  isSignIn: true,
  permissions: "paid",
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permissions);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log(authUser["permissions"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = "phone") {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-1111-4352",
  };
}

let user = createUser("tel");
console.log(user);

// 프로퍼티 포함 여부 확인
for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열
let keyArr = Object.keys(authUser);
console.log(keyArr);

function getPropertiesList(Object) {
  let arr = [];
  for (let key in Object) {
    if ({}.hasOwnProperty.call(Object, key)) arr.push(key);
  }
  return arr;
}

let result = getPropertiesList(authUser);

// 프로퍼티 제거 or 삭제

function removeProperty(Object, key) {
  Object[key] = null;
}
removeProperty(authUser, "name");
console.log(authUser);

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

let student = { name, email, authorization, isLogin };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성

function isEmptyObject(object) {
  return Object.keys(object).length === 0 ? true : false;
}

let empty = {};
console.log(isEmptyObject(empty));

let salaries = {
  John: 100,
  Ann: 160,
  pete: 430,
};

// 배열 구조 분해 할당   -- 많이 쓰인다
let total = 0;
for (let [key, value] of Object.entries(salaries)) {
  total += value;
}
console.log(total);

let color = ["#ff0000", "#2b00ff", "#00ff2f"];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

// 위 주석과 같은 값이 나온다
let [red, blue, green] = color;

console.log(blue);
