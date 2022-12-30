/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */
// let num = 0;

// while (num < 5) {
//   console.log(++num);
// }

const frontEndDev = ["HTML", "CSS", "SVG", "JavaScript", "jQuery", "React", "Redux"];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let x = 0;
while (x < frontEndDev.length) {
  console.log(frontEndDev[x]);
  x++;
}

// while 문 (역순환 : 역방향)
let y = frontEndDev.length - 1;
while (y >= 0) {
  console.log(frontEndDev[y]);
  y--;
}

// 변수없이 역순환 해보기
while (frontEndDev.length) {
  console.log(frontEndDev.pop());
}

// 성능 진단 : 순환 vs. 역순환

let check = performance.now();
