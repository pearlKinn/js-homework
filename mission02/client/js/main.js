/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nickName = getNode(".nickName");
const nav = getNode(".nav");
const navItems = getNodes(".nav li");
const visualImage = getNode(".visual img ");

function clickImg(e) {
  const target = e.target.closest("li");
  const index = attr(target, "data-index");
  const nickName = getNode(".nickName");
  const selectedMovie = data[index - 1];
  const { name, color, alt } = selectedMovie;
  const gradientColor = `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;
  
  if (!target) return;

  navItems.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  setBgColor("body", gradientColor);
  setNameText(nickName, name);
  setImage(visualImage, name, alt);

}

function setImage(node, imageName, altPath) {
  if (typeof node === "string") node = getNode(node);

  if (!node) return;

  const imagePath = `./assets/${imageName.toLowerCase()}.jpeg`;

  attr(node, "src", imagePath);
  attr(node, "alt", altPath);
}

function setNameText(node, text) {
  if (!text || typeof text !== "string") {
    throw new TypeError("setNameText 함수의 인수는 문자열이어야 합니다.");
  }

  node.textContent = text;
}

function setBgColor(node, value) {
  if (typeof node === "string") node = getNode(node);

  if (!value || typeof value !== "string") {
    throw new TypeError("setBgColor 함수의 인수는 문자열이어야 합니다.");
  }

  node.style.background = value;
}

nav.addEventListener("click", clickImg);