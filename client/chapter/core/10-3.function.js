/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal = (...args) => {
  let total = 0;
  args.forEach(function (item) {
    total += item;
  });

  // return args.reduce((acc, item) => acc + item);
  console.log(total);
  return total;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => a + b + c + d;

// 화살표 함수와 this
const arrowFunction = () => {
  console.log("화살표함수:", this);
};

const user = {
  name: "oweaj",
  age: 28,
  address: "전남 담양",
  score: [90, 87, 88],
  totalScore: function () {
    let total = 0;
    this.score.forEach((item) => {
      this;
    });
    return total;
  },
};
console.log(user.totalScore());

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// pow(numeric: number, powerCount: number): number;

// 과제) ---반복문으로 제곱근 함수작성---

function pow(baseNum, powNum) {
  let total = 1;
  for (let i = 0; i < powNum; i++) {
    total *= baseNum;
  }
  return total;
}
console.log(pow(2, 10));

// 화살표 함수로 작성
let arrowPow = (baseNum, powNum) => {
  let total = 1;
  for (let i = 0; i < powNum; i++) {
    total *= baseNum;
  }
  return total;
};
console.log(arrowPow(2, 9));

// repeat(text: string, repeatCount: number): string;

// 과제) ---반복문으로 반복문장 함수작성---

function repeat(str, count) {
  let result = "";
  for (let i = 0; i <= count; i++) {
    result += str;
  }
  return result;
}
console.log(repeat("Nice JavaScript!!", 2));
