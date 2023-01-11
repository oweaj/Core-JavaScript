/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode(".visual");
const news = getNode(".news");
const desc = getNode(".desc");

visual.addEventListener("click", function (e) {
  let elem = e.currentTarget;
  // console.log("target : ", e.target); // 마우스로 클릭한 요소
  // console.log("currentTarget : ", e.currentTarget);

  console.log(elem);
  // console.log(this === e.currentTarget); // this와 같지만 this를 안쓰는이유는 화살표함수에서 this를 바인딩하지 않기때문
  console.log("%c visual", "background:dodgerblue");
  css(".pop", "display", "block");
});

getNode(".pop").addEventListener("click", (e) => {
  e.stopPropagation();
  css(".pop", "display", "none");
});

// news.addEventListener("click", function () {
//   console.log("%c news", "background:orange");
// });

// desc.addEventListener("click", function (e) {
//   e.stopPropagation(); // 클릭하면 버블링으로 다 나오니까 클릭한 요소만 나오게 한다.
//   console.log("%c desc", "background:pink");
// });

/* 캡처링 ----------------------------------------------------------------- */
