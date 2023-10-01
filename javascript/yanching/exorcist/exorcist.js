// Check if the form was submitted
if (sessionStorage.getItem('formSubmitted')) {
    // Apply styles for the submitted state
    document.querySelector('.memberLoginContainer').classList.add('submitted');
  }
  
  // In your form submission code, set a flag in session storage
  sessionStorage.setItem('formSubmitted', 'true');