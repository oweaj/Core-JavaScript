import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";

// JSDoc
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return {disabled} set disabled
 */

export function disabledElement(node) {
  if (!isElement(node)) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드여야 합니다");
  }
  node.disabled = true;
}

export function enabledElement(node) {
  if (!isElement(node)) {
    typeError("disableElement 함수의 인자는 DOM 요소 노드여야 합니다");
  }
  node.disabled = false;
}

export function visibleElement(node) {
  if (!isElement(node)) {
    typeError("visibleElement 함수의 인자는 DOM 요소 노드여야 합니다");
  }
  node.hidden = false;
}

export function invisibleElement(node) {
  if (!isElement(node)) {
    typeError("invisibleElement 함수의 인자는 DOM 요소 노드여야 합니다");
  }
  node.hidden = true;
}
