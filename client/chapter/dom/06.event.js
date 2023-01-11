/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

let first = getNode(".first");
let ground = getNode(".ground");
let ball = getNode(".ball");

function handler() {
  console.log("hit !!");
}

first.addEventListener("click", handler);

// .first 클릭하면 .second 사라지게 하기
function secondHide() {
  getNode(".second").hidden = true;

  // 만들었던 유틸함수 이용
  // css(".second", "display", "none");
}

first.addEventListener("click", secondHide);

// bind 유틸함수 만듬 (lib 폴더)
// let off = bindEvent(".first", "click", handler);
// bindEvent(".second", "click", off);

// - addEventListener
// - removeEventListener

ground.addEventListener("click", function (e) {
  console.log(e.offsetX, e.offsetY);
  // 운동장에 클릭하면 축구공이 마우스찍은 가운데로 오게 하기
  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY - ball.offsetHeight / 2}px)`;
});

ground.addEventListener("mousemove", function (e) {
  // console.log(e.offsetX, e.offsetY);
});
