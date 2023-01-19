/* global gsap */
import { xhrData, insertLast, xhrPromise, oweaj, createUserCard, renderUserCard, getNode, changeColor, delayP, randerSpinner, randerEmptyCard, getNodes, attr } from "./lib/index.js";

const userCardContainer = getNode(".user-card-inner");

async function rendingUserList() {
  randerSpinner(userCardContainer);

  try {
    // await delayP(2000); // 가상 로딩 만들어서 보기
    getNode(".loadingSpinner").remove();

    let response = await oweaj.get("http://localhost:3000/users");
    let userData = response.data;

    // for (let x of userData) {
    //   renderUserCard(userCardContainer, x);
    // }

    // forEach 방법 => 배열 순환은 forEach가 좋다라고 하지만 본인 스타일임
    userData.forEach((item) => renderUserCard(userCardContainer, item));

    // console.log(gsap.utils.toArray(".user-card"));

    changeColor(".user-card");

    gsap.to(gsap.utils.toArray(".user-card"), {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
    });
  } catch (err) {
    randerEmptyCard(userCardContainer);
  }
}

rendingUserList();

function deleteBtn(e) {
  let deleteButton = e.target.closest("button"); // 태그명 말고 클래스로 넣어도 가능
  let article = e.target.closest("article");

  if (!article || !deleteButton) return;

  let id = attr(article, "data-index").slice(5);

  oweaj.delete(`http://localhost:3000/users/${id}`).then(() => {
    userCardContainer.innerHTML = "";
    rendingUserList();
  });
}

userCardContainer.addEventListener("click", deleteBtn);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

// async function render() {
//   let response = await oweaj.get("https://jsonplaceholder.typicode.com/users/3");
//   console.log(response.data);
// }

// render();
