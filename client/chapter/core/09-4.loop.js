/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return "test";
  },
};

let key = "standerdName";

// console.log( key in javaScript );

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = "추가추가추가추가";

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// Object.prototype === {} 같은 값

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    // for in 만 적용할경우 정확한 값을 가져올수 없으니 if조건으로 객체 안에 있는 키값 들만 가져오게끔 한다 (if조건 없으면 위에서 추가한 값도 나온다 23번줄)
    console.log(key);
  }
}

// for ~ in 문  => 배열x 객체에 양보하자
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

let tens = [10, 9, 18, 60, 37];

for (let num in tens) {
  if ({}.hasOwnProperty.call(tens, num)) {
    console.log(tens[num]);
  }
}
