import { deleteStorage, getNode, loadStorage, saveStorage } from "./lib/index.js";

const textField = getNode("#textField");
const deleteButton = getNode("input[value='삭제']");

function inputHandler() {
  saveStorage("area", textField.value); // area키를 저장하고 값을 실시간 저장
}

// 새로고침을 해도 입력값이 없어지지 않음
loadStorage("area").then((result) => {
  textField.value = result;
});

function buttonHandler() {
  deleteStorage();
}

textField.addEventListener("input", inputHandler);
deleteButton.addEventListener("click", buttonHandler);
