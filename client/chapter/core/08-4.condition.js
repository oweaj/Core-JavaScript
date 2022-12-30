/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = "user@company.io";
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress === undefined || emailAddress === null ? "user@company.io" : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = emailAddress ?? "user@company.io";
receivedEmailAddress = emailAddress || "user@company.io";
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
let test = "10a";
let init = 0;
let button = document.querySelector(".button");

if (button) {
  button.style.height = `${init ?? parseInt(test)}px`;
}

console.log(undefined || test);
console.log(undefined ?? test);

console.log(null || test);
console.log(null ?? test);

console.log(true || test);
console.log(true ?? test);

console.log(false || test);
console.log(false ?? test);
