/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
let age = 27;

if (age >= 14 && age <= 90) {
  console.log("포함됨");
} else {
  console.log("포함안됨");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { isFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { isTruthy: true };

let ID = prompt("아이디를 입력해주세요", "");

if (ID === "Admin") {
  let PW = prompt("패스워드를 입력해주세요", "4자리이상");
  if (PW === "pass") {
    console.log("환영합니다");
  } else if (PW.length < 3) {
    console.log("패스워드 4자리이상 해주세요");
  } else {
    console.log("패스워드 다시한번 확인해주세요");
  }
} else if (ID !== "Admin") {
  console.log("아이디를 다시한번 확인해주세요");
} else {
  console.log("환영합니다");
}
