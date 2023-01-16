// input의 name값이 숫자가 올 경우 함수작성 문자형 숫자라서 isNaN()활용
export function isNumberCheck(data) {
  data = Number(data);
  return !isNaN(data);
}

function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

// 정확한 type 체크를 위해 만듬
export const isObject = (data) => typeOf(data) === "object";
export const isString = (data) => typeOf(data) === "string";
export const isArray = (data) => typeOf(data) === "array";
export const isNumber = (data) => typeOf(data) === "number" && !isNaN(data);
export const isBigInt = (data) => typeOf(data) === "bigint" && !isNaN(data);
export const isBoolean = (data) => typeOf(data) === "boolean";
export const isFunction = (data) => typeOf(data) === "function";
export const isUndefined = (data) => typeOf(data) === "undefined";
export const isNull = (data) => typeOf(data) === "null";
export const isSymbol = (data) => typeOf(data) === "symbol";
export const isElement = (node) => node.nodeType === document.ELEMENT_NODE;
