/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// let firstValue = Number(prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1));
// let secondValue = Number(prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2));

// alert(firstValue + secondValue);

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = "10";
let b = "30";

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
let ternary = a + b > 20 ? "큼" : "작음";

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 5 - 2;

// 산술 연산자: 곱셈
let multiplication = 5 * 2;

// 산술 연산자: 나눗셈
let division = 5 / 2;

// 산술 연산자: 나머지
let remainder = 5 % 2;

// 산술 연산자: 거듭 제곱
let power = 5 ** 2;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = "9" * "3";

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];
console.log(onlyWorkDefaultValues);

let newArray = [1, 2, 3].concat([4, 5, 6]);
console.log(newArray);

// 전개연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let newArr = [...firstArray, ...secondArray, 7, 8, 9, 10]; /* 각 배열을 복사하는 느낌 */
console.log(newArr);

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

let num = 100;
// 선,후 증감 연산자
// ++, --
num++; // 100
console.log(num); // 101
++num; // 102
console.log(num); // 102

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 135
// total = (2 * 5) + 5 ** 3
// total = 10 + 125 = 135

// 번외) 계산해보기
let num1 = 2;
let result = (num1 += 3) - num1 + (num1 -= 1) * num1 + 5;
// 5 - 5 + 4 * 4 + 5 = 21
console.log(result);
