document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission page reload
    event.preventDefault();

    // Get form field values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Track validation status
    let isValid = true;

    // 1. Name Validation
    if (username === '') {
        showError('username', 'nameError', 'Name is required.');
        isValid = false;
    } else {
        clearError('username', 'nameError');
    }

    // 2. Email Validation (Simple Regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'emailError', 'Email is required.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'emailError', 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError('email', 'emailError');
    }

    // 3. Message Validation
    if (message === '') {
        showError('message', 'messageError', 'Message cannot be empty.');
        isValid = false;
    } else {
        clearError('message', 'messageError');
    }

    // If all inputs are valid, process the form
    if (isValid) {
        alert('🎉 Form submitted successfully!');
        
        // You can send this data to an API using fetch() here
        console.log('Submitted Data:', { username, email, message });

        // Reset the form fields
        document.getElementById('contactForm').reset();
    }
});

// Helper function to show errors
function showError(inputId, errorId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    
    inputElement.parentElement.classList.add('error');
    errorElement.innerText = message;
}

// Helper function to clear errors
function clearError(inputId, errorId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);
    
    inputElement.parentElement.classList.remove('error');
    errorElement.innerText = '';
}