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
  const upToLow = data[index - 1].name.toLowerCase();
  const color = data[index - 1].color;

  const gradientColor = `linear-gradient(to bottom, ${color[0]}, ${color[1]})`;

  setBgColor('body' , gradientColor);
  if (!target) return;

  navItems.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  nickName.textContent = data[index - 1].name;

  attr(visualImage, "src", `./assets/${upToLow}.jpeg`);
  attr(visualImage, "alt", data[index - 1].alt);
}



// function setImage(node) {
//   const anchor = node.target.closest("a");
//   const index = attr(target, "data-index");
//   if (!anchor) return;

//   console.log(index);

//   attr(visualImage ,'src', `./assets/${data[index - 1].jpeg}`)
//   attr(visualImage ,'alt', data[index - 1].alt)
// }

// function setNameText(className, text) {}

nav.addEventListener("click", clickImg);
