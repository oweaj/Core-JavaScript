import { xhrData, insertLast, xhrPromise, oweaj } from "./lib/index.js";

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users/1",
//   (result) => {
//     insertLast("body", JSON.stringify(result));
//   },
//   (error) => {
//     insertLast("body", "데이터 로딩에 실패했습니다!!");
//   }
// );

// xhrPromise
//   .get("https://jsonplaceholder.typicode.com/users/2")
//   .then((result) => {
//     insertLast(document.body.JSON.stringify(result));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function render() {
  let response = await oweaj.get("https://jsonplaceholder.typicode.com/users/3");
  console.log(response.data);
}

render();
