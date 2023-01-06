/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
let arr = [15, 34, 76];
console.log(typeof arr);
console.log(Array.isArray(arr));

function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
console.log(typeOf(arr));

/* 요소 순환 -------------------------------------------------------------- */

arr.forEach((item, index) => {
  console.log(`${index}번: ${item}`);
});

const span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log((e.target.style.background = "blue"));
  });
});

// forEach

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse();
// console.log(arr);

// splice
arr.splice(1, 1, 88, 5);
// console.log(arr);

// sort
arr.sort((a, b) => a - b);
console.log(arr);
/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
let todo = ["점심먹기", "오후에도 코딩", "저녁에도 코딩", "밤에도 코딩", "취침"];

let todoList = todo.map((plan) => {
  return `<li>${plan}</li>`;
});
console.log(todoList);

todoList.forEach((item) => {
  document.body.insertAdjacentHTML("beforeend", item);
});

let itemBox = arr.map((item) => item * 2);
console.log(itemBox);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
console.log(arr.indexOf(5));

// lastIndexOf
// includes
console.log(arr.includes(88));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  { id: 1, name: "로운" },
  { id: 2, name: "승택" },
  { id: 3, name: "연주" },
];
// find

let find = users.find((item, index) => item.id < 2);
console.log(find);

// findIndex
let findIndex = users.findIndex((item) => item.id === 3);
console.log(findIndex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter
let result = arr.filter((num) => {
  return num > 50;
});
console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬저",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표 살인마",
  },
];

// reduce

let age = friends.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(age);

let template2 = todo.reduce((acc, cur, index) => {
  return acc + `<li>계획${index + 1}: ${cur}</li>`;
}, "");

console.log(template2);

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = "성찬 보경 일범 세민 형진 주현";
// split 문자 => 배열
let nameArray = str.split(" ");
console.log(nameArray);

// join 배열 => 문자
console.log(nameArray.join(" => "));
