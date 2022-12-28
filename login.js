let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let emailerror=document.getElementById("emailerror");
let pwderr=document.getElementById("pwderr");
const emailregexp=/^\w+([\-.]\w+)*@\w+([\-.]\w+)*(\.[a-z]{2,3})+(.[a-z]{2,3})?$/
const pwdregexp_strong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{8,}$/;
const pwdregexp_medium=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{6,}$/;
pwd.addEventListener("input",pwdchecker)
function pwdchecker(){
    if(pwd.value.match(pwdregexp_strong)){
        pwderr.innerHTML="Strong password"
        pwderr.style.border="2px solid green"
        pwderr.style.backgroundColor="green";
        pwd.style.border="2px solid green"
        return true;
    }else if(pwd.value.match(pwdregexp_medium)){
        pwderr.innerHTML="Medium password"
        pwderr.style.border="2px solid orange"
        pwderr.style.backgroundColor="orange";
        pwd.style.border="2px solid orange";
        return false;
    }else{
        pwderr.innerHTML="Poor password"
        pwderr.style.border="2px solid red"
        pwderr.style.backgroundColor="red";
        pwd.style.border="2px solid red";
        return false;
    }
}

function validate(){
    function emailvalidate(){
        if (email.value.match(emailregexp)){
            return true;
        }else{
            return false;
        }
    }
    if(emailvalidate()==false && pwdchecker()==false){
        emailerror.innerHTML="Invalid email";
        emailerror.style.color="black";
        emailerror.style.backgroundColor="red"
        email.style.border="2px solid red"
        return false
    }else if(emailvalidate()==true && pwdchecker()==false){
        emailerror.innerHTML="Valid email";
        emailerror.style.color="green";
        emailerror.style.backgroundColor="transparent"
        email.style.border="2px solid green"
        return false;
    }else if(emailvalidate()==false && pwdchecker()==true){
        emailerror.innerHTML="Invalid email";
        emailerror.style.color="red";
        email.style.border="2px solid red"
        return false
    }else{
        return true;
    }

}