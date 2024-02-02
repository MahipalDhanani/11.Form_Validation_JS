let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let unmsg = document.getElementById("uname");
let pass = document.getElementById("pass");

form.addEventListener("submit", function (e) {
  if (username.value.length == 0) {
    e.preventDefault();
    unmsg.innerHTML = "Pls Enter Your UserName......!!";
  } else if (username.value.length < 8) {
    e.preventDefault();
    unmsg.innerHTML = "Pls Enter Atleast 8 charactor......!!";
  }


  if (password.value.length == 0) {
    e.preventDefault();
    pass.innerHTML = "Pls Enter Your Password......!!";
  } else if (password.value.length < 8) {
    e.preventDefault();
    pass.innerHTML = "Pls Enter Atleast 8 charactor......!!";
  }
});

