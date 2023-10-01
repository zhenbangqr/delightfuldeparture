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
});