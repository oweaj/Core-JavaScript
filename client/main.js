import { getInputValue, getNode, getRandom, insertLast, clearContents, typeError, isNumberCheck, showAlert } from "./lib/index.js";

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

submit.addEventListener("click", clickSubmitHandler);
