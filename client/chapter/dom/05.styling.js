/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode(".first");

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// first.classList.add("hello");
// function addClass(node, className) {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }

//   if (typeof className !== "string") {
//     typeError("className 인자의 타입형식은 문자 타입 이여야 합니다");
//   }

//   node.classList.add(className);
// }

// first.classList.remove("hello");
// function removeClass(node, className) {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }

//   if (!className) {
//     node.className = ""; // className 인자 값이 공백일 경우 함수 종료
//     return;
//   }

//   if (typeof className !== "string") {
//     typeError("className 인자 값의 타입형식은 문자 타입 이여야 합니다");
//   }

//   node.classList.remove(className);
// }

// first.classList.toggle("hello");
// function toggleClass(node, className) {
//   if (typeof node === "string") {
//     node = getNode(node);
//   }

//   if (typeof className !== "string") {
//     typeError("className 인자의 값의 타입형식은 문자 타입 이여야 합니다");
//   }

//   node.classList.toggle(className);
// }

addClass(".first", "hello");

removeClass(".first", "hello");

toggleClass(".first", "hello");

// console.log(first.classList.contains("is-active"));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = "yellow";

console.log(first.style.fontSize);

/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize;

console.log(size);

// getCss함수
console.log(getCss(".first", "font-size"));

// setCss함수
setCss(".first", "color", "green");

// getCss 와 setCss 함수를 한번에 통합한 css함수 작성
css(".first", "font-size", "100px");
css(".first", "font-size");

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
