//***autofocus html input 속성 안에 넣으므로서,
//오토포커스기능을 간단하게 만들수도 있다.

const id = document.getElementById('id')
const idMsg = document.getElementById('id-msg')
window.addEventListener('load', () => id.focus())
const pw = document.getElementById('pw')
const pwCheck = document.getElementById('pw-check')
//변수를 명명할떄 "-"불가하다 camelCase로 명명해야한다.

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')
//정규표현식 시작은 "^"이고 끝은 "$"로 맺는다. {5.20} 5-20까지 허용
//소문자대문자영어가능, 8자~16자
//정규표현식.test() 결과값을 true나 false로 반환한다.
const ID_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '5-20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
} //에러 메시지 정의

const confirmID = (value) => {
    let checkID
    if (value.length === 0) {
        checkID = 'required'
    } else {
        checkID = ID_REGEX.test(value) ? true : 'invalid'
    }
    if (checkID !== true) {
        id.classList.add('border-red-600')
        idMsg.innerText = ID_ERROR_MSG[checkID]
    } else {
        id.classList.remove('border-red-600')
        id.innerText = ''
    }
}
id.addEventListener('focusout', (event) => confirmID(event.target.value))

const confirmPW = (value) => {
    let checkPW
    if (value.length === 0) {
        checkPW = 'required'
    } else {
        checkPW = PW_REGEX.test(value) ? true : 'invalid'
    }
    console.log(checkPW)
}
pw.addEventListener('focusout', (event) => confirmPW(event.target.value))

const confirmCheckPW = (value) => {
    const checkPW2 = pw.value === value
    console.log('PW2', checkPW2)
}
pwCheck.addEventListener('focusout', (event) =>
    confirmCheckPW(event.target.value)
)

const submit = document.getElementById('submit')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    confirmID(id.value)
    confirmPW(pw.value)
    confirmCheckPW(pwCheck.value)
})
