const emailInput = document.querySelector('.user-email-input');
const passwordInput = document.querySelector('.user-password-input');
const errorMessages = document.querySelectorAll('.error-message');
const loginButton = document.querySelector('.btn-login');

const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function validateInput(inputElement, validationFunction) {
  if (validationFunction(inputElement.value) || (inputElement.value.length === 0)) {
    inputElement.classList.remove('is--invalid');
  } else {
    inputElement.classList.add('is--invalid');
  }
}

emailInput.addEventListener('input', () => {
  validateInput(emailInput, emailReg);
});

passwordInput.addEventListener('input', () => {
  validateInput(passwordInput, pwReg);
});

function checkUser(checkId, checkPw) {
  if ((checkId.value === user.id) && (checkPw.value === user.pw)) {
    console.log('반갑습니다')
    window.location.href = 'http://127.0.0.1:5500/mission01/naver_login/welcome.html';
  }else {
    throw new Error('찾을 수 없는 회원입니다')
  }
}

loginButton.addEventListener('click', () => {
  console.log(emailInput)
  checkUser(emailInput, passwordInput);
});


// loginButton.addEventListener('click', () => {
//   const emailInput = document.getElementById('emailInput').value;
//   const passwordInput = document.getElementById('passwordInput').value;

//   // 여기에 로그인 처리 로직을 작성합니다.
//   // 예를 들어, 서버로 요청을 보내고 응답을 확인하여 로그인 성공 여부를 판단할 수 있습니다.

//   // 로그인 성공 시
//   if (로그인 성공 여부) {
//     window.location.href = 'welcome.html';
//   } else {
//     // 로그인 실패 시 처리
//     console.log('로그인 실패');
//   }
// });

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}