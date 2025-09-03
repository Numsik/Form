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

    let valid = true;
    if (!validateemail(emailValue)){
        showError('email', "email neni dostupny");
        valid = false;
    }
    if (!validateCountry(countryvalue)){
        showError('country', 'napiš dobrř název státu');
    }
    if (!validateZip(zipValue)){
        showError('zipcode', 'napiš dobře zip code');
    }

    const pscinput = zipInput.value;

    if (!validateCountry(pscinput)){
        showError('PSČ', "není desutpné je moc krátké")
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
