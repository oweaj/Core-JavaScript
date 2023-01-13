import { getNode, refError } from "../index.js";

// Input에 들어온 value값 가져오기
export function getInputValue(node) {
  if (typeof node === "string") {
    node = getNode(node);
    if (node.tagName !== "INPUT") {
      refError("getInputValue 함수를 다시 확인해주세요");
    }
  }
  return node.value;
}
