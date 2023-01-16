// input의 name값이 숫자가 올 경우 함수작성 문자형 숫자라서 isNaN()활용
export function isNumberCheck(data) {
  data = Number(data);
  return !isNaN(data);
}
