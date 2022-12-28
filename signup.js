let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let emailerror=document.getElementById("emailerror");
let pwderr=document.getElementById("pwderr");
let phoneNumber=document.getElementById("phnumber");
let phoneError=document.getElementById("phnerror");
const emailregexp=/^\w+([\-.]\w+)*@\w+([\-.]\w+)*(\.[a-z]{2,3})+(.[a-z]{2,3})?$/
const pwdregexp_strong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{8,}$/;
const pwdregexp_medium=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{6,}$/;
const phoneregex=/^\(?\d{3}\)?[-. ]?(\d{3})[-. ]?(\d{4})$/

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
    function phoneValidate(){
        if(phoneNumber.value.match(phoneregex)){
            return true;
        }else{
            return false;
        }
    }
    if(emailvalidate()==false && pwdchecker()==false && phoneValidate()==false){
        emailerror.innerHTML="Invalid email";
        emailerror.style.color="black";
        emailerror.style.backgroundColor="red"
        email.style.border="2px solid red"
        phoneError.innerHTML="Invalid Phonenumber";
        phoneError.style.color="black";
        phoneError.style.backgroundColor="red"
        phoneNumber.style.border="2px solid red"
        return false
    }else if(emailvalidate()==true && pwdchecker()==false &&phoneValidate()==false){
        emailerror.innerHTML="Valid email";
        emailerror.style.color="green";
        emailerror.style.backgroundColor="transparent"
        email.style.border="2px solid green"
        phoneError.innerHTML="Invalid Phonenumber";
        phoneError.style.color="black";
        phoneError.style.backgroundColor="red"
        phoneNumber.style.border="2px solid red"
        return false;
    }else if(emailvalidate()==false && pwdchecker()==true && phoneValidate()==true){
        emailerror.innerHTML="Invalid email";
        emailerror.style.color="red";
        email.style.border="2px solid red"
        phoneError.innerHTML="Valid Phonenumber";
        phoneError.style.color="green"
        phoneError.style.backgroundColor="transparent"
        phoneNumber.style.border="2px solid green"
        return false
    }
    else if(emailvalidate()==true && pwdchecker()==false &&phoneValidate()==true){
        emailerror.innerHTML="Valid email";
        emailerror.style.color="green";
        emailerror.style.backgroundColor="transparent"
        email.style.border="2px solid green"
        phoneError.innerHTML="Valid Phonenumber";
        phoneError.style.color="green"
        phoneError.style.backgroundColor="transparent"
        phoneNumber.style.border="2px solid green"
        return false;
    }else if(emailvalidate()==true && pwdchecker()==true &&phoneValidate()==false){
        emailerror.innerHTML="Valid email";
        emailerror.style.color="green";
        emailerror.style.backgroundColor="transparent"
        email.style.border="2px solid green";
        phoneError.innerHTML="Invalid Phonenumber";
        phoneError.style.color="black";
        phoneError.style.backgroundColor="red"
        phoneNumber.style.border="2px solid red"
        return false;
    }
    else if(emailvalidate()==true && pwdchecker()==false &&phoneValidate()==true){
        emailerror.innerHTML="Valid email";
        emailerror.style.color="green";
        emailerror.style.backgroundColor="transparent"
        email.style.border="2px solid green";
        phoneError.innerHTML="Valid Phonenumber";
        phoneError.style.color="green"
        phoneError.style.backgroundColor="transparent"
        phoneNumber.style.border="2px solid green"
        return false;
    }
    else{
        return true;
    }

}
