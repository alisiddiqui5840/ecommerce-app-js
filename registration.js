document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const errorMessageBox = document.getElementById("error-message");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const docFileInput = document.getElementById("doc-file");
    const fileErrorMessage = document.getElementById("file-error-message");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the form inputs here
        const username = usernameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const password = passwordInput.value;

        

        if (username.trim() === "") {
            displayError("Username is required.");
        } else if (!validateEmail(email)) {
            displayError("Invalid email address.");
        } else if (!validatephone(phone)) {
            displayError("Invalid Mobile number.");
        } else if (password.length < 6) {
            displayError("Password must be at least 6 characters.");
        } 
         else {
            // Registration successful
            displaySuccess("Registration successful!");
            
        }
    });



    function displayError(message) {
        errorMessageBox.textContent = message;
        errorMessageBox.style.color = "red";
    }

    function displaySuccess(message) {
        errorMessageBox.textContent = message;
        errorMessageBox.style.color = "green";
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
        return emailRegex.test(email);
    }

    function validatephone(phone) {
        const phoneRegex = /^\d{11}$/;
        return phoneRegex.test(phone);
    }


});

/*let form = document.querySelector('form');
form.addEventListener('submit',handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    let jsonData = JSON.stringify(data);
    fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        headers : {
            'Content-Type ' : 'application/json'
        },
        body: jsonData
    }).then(res => res.json())
    .then(result => console.log(result))
 
}
*/
