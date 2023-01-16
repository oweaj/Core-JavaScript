import { getInputValue, getNode, getRandom, insertLast, clearContents, typeError, isNumberCheck, showAlert, copy, addClass, removeClass } from "./lib/index.js";

import { jujeobData } from "./data/data.js";

const submit = getNode("#submit");
const result = getNode(".result");

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue("#nameField");
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    showAlert(".alert-error", "이름을 반드시 입력해주세요!", 2000);
    // GSAP 코어 적용
    // gsap.fromTo(result, 0.01, { x: -5 }, { x: 5, clearProps: "x", repeat: 20 });
    addClass(result, "shake");
    setTimeout(() => {
      removeClass(result, "shake");
    }, 1000);
    return;
  } else if (isNaN(name) === false) {
    showAlert(".alert-error", "올바른 이름을 입력해주세요!", 2000);
    return;
  }

  // 유틸함수 import
  // if (isNumberCheck(name)) {
  //   alert("※ 이름을 다시 한번 확인해주세요 ※");
  // }

  clearContents(result);
  insertLast(result, pick);
}

function clickCopyHandler() {
  let text = result.textContent;

  // promise
  copy(text).then(() => {
    showAlert(".alert-success", "클립보드 복사가 완료됐습니다", 2000);
  });
}

submit.addEventListener("click", clickSubmitHandler);
result.addEventListener("click", clickCopyHandler);
