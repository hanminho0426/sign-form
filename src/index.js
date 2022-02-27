//autofocus html input 속성 안에 넣으므로서,
//오토포커스기능을 간단하게 만들수도 있다.

const id = document.getElementById('id')
window.addEventListener('load', () => id.focus())
const pw = document.getElementById('pw')
const pwCheck = document.getElementById('pw-check') //변수를 명명할떄 "-"불가하다 camelCase로 명명해야한다.

const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$') //정규표현식 시작은 "^"이고 끝은 "$"로 맺는다. {5.20} 5-20까지 허용
const PW_REGEX = new RegExp('^[a-zA-Z0-9]{8,16}$') //소문자대문자영어가능, 8자~16자
//정규표현식.test() 결과값을 true나 false로 반환한다.
const chID = (e) => {
    const checkID = ID_REGEX.test(e.target.value)
    //console.log(checkID)
}

const chPW = (e) => {
    const checkPW = PW_REGEX.test(e.target.value)
    //console.log(checkPW)
}

const chCheckPW = (e) => {
    const checkPW2 = pw.value === e.target.value
    console.log(checkPW2)
}

id.addEventListener('focusout', chID)
pw.addEventListener('focusout', chPW)
pwCheck.addEventListener('focusout', chCheckPW) //비밀번호 일치확인이기 떄문에 패스워드와 불일치시 true가 나와야한다.
