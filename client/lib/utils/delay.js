import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

const first = getNode(".first");

function delay(cb, tiemout = 1000) {
  setTimeout(cb, tiemout);
}

// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       first.style.top = "0px";
//     });
//   });
// });

// delayP()
//   .then(() => {
//     first.style.top = "-100px";
//     return delayP();
//   })
//   .then(() => {
//     first.style.transform = "rotate(360deg)";
//     return delayP();
//   })
//   .then(() => {
//     first.style.top = "0px";
//   });

// 기본 옵션
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공했습니다.",
  errorMessge: "에러가 발생했습니다.",
};

function delayP(options = {}) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  // 객체 합성 mixin (뒤 기준으로 options이 config에 합성)
  if (isObject(options)) {
    config = { ...config, ...options };
  }

  const { shouldReject, timeout, data, errorMessge } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessge);
    }, timeout);
  });
}

// 옵션을 변경하면 기본옵션으로 합성되어 변경한 옵션값이 나옴
// delayP(3000).then((result) => {
//   console.log(result);
// });

// delayP()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
