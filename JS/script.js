// Save references
const groupForm = document.getElementById('groupForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');



// Function for showing errors
function showError(input, errorId, message) {
  input.classList.add('error');
  document.getElementById(errorId).textContent = message;
}



groupForm.addEventListener('submit', e => {
  e.preventDefault();

  let hasError = false;



  // Clear old errors
  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('error'));



  // First name check
  if (!firstName.value.trim()) {
    showError(firstName, 'firstNameError', 'First name is required');
    hasError = true;
  }



  // Last name check
  if (!lastName.value.trim()) {
    showError(lastName, 'lastNameError', 'Last name is required');
    hasError = true;
  }



  // Email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email.value.trim())) {
    showError(email, 'emailError', 'Please enter your real email');
    hasError = true;
  }



  // Password validation
  if (password.value.trim() === '' || password.value.length < 8) {
    showError(password, 'passwordError', 'Password must be at least 8 characters long');
    hasError = true;
  }



  // Checkbox validation (must choose at least 3)
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
const errorWrapper = document.getElementById('error-wrapper');

if (checkedBoxes.length < 3) {
  errorWrapper.style.display = 'flex';
  hasError = true;
} else {
  errorWrapper.style.display = 'none';
}

});
