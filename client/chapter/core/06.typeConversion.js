/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(typeof String(YEAR));

// undefined, null
let days = null;
console.log(String(days));
console.log(String(undefined));

// boolean
let isKind = true;
console.log(typeof String(isKind));
console.log(typeof (isKind + ""));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));

// boolean
let dream = true;
console.log(+dream);

// string
let num = " 123 ";
console.log(typeof (num * 1));

// numeric string
let width = "300px";
let width2 = "300.576457px";
console.log(parseInt(width, 10));
console.log(parseFloat(width2, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(null));
console.log(Boolean("0"));
console.log(!!null);

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
