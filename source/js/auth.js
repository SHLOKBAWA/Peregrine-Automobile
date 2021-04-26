const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(username === "" || password === ""){
            alert("Please enter password and username");
            return false
    }
    localStorage.setItem('username', JSON.stringify(username));
    location.href = "index.html"
})