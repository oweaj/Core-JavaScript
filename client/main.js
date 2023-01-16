import { diceAnimation, disabledElement, enabledElement, getNode, getNodes, invisibleElement, visibleElement, insertLast, clearContents, memo, attr } from "./lib/index.js";

// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기

// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화
// 3. 스크롤 밑으로 보내기
// 4. 메모이제이션 패턴

// const rollingBtn = getNode(".buttonGroup > button:nth-child(1)");
// const recordBtn = getNode(".buttonGroup > button:nth-child(2)");
// const resetBtn = getNode(".buttonGroup > button:nth-child(3)");

// 배열 구조분해할당
const [rollingBtn, recordBtn, resetBtn] = getNodes(".buttonGroup > button");
const recordListWrapper = getNode(".recordListWrapper");

memo("@tbody", () => getNode(".recordListWrapper tbody"));

let count = 0;
let total = 0;

function rederRecordListItem() {
  let cubeValue = Number(attr(memo("cube"), "data-dice"));

  let template = `
    <tr>
      <td>${++count}</td>
      <td>${cubeValue}</td>
      <td>${(total += cubeValue)}</td>
    </tr>`;

  insertLast(memo("@tbody"), template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight; // 스크롤 길이만큼 찍어준다(기록표 볼때마다 새로운 최신 값으로 스크롤이 아래로 이동)
}

//@@@@@@@@@@@@@ event @@@@@@@@@@@@@@@@@@

// 주사위 굴리기 버튼 클릭하면 주사위 작동
const handlerRollingDice = () => {
  let stopAnimation;
  let isRolling = false;

  // 클로저
  return () => {
    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 200);
      disabledElement(recordBtn);
      disabledElement(resetBtn);
    } else {
      clearInterval(stopAnimation);
      enabledElement(recordBtn);
      enabledElement(resetBtn);
    }

    isRolling = !isRolling;
  };
};

// record 클릭하면 보여짐
const handlerRecord = () => {
  visibleElement(recordListWrapper);
  rederRecordListItem();
};

// 초기화 클릭하면 record 사라짐
const handlerReset = () => {
  count = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents(memo("@tbody"));
};

rollingBtn.addEventListener("click", handlerRollingDice()); // 함수 안에 리턴한 함수를 실행해야하니까 ()로 호출
recordBtn.addEventListener("click", handlerRecord);
resetBtn.addEventListener("click", handlerReset);

// IIFE 패턴 방법
// const handlerRollingDice = (() => {
//   let stopAnimation;
//   let isRolling = false;

//   return () => {
//     if (!isRolling) {
//       stopAnimation = setInterval(diceAnimation, 500);
//     } else {
//       clearInterval(stopAnimation);
//     }

//     isRolling = !isRolling;
//   };
// })();

// rollingBtn.addEventListener("click", handlerRollingDice); // 즉시실행함수로 인해 따로 호출할 필요없음
