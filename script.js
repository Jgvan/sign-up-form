const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const pwdError = document.getElementById("pwd-error");

pwd.addEventListener("input", checkMatch);
pwd2.addEventListener("input", checkMatch);

function checkMatch(){
    if(pwd2.value === "")
    return;
    else if(pwd.value === pwd2.value){
        pwd.classList.remove("error");
        pwd2.classList.remove("error");
        pwdError.textContent = "";
    }
    else {
        pwd.classList.add("error");
        pwd2.classList.add("error");
        pwdError.textContent = "* Passwords do not match"
    }
}