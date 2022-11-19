let email=document.getElementById("eemail");
let err=document.getElementById("err");
let pwd=document.getElementById("pwd");
let emailregexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let pwdregexp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
function validate(){
    if ((emailregexp.test(email.value))&&(pwdregexp.test(pwd.value))){
    err.innerHTML="Valid";
    pwd.style.border="2px solid green";
    return true;
    
}
    else if(pwd.value.length<=5){
        err.innerHTML="Invalid"
        err.style.color="Red";
        pwd.style.border="2px solid red"
        return false;
    }
    else if(pwd.value.length>5&&pwd.value.length<=7){
        err.innerHTML="Invalid"
        err.style.color="Red";
        pwd.style.border="2px solid orange"
        return false;
    }
   
}

