import { getRandomColor } from "../../utils/randomColor.js";

export default function () {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
