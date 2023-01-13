import { getNode, sum, getInputValue, clearContents, insertLast } from "./lib/index.js";

// 작은 단위부터 함수로 분리해주기

const first = getNode("#firstNumber");
const second = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

function handler(e) {
  e.preventDefault();

  let firstValue = Number(getInputValue(first));
  let secondValue = Number(getInputValue(second));
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

done.addEventListener("click", handler);

function inputHandler() {
  let firstValue = Number(getInputValue(first));
  let secondValue = Number(getInputValue(second));
  let total = sum(firstValue, secondValue);

  clearContents(result);
  insertLast(result, total);
}

first.addEventListener("change", inputHandler);
second.addEventListener("change", inputHandler);
