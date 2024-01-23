// Interactive Form Validation

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

  // Validate input  
  if (username.value === '' || password.value === '') {
    e.preventDefault();
    displayError('Please enter username and password');
  }

  // Submit form if valid

});

// Display error message 
function displayError(msg) {
  // Show error div
}