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
    // Function to get the value of a query parameter by name
    function getQueryParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Retrieve the username from the query parameter
    const newUsername = getQueryParameterByName("username");

    // Clear the previous username data from localStorage
    localStorage.removeItem("username");

    // Display the new username on the member page
    if (newUsername) {
        const usernameDisplay = document.getElementById("usernameDisplay");
        const usernamePlaceholder = document.getElementById("usernamePlaceholder");

        if (usernameDisplay && usernamePlaceholder) {
            usernameDisplay.textContent = "Hello, " + newUsername + "!";
            usernamePlaceholder.textContent = newUsername;

            // Store the new username in localStorage
            localStorage.setItem("username", newUsername);
        }
    } else {
        console.log("Username not found in the URL.");
    }

    // Pass the username as a query parameter to the "Profile" link
    const profileLink = document.getElementById("profile-link");
    if (profileLink) {
        // Update the href attribute of the "Profile" link
        const profileUrl = `profile.html?username=${encodeURIComponent(newUsername)}`;
        profileLink.href = profileUrl;
    }
});
