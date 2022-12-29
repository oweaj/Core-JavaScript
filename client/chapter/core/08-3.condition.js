/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
  NIGHT = "밤",
  LATE_NIGHT = "심야",
  DAWN = "새벽";

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case "아침":
    console.log("뉴스기사글을 읽는다");
    break;

  case "점심":
    console.log("자주 가는 식당에 가서 식사를 한다");
    break;

  case "저녁":
    console.log("동네 한바퀴를 조깅한다");
    break;

  case "밤":
    console.log("친구에게 전화를 걸어 수다를 떤다");
    break;

  case "심야":
  case "새벽":
    console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다");
    break;

  default:
    console.log("내일 다시");
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === "아침") {
  console.log("뉴스기사글을 읽는다");
} else if (thisTime === "점심") {
  console.log("자주 가는 식당에 가서 식사를 한다");
} else if (thisTime === "저녁") {
  console.log("동네 한바퀴를 조깅한다");
} else if (thisTime === "밤") {
  console.log("친구에게 전화를 걸어 수다를 떤다");
} else if (thisTime === "심야" || thisTime === "새벽") {
  console.log("한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다");
} else {
  console.log("내일 다시");
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(n) {
  return Math.round(Math.random() * n); // 0 ~ n 까지 난수(조건 지정된 무작위 범위 수를 가져옴 그래서 round로 반올림)
}

function getDay(day) {
  switch (day) {
    case 0:
      return "일요일";

    case 1:
      return "월요일";

    case 2:
      return "화요일";

    case 3:
      return "수요일";

    case 4:
      return "목요일";

    case 5:
      return "금요일";

    case 6:
      return "토요일";

    default:
      return "무슨 요일?";
  }
}
let result = getDay(getRandom(7));

console.log(result);

// 번외) 반복문으로도 해보기
// let day = 4;
// let dayList = ["일", "월", "화", "수", "목", "금", "토"];
// let result = [];

// for (let i = 0; i <= 6; i++) {
//   if (i === day) {
//     result.push(dayList[i]);
//   }
// }
// console.log(result);
