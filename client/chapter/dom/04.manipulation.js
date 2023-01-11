/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
div1.className = "append";
div1.textContent = "node 끝에 삽입";
div2.className = "prepend";
div2.textContent = "node 맨 앞에 삽입";
div3.className = "before";
div3.textContent = "node 이전에 삽입";
div4.className = "after";
div4.textContent = "node 다음에 삽입";

console.log(div1);

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

const h1 = getNode("h1");

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// h1.append(div1);

// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// h1.prepend(div2);

// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// h1.before(div3);

// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// h1.after(div4);

// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

let index = 1;
let template = `<div class='box${index}'>새롭게 추가된 엘리먼트 입니다</div>`;

// h1.insertAdjacentHTML("beforeend", template);

insertBefore("h1", template);

insertFirst("h1", template);

insertLast("h1", template);

insertAfter("h1", template);

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입