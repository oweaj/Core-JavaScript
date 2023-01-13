import { typeError } from "../error/typeError.js";

export function getRandom(n) {
  if (!n) {
    typeError("getRandom 함수는 1개 이상의 매개변수를 받아야 합니다.");
  }

  if (typeof n !== "number") {
    typeError("getRandom 함수의 매개변수의 타입이 숫자여야 합니다.");
  }

  return Math.round(Math.random() * n);
}