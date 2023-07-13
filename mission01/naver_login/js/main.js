const emailInput = document.querySelector('.user-email-input');
const passwordInput = document.querySelector('.user-password-input');
const errorMessages = document.querySelectorAll('.error-message');
const form = document.querySelector('form');

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
    window.location.href = 'welcome.html';
  }else if(checkId.value.length === 0 || checkPw.value.length === 0) {
    throw new Error('아이디와 비밀번호는 필수 입력값입니다.. ')
  }
  else {
    throw new Error('찾을 수 없는 회원입니다')
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkUser(emailInput, passwordInput);
});

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
