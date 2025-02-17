
const signupForm = document.getElementById("regform");
const loginForm = document.getElementById("logform");
const formTitle = document.getElementById("form-title");
const toggleToLogin = document.getElementById("login");
const toggleToSignup = document.getElementById("signup");

const signupBtn = document.getElementById("signup1");
const loginBtn = document.getElementById("login1");


function toggleForms() {
    signupForm.classList.toggle("hidden");
    loginForm.classList.toggle("hidden");

    formTitle.innerText = signupForm.classList.contains("hidden") ? "Log In" : "Sign Up";
}

toggleToSignup.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});

toggleToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
});




signupBtn.addEventListener("click", () => {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    if (username && password) {
        alert("Account created successfully!");
        toggleForms(); 
    } else {
        alert("Please enter a username and password.");
    }
});


loginBtn.addEventListener("click", () => {
    let username = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (username && password) {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});