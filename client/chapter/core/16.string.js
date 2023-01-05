/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = "Less is more.";

// for (let key of message) {
//   console.log(key);
// }

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[2];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message = "more" + message[6];
// console.log(message);

// 부분 문자열 추출
let slice = message.slice(8);
console.log(slice);

let subString = message.substring(1, 5);
console.log(subString);

// let subStr;  사라짐

// 문자열 포함 여부 확인
let indexOf = message.indexOf("s"); // 중복은 문자는 한 번만 첫 인덱스가 출력, 없는 문자일경우 -1출력
console.log(indexOf);

let lastIndexOf = message.lastIndexOf("L");
console.log(lastIndexOf);

let includes = message.includes("is");
console.log(includes);

let startsWith = message.startsWith("L"); // 문자에 첫글자가 "L"로 시작하냐를 물어봄. 문자의 첫글자 확인할때 쓰임
console.log(startsWith);

let endsWith = message.endsWith("z");
console.log(endsWith);

// 공백 잘라내기
// 사라짐
let trimLeft;
let trimRight;

let trim = message.trim(); // 공백 없애기 단 문자안에 띄어쓰기는 제외
console.log(trim);

let trimReplace = message.replace(/\s*/g, ""); // 정규표현식을 이용한 문자안에 띄어쓰기 없애기
console.log(trimReplace);

// 텍스트 반복
let repeat = message.repeat(2);
console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
let toUpperCase = message.toLocaleUpperCase();

console.log(toLowerCase);
console.log(toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
