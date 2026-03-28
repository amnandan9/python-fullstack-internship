// auth.js - Handles Signup and Login

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData.entries());

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.find(u => u.email === data.email)) {
                if(typeof showAlert === 'function') showAlert("User already exists! Please login.", "error");
                else alert("User already exists!");
                return;
            }

            users.push(data);
            localStorage.setItem("users", JSON.stringify(users));

            if(typeof showAlert === 'function') {
                showAlert("Account created successfully! Redirecting...");
                setTimeout(() => window.location.href = "login.html", 2000);
            } else {
                alert("Account created successfully!");
                window.location.href = "login.html";
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            let users = JSON.parse(localStorage.getItem("users")) || [];
            
            const validUser = users.find(u => u.email === data.email && u.password === data.password);

            if (validUser) {
                localStorage.setItem("currentUser", JSON.stringify(validUser));
                
                if(typeof showAlert === 'function') {
                    showAlert(`Welcome back, ${validUser.name.split(' ')[0]}!`);
                    setTimeout(() => window.location.href = "index.html", 1500);
                } else {
                    alert(`Welcome back!`);
                    window.location.href = "index.html";
                }
            } else {
                if(typeof showAlert === 'function') showAlert("Invalid email or password.", "error");
                else alert("Invalid email or password");
            }
        });
    }
});
