import { typeError } from "../error/typeError.js";

/* readyState
import { typeError } from '../error/typeError';
import { insertLast } from '../dom/insert';
0: uninitalized  // 초기화
1: loading  // 로딩
2: loaded  // 로딩이 완료됨
3:interative  // 인터렉티브
4:complete  // 완료
 */

// 비동기 통신 오픈
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.addEventListener("readystatechange", () => {
//   if (xhr.status >= 200 && xhr.status < 400) {
//     if (xhr.readyState === 4) {
//       console.log("통신 성공");
//     }
//   } else {
//     console.error("통신 실패");
//   }
// });

// 함수 매개변수로 바로 객체구조분해 할당
export function xhrData({
  method = "GET",
  url = "",
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  // headers 부분
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response)); // 우리가 쓰려면 객체화(parse)
      }
    } else {
      onFail("통신 실패");
    }
  });

  // 서버에 요청
  xhr.send(JSON.stringify(body)); // 서버가 읽기 위해 문자화(stringify)
}

// 단축표기법(shorthand property)
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    // method = "GET" // 위에 기본값으로 지정해둬서 값을 지정안해도 됨
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.delete(
//   "https://jsonplaceholder.typicode.com/users/3",
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
//   name: "Jang",
//   username: "oweaj",
//   email: "qwe@naver.com",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "dam",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// });

//
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// promise API

const defaultOptions = {
  url: "",
  method: "GET",
  body: null,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const { method, url, body, headers } = Object.assign({}, defaultOptions, options);

  if (!url) typeError("서버와 통신할 url은 반드시 필요합니다.");

  xhr.open(method, url);

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject("실패 실패 실패");
      }
    });
  });
}

// xhrPromise({
//   url: "https://jsonplaceholder.typicode.com/users",
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.delete = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "DELETE",
  });
};

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/2")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
