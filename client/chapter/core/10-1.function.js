/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log("총 합 = ", 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

let result = calcPrice(100, 500);

function calcPrice(price1, price2, price3 = getRandomValue(), price4 = 0) {
  // if (!price4) {
  //   price4 = 0;
  // }

  if (!price1 || !price2) {
    throw new Error("인수 첫번째와 두번째 price값은 필수 입력값 입니다.");
  }

  return price1 + price2 + price3 + price4;
}
console.log(result);

// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
// 1. 하나의 기능만 수행해야함 (관심사의 분리)
// 2. 읽었을때 바로 기능을 알 수 있게끔 해야함
// 3. 재사용성이 좋아야한다.

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
// let rem = ("20px", "16px");

function rem(pxValue, base = "16px") {
  if (typeof pxValue === "string" || typeof base === "string") {
    pxValue = parseInt(pxValue, 10);
    base = parseInt(base, 10);
  }
  return `${pxValue / base}rem`;
}

console.log(rem("20px"));
console.log(rem(50));
console.assert(rem(20) === "1.25rem");
console.assert(rem("30px") === "1.875rem");
console.assert(rem("56px", 10) === "5.6rem");

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
