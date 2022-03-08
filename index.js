let emailEle = document.getElementById("email")
let passwordEle = document.getElementById("password")
let loginEle = document.getAnimations("login")
let emailError = document.getElementById("email-error")
let passwordError = document.getElementById("pwd-error")

let userData = [
    {
        email: "sample1@gmail.com",
        password: "Pwd111!!!"
    },
    {
        email: "sample2@gmail.com",
        password: "Pwd111!!!"
    },
    {
        email: "sample3@gmail.com",
        password: "Pwd111!!!"
    }
]

function validation1() {
    let index = emailEle.value.indexOf("@")
    if (emailEle.value == "") {
        emailError.textContent = "*this field is required"
        emailEle.style.border = "2px solid red"
        return false
    }else if(index==-1) {
        emailError.textContent = "*please enter valid email"
        emailEle.style.border = "2px solid red"
        return false
    }else {
        emailError.textContent = ""
        emailEle.style.border = "1px solid #222"
        return true

    }
}

function validation2() {
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,24}$/
    if (passwordEle.value === "") {
        passwordError.textContent = "*this field is required"
        passwordEle.style.border = "2px solid red"
        return false
    }else if (regexp.test(passwordEle.value) === false) {
        passwordError.textContent = "*please enter valid password. "
        passwordEle.style.border = "2px solid red"
        return false
    }else {
        passwordError.textContent = ""
        passwordEle.style.border = "1px solid #222"
        return true
    }
}

function dataCheck() {
    let emailValue =emailEle.value;
    let pwdValue = passwordEle.value;
    let c1 = false
    let c2 = false
    for (let i of userData) {
        if(i.email === emailValue) {
            c1 = true
        }
        if(i.password === pwdValue) {
            c2 = true
        }
    }
    if(!(c1 && c2)) {
        emailError.textContent = "email and password are not matched"
        passwordError.textContent = "email and password are not matched"
        return false
    }else {
        return true
    }
}

function validation() {
    let v1 = validation1()
    let v2 = validation2()
    if (v1 && v2) {
         v3 = dataCheck()
    }
    
    console.log(v1 && v2);
    return v1 && v2 && v3
}