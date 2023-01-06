function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입만 가능합니다");
  }
  return document.querySelector(node);
}
