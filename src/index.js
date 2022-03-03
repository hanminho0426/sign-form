//***autofocus html input 속성 안에 넣으므로서,
//오토포커스기능을 간단하게 만들수도 있다.

const id = document.getElementById('id')
const idMsg = document.getElementById('id-msg')
window.addEventListener('load', () => id.focus())

const pw = document.getElementById('pw')
const pwMsg = document.getElementById('pw-msg')
const pwCheck = document.getElementById('pw-check')
const pwCheckMsg = document.getElementById('pw-check-msg')
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
const PW_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '8-16자 영문 대 소문자,숫자를 사용하세요.',
}
const PW_CHECK_ERROR_MSG = {
    required: '필수 정보입니다.',
    invalid: '비밀번호가 일치하지 않습니다.',
}
const checkIdRegex = (value) => {
    if (value.length === 0) {
        return 'required'
    } else {
        return ID_REGEX.test(value) ? true : 'invalid'
    }
}

const confirmID = (value) => {
    const checkID = checkIdRegex(value)
    if (checkID !== true) {
        id.classList.add('border-red-600')
        idMsg.innerText = ID_ERROR_MSG[checkID]
    } else {
        id.classList.remove('border-red-600')
        id.innerText = ''
    }
    return checkID
}

id.addEventListener('focusout', (event) => confirmID(event.target.value))

const checkPwRegex = (value) => {
    if (value.length === 0) {
        return 'required'
    } else {
        return PW_REGEX.test(value) ? true : 'invalid'
    }
}

const confirmPW = (value) => {
    const checkPW = checkPwRegex(value)
    if (checkPW !== true) {
        pw.classList.add('border-red-600')
        pwMsg.innerText = PW_ERROR_MSG[checkPW]
    } else {
        pw.classList.remove('border-red-600')
        pw.innerText = ''
    }
    return checkPW
}
pw.addEventListener('focusout', (event) => confirmPW(event.target.value))

const checkPwCheckRegex = (value) => {
    if (value.length === 0) {
        return 'required'
    } else {
        return value === pw.value ? true : 'invalid'
    }
}
const confirmCheckPW = (value) => {
    let checkPW2 = checkPwCheckRegex(value)
    if (checkPW2 !== true) {
        pwCheck.classList.add('border-red-600')
        pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[checkPW2]
    } else {
        pwCheck.classList.remove('border-red-600')
        pwCheck.innerText = ''
    }
    return checkPW2
}

pwCheck.addEventListener('focusout', (event) =>
    confirmCheckPW(event.target.value)
)

//모달 창 구현
const submit = document.getElementById('submit')
const modal = document.getElementById('modal')
const confirmid = document.getElementById('confirm-id')
const confirmpw = document.getElementById('confirm-pw')
const cancelBtn = document.getElementById('cancel-btn') //취소하기
const approveBtn = document.getElementById('approve-btn') //가입하기

submit.addEventListener('click', (event) => {
    event.preventDefault()
    const isConfirmForm =
        confirmID(id.value) === true &&
        confirmPW(pw.value) === true &&
        confirmCheckPW(pwCheck.value) === true
    if (isConfirmForm) {
        confirmid.innerText = id.value
        confirmpw.innerText = pw.value
        modal.showModal()
    }
})

cancelBtn.addEventListener('click', () => {
    modal.close()
})

approveBtn.addEventListener('click', () => {
    window.alert('가입되었습니다.')
    modal.close()
})

// 폰트사이즈 조절
const increaseFontBtn = document.getElementById('increase-font-btn')
const decreaseFontBtn = document.getElementById('decrease-font-btn')

const html = document.documentElement

const MAX_FONT_SIZE = 20
const MIN_FONT_SIZE = 12

const getHtmlFontSize = () => {
    return parseFloat(window.getComputedStyle(html).fontSize)
}
increaseFontBtn.addEventListener('click', () => {
    onClickFontSizeControl('increase')
    // const nextFontSize = getHtmlFontSize() + 1
    // html.style.fontSize = nextFontSize
    // //만약 20이상이면 +버튼 비활성화
    // if (nextFontSize >= MAX_FONT_SIZE) {
    //     increaseFontBtn.disabled = true
    // }
    // if (nextFontSize > MIN_FONT_SIZE) {
    //     decreaseFontBtn.disabled = false
    // }
})

decreaseFontBtn.addEventListener('click', () => {
    onClickFontSizeControl('decrease')
    // const prevFontSize = getHtmlFontSize() - 1
    // html.style.fontSize = prevFontSize
    // //만약 12이하이면 -버튼 비활성화
    // if (prevFontSize <= MIN_FONT_SIZE) {
    //     decreaseFontBtn.disabled = true
    // }
    // if (prevFontSize < MAX_FONT_SIZE) {
    //     increaseFontBtn.disabled = false
    // }
})

const onClickFontSizeControl = (flag) => {
    const fontSize = getHtmlFontSize()
    let newFontSize = flag === 'increase' ? fontSize + 1 : fontSize - 1
    html.style.fontSize = newFontSize
    decreaseFontBtn.disabled = newFontSize <= MIN_FONT_SIZE
    increaseFontBtn.disabled = newFontSize >= MAX_FONT_SIZE
}
