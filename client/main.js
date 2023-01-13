const first = getNode("#firstNumber");
const second = getNode("#secondNumber");
const done = getNode("#done");
const result = getNode(".result");

// 작은 단위부터 함수로 분리해주기

// Input에 들어온 value값 가져오기
function getInputValue(node) {
  if (typeof node === "string") {
    node = getNode(node);
    if (node.tagName !== "INPUT") {
      refError("getInputValue 함수를 다시 확인해주세요");
    }
  }
  return node.value;
}

// value값 더하기
function sum(valueA, valueB) {
  return valueA + valueB;
}

// 기존 컨텐츠 정리
function clearContents(node) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  node.textContent = "";
}

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
