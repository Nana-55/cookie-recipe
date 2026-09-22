const cookieForm = document.getElementById('cookieForm');
const userNameInput = document.getElementById('userName');
const validationMessage = document.getElementById('validationMessage');
const recipeTitle = document.getElementById('recipeTitle');

function validateForm(nameValue) {
    if (nameValue.trim() === '') {
        return false;
    } else {
        return true;
    }
}

cookieForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const isValid = validateForm(userNameInput.value);
    
    if (!isValid) {
        validationMessage.textContent = 'Please enter a valid name!';
        validationMessage.style.color = 'red';
        userNameInput.classList.add('error'); 
        console.log("Form submission failed: Name is empty."); 
    } else {
        validationMessage.textContent = 'Thank you for your feedback, ' + userNameInput.value + '!';
        validationMessage.style.color = 'green';
        userNameInput.classList.remove('error'); 
        userNameInput.value = ''; 
        console.log("Form submitted successfully.");
    }
});

recipeTitle.addEventListener('click', function() {
    if (recipeTitle.textContent === 'Homemade Cookie Recipe') {
        recipeTitle.textContent = 'The Best Cookies You Will Ever Bake!';
        recipeTitle.style.color = '#e63946'; 
    } else {
        recipeTitle.textContent = 'Homemade Cookie Recipe';
        recipeTitle.style.color = '#4a6fa5'; 
    }
});