// Function to show the submit success message
function showSubmitSuccess() {
    var message = document.getElementById("submit-success-message");
    message.style.display = "block";
}

// Function to hide the submit success message and refresh the page
function hideSubmitSuccess() {
    var message = document.getElementById("submit-success-message");
    message.style.display = "none";

    // Refresh the page after hiding the message
    location.reload();
}

// Attach an event listener to the close button
var closeButton = document.getElementById("closeMessageButton");
if (closeButton) {
    closeButton.addEventListener("click", hideSubmitSuccess);
}

// Call the showSubmitSuccess() function when the form is submitted
var form = document.querySelector(".feedback");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from actually submitting (for demonstration purposes)
        showSubmitSuccess();
    });
}
