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

function validateCountry(country){
    if (country === ""){
        return false;
    }
    const countryRegex = /^[A-Za-zÀ-ž\s]{2,}$/;
    return countryRegex.test(country);

}

function validateZip(zip){
    const zipRegex = /^[0-9]{5}$/;
    return zipRegex.test(zip);
}

function validatepassword(password){
    return password.length >= 6;

}

function validateConfirmPassword(password, confirmpassword){
    return password === confirmpassword;

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
    const countryvalue = countryInput.value;
    const zipValue = zipInput.value;
    const passwordValue = passwordInput.value;
    const passwordconfirmValue = againpassInput.value;

    let valid = true;
    if (!validateemail(emailValue)){
        showError('email', "email neni dostupny");
        valid = false;
    }
    if (!validateCountry(countryvalue)){
        showError('country', 'napiš dobrř název státu');
        valid = false;
    }
    if (!validateZip(zipValue)){
        showError('zipcode', 'napiš dobře zip code');
        valid = false;
    }
    if (!validatepassword(passwordValue)){
        showError('password', "Heslo je špatně")
        valid = false;
    }
    if (!validateConfirmPassword(passwordValue, passwordconfirmValue)){
        showError('confirmPassword', 'heslo neni stejne zkus to znova..')
        valid = false;
    }
    if (valid){   
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
