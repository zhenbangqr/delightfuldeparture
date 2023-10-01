document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closeButton");

    function showPopup() {
        overlay.style.display = "block";
        popup.style.display = "block";
    }

    function hidePopup() {
        overlay.style.display = "none";
        popup.style.display = "none";
    }

    // Show the popup when the page loads
    showPopup();

    // Close the popup when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener("click", hidePopup);
    }

    const rewardsLink = document.getElementById('rewardsLink');
    if (rewardsLink) {
        rewardsLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the link from navigating immediately

            // Check if the user is already logged in based on client-side storage
            const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

            if (isLoggedIn) {
                // User is already logged in, redirect to the rewards page
                window.location.href = 'rewards.html';
            } else {
                // User is not logged in, redirect to the login page or show a login modal
                window.location.href = 'login.html';
            }
        });
    }
});
