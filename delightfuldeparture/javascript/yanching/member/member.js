document.addEventListener('DOMContentLoaded', function () {

    // Function to check if the user is logged in
    function isLoggedIn() {
        return sessionStorage.getItem('isLoggedIn') === 'true';
    }

    // Check if the user is logged in
    if (!isLoggedIn()) {
        // If the user is not logged in, redirect them to the login page
        window.location.href = 'login.html';
        alert("Please login to access member page");
        return; // Prevent the rest of the code from executing
    }
});