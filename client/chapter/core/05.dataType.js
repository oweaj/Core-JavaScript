/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let mesage1 = "hello";
let nickName = "oweaj";
let mesage3 = `안녕 내 이름은 ${nickName} 야`;

console.log(mesage1);
console.log(mesage3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 1000;
let num = 1000.556;

console.log("number :", typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof 23123n);
console.log(23123n + 10n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});
console.log(typeof null);

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol);
console.log(typeof Symbol("aa"));

console.log(typeof Math);
const fun = function () {};

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object
/* key value */
const user = {
  name: "oweaj",
  age: 27,
};
console.log(user.name);

// Array
let list = [10, 10000, 1000, 100];
console.log(list.length);

// function
function sum(a, b) {
  return a + b;
}
console.log(sum(7, 10));

function fishBreadCase(data) {
  return `${data} 맛 붕어빵`;
}
console.log(fishBreadCase("팥"));

// this
