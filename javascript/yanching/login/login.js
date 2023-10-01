document.addEventListener('DOMContentLoaded', function () {

    // Check if the form was submitted
    if (sessionStorage.getItem('formSubmitted')) {
        // Apply styles for the submitted state
        const memberLoginContainer = document.querySelector('.memberLoginContainer');
        if (memberLoginContainer) {
            memberLoginContainer.classList.add('submitted');
        }
    }

    // In your form submission code, set a flag in session storage
    document.getElementById("memberLoginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the entered username and password
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verify the hardcoded username and password
        if (username === "kahlok666" && password === "77777777") {
            // Set a flag in sessionStorage to indicate successful login
            sessionStorage.setItem('isLoggedIn', 'true');

            // Redirect to the member page with the username as a query parameter
            window.location.href = `member.html?username=${encodeURIComponent(username)}`;
        } else {
            // Display an error message for an incorrect login
            alert("Incorrect username or password. Please try again.");
        }
    });

    // Check if the user is already logged in
    if (sessionStorage.getItem('isLoggedIn')) {
        // Redirect to the member page if already logged in
        const username = sessionStorage.getItem('isLoggedIn');
        window.location.href = `member.html?username=${encodeURIComponent(username)}`;
    }
});