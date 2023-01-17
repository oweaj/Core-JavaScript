import { getNode } from "../dom/getNode.js";

const first = getNode(".first");

function delay(cb, tiemout = 1000) {
  setTimeout(cb, tiemout);
}

delay(() => {
  first.style.top = "-100px";
  delay(() => {
    first.style.transform = "rotate(360deg)";
    delay(() => {
      first.style.top = "0px";
    });
  });
});
