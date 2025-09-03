const form = document.getElementById('myForm');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipInput = document.getElementById('zipcode');
const passwordInput = document.getElementById('password');
const againpassInput = document.getElementById('confirmPassword');

function validateemail(email){
    if (email === ''){
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}
emailInput.addEventListener('blur', function (){
    const emailvalue = emailInput.value;
    if (!validateemail(emailvalue)){
        showError('email', "Email neni dostupný");
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    const emailValue = emailInput.value;
    if (!validateemail(emailValue)){
        showError('email', "email neni dostupny")
    }else{
        alert('formular odeslan')
    }
})

function showError(fieldId, message){
    const input = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    const error = document.getElementById('error-message')
    input.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}