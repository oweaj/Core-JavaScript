/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */
let num = 5;

// if (num > 0) {
//   alert("큼");
// } else if (num < 0) {
//   alert("작음");
// } else {
//   alert("같음");
// }

let result = num > 0 ? "큼" : num < 0 ? "작음" : "같음";
console.log(result);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)
if (didWatchMovie === "yes") {
  console.log("봤음");
} else if (goingToWatchMovie === "no") {
  console.log("보자");
} else {
  console.log("안봐");
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
let answer = didWatchMovie.includes("yes") ? "봤음" : goingToWatchMovie.includes("no") ? "보자" : "안봐";
console.log(answer);
