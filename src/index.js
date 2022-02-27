//***autofocus html input 속성 안에 넣으므로서,
//오토포커스기능을 간단하게 만들수도 있다.

const id = document.getElementById('id')
window.addEventListener('load', () => id.focus())
const pw = document.getElementById('pw')
const pwCheck = document.getElementById('pw-check')
//변수를 명명할떄 "-"불가하다 camelCase로 명명해야한다.

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$')
//정규표현식 시작은 "^"이고 끝은 "$"로 맺는다. {5.20} 5-20까지 허용
//소문자대문자영어가능, 8자~16자
//정규표현식.test() 결과값을 true나 false로 반환한다.
const confirmID = (value) => {
    const checkID = ID_REGEX.test(value)
    console.log('ID', checkID)
}
id.addEventListener('focusout', (event) => confirmID(event.target.value))

const confirmPW = (value) => {
    const checkPW = PW_REGEX.test(value)
    console.log('PW', checkPW)
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
