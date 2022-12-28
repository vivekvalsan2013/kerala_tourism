let pwd=document.getElementById("pwd");
let pwderr=document.getElementById("pwderr")
const phoneregex=/^\(?\d{3}\)?[-. ]?(\d{3})[-. ]?(\d{4})$/
// let pwdregex_strong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{8,}$/;
// let pwdregex_medium=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{6,}$/;
// pwd.addEventListener("input",checker)
// function checker(){
//     if(pwd.value.match(pwdregex_strong)){
//         pwderr.innerHTML="strong";
//         return true
//     }else if(pwd.value.match(pwdregex_medium)){
//         pwderr.innerHTML="medium";
//         return false;
//     }else{
//         pwderr.innerHTML="Poor";
//         return false;
//     }
    
// }

function checker(){
    if(pwd.value.match(phoneregex)){
        return true;
    }else{return false}
}