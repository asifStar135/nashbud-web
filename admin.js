////////////////////////////   LOGIN PAGE   //////////////////////////

const loginBtn = document.querySelector("login-btn")
const username = document.querySelector(".username")
const password = document.querySelector(".password")

const submitForm = () =>{
    if(username.value != "nashbud_admin" || password.value != "abcd@786NASHBUD") 
        alert("wrong username or password !");
    else{
        window.location.replace("report.html");
    }
}

////////////////////////  FEEDBACK PAGE    /////////////////////////////

const exitPage = () =>{
    if(confirm("Are you sure to exit admin page ?")){
        window.location.replace("/")
    }
}