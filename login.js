const outAction = document.querySelectorAll(".out-box-modal");
const modalForm = document.querySelector("#modal");
const loginForm = document.querySelector(".authen-form.-login-authen-form");
const registerForm = document.querySelector(".authen-form.-register-authen-form");
const loginButton = document.getElementById("btnLogin");
const registerButton = document.querySelector(".authen-form.-login-authen-form .button--register");
const logButton = document.querySelector(".authen-form.-register-authen-form .button--login");
const returnButton = document.querySelectorAll(".authen-form__footer .out-box-modal");


        
	loginButton.addEventListener("click",(evt)=>{
		modalForm.style.display = "flex";
                loginForm.style.display ="block";
                registerForm.style.display = "none";
        })
    registerButton.addEventListener("click",(evt)=>{
        modalForm.style.display = "flex";
                loginForm.style.display ="none";
                registerForm.style.display = "block";
        })
     logButton.addEventListener("click",(evt)=>{
        modalForm.style.display = "flex";
                loginForm.style.display ="block";
                registerForm.style.display = "none";
        })
    returnButton.forEach(item =>{item.addEventListener("click",(evt)=>{
        modalForm.style.display = "none";
                loginForm.style.display ="none";
                registerForm.style.display = "none";
    })})
    

        