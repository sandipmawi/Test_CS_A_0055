function validateAndRedirect() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');


    if (username === "user" && password === "password") { 
        
        window.location.href = "currencyCon.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
    }
}
