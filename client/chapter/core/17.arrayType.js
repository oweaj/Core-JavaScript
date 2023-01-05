/* ---------------------------------------------------------------------- */
/* Array Type                                                             */
/* ---------------------------------------------------------------------- */

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.

// 배열 선언
let friends = "손흥민,김연아,BTS,박재범".split(",");
console.log(friends);

let arr = new Array(6, 3, 7, 1, 2);
console.log(arr);

// 배열 요소의 총 갯수
console.log(friends.length);

// 배열 요소 변경
friends[4] = "페이커";
console.log(friends);

// 배열 요소 추가
let unshift = friends.unshift("봉준호");
console.log(friends);

let push = friends.push("JayPark");
console.log(friends);

// 배열 요소 제거
let shift = friends.shift();
console.log(shift);

let pop = friends.pop();
console.log(pop);

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문

for (let name of friends) {
  console.log(name);
}

// 배열 복사
let copiedArray = [...friends];
console.log(copiedArray);

// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?

console.log(matrix[1][1]);