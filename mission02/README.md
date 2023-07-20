영화 포스터 갤러리 리드미
# 🥰엘리멘탈 포스터 갤러리
엘리멘탈 포스터 갤러리는 사용자가 클릭한 영화에 해당하는 정보를 화면에 출력하는 간단한 웹 페이지입니다. 사용자가 각 캐릭터 포스터를 클릭하면 해당 캐릭터의 이름이 페이지 상단에 표시되며, 배경색도 해당 캐릭터의 대표 색상으로 변경됩니다.

## 🏷️주요 기능
1. 사용자가 각 캐릭터 포스터를 클릭하면 해당 캐릭터의 이름을 화면 상단에 표시합니다.
2. 클릭한 캐릭터 포스터의 배경색이 해당 영화의 색상으로 변경됩니다.
3. 메인 사진에서 캐릭터 포스터의 이미지와 대체 텍스트(alt)가 올바르게 설정됩니다.
## 🏷️프로젝트 실행 방법
1. 엘리멘탈 포스터 갤러리 레포지토리를 클론 또는 다운로드합니다.
2. index.html 파일을 웹 브라우저로 엽니다.
3. 캐릭터 포스터를 클릭하여 기능을 확인합니다.

이 프로젝트는 영화 포스터 갤러리를 보여주는 간단한 예시로, 추가적인 기능과 디자인을 적용하여 더욱 풍부한 웹 페이지로 발전시킬 수 있습니다. 코드에 대한 주석과 각 함수들의 역할을 잘 이해하시고, 필요한 기능을 추가하여 웹 페이지를 더욱 완성도 있게 만들어보세요.

## 🏷️함수
### setImage
```js
function setImage(node, imageName, altPath) {
  if (typeof node === "string") node = getNode(node);

  if (!node) return;

  const imagePath = `./assets/${imageName.toLowerCase()}.jpeg`;

  attr(node, "src", imagePath);
  attr(node, "alt", altPath);
}
```
`setImage` 함수를 사용하면 특정 이미지 엘리먼트의 이미지 파일과 대체 텍스트를 손쉽게 설정할 수 있습니다.
### setNameText
```js
function setNameText(node, text) {
  if (!text || typeof text !== "string") {
    throw new TypeError("setNameText 함수의 인수는 문자열이어야 합니다.");
  }

  node.textContent = text;
}
```
`setNameText` 함수를 사용하면 특정 노드에 간편하게 텍스트를 설정할 수 있습니다. 이 함수를 활용하여 HTML 문서의 특정 부분에 동적인 텍스트를 적용하거나, 사용자 입력에 따라 텍스트를 변경하는 등 다양한 상황에서 유용하게 활용할 수 있습니다. 
### setBgColor
```js
function setBgColor(node, value) {
  if (typeof node === "string") node = getNode(node);

  if (!value || typeof value !== "string") {
    throw new TypeError("setBgColor 함수의 인수는 문자열이어야 합니다.");
  }

  node.style.background = value;
}
```
`setBgColor` 함수를 사용하면 특정 노드의 배경색을 간편하게 변경할 수 있습니다. 이를 활용하여 JavaScript를 통해 동적으로 웹 페이지의 스타일을 조작할 수 있으며, 사용자 인터랙션에 따라 동적으로 스타일을 변경하는데 유용하게 활용할 수 있습니다.