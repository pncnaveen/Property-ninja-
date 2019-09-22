var password = document.getElementById("pwd");
var confirm_password = document.getElementById("confirm_pwd");

function validatePassword(){
  if(pwd.value != confirm_pwd.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;