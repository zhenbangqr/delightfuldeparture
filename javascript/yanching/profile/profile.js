document.addEventListener('DOMContentLoaded', function () {
    // Define the fixed username
const fixedUsername = "Kah Lok"; // Replace with the desired fixed username

// Clear the previous username data from localStorage
localStorage.removeItem("username");

// Display the fixed username in the form
const usernameInput = document.getElementById("username"); // Assuming you have an input field with the ID "username"

if (usernameInput) {
    usernameInput.value = fixedUsername; // Set the input field's value to the fixed username
    usernameInput.setAttribute("readonly", "readonly"); // Set it as readonly
} else {
    console.log("Username input field not found in the form.");
}

    // Retrieve and populate profile data
    const emailInput = document.getElementById("email");
    const addressInput = document.getElementById("address");
    const phoneInput = document.getElementById("phone");
    const editProfileButton = document.getElementById("editProfileButton");
    const saveProfileButton = document.getElementById("saveProfileButton");
  
    // Check if all required fields have data
    const isProfileComplete = () => {
        return emailInput.value && addressInput.value && phoneInput.value;
    };

    // Handle profile edit
    if (editProfileButton) {
        editProfileButton.addEventListener("click", function () {
            // Allow editing of profile fields
            emailInput.removeAttribute("readonly");
            addressInput.removeAttribute("readonly");
            phoneInput.removeAttribute("readonly");

            // Show the "Save Profile" button and hide the "Edit Profile" button
            saveProfileButton.style.display = "block";
            editProfileButton.style.display = "none";
        });
    }

    // Handle profile form submission
    if (saveProfileButton) {
        saveProfileButton.addEventListener("click", function () {
            if (isProfileComplete()) {
                // Save the updated profile data
                
                // Update user profile data in local storage (Assuming you have a userProfile object)
                const userProfile = {
                    username: newUsername, // Include the username
                    email: emailInput.value,
                    address: addressInput.value,
                    phone: phoneInput.value,
                };
                localStorage.setItem('userProfile', JSON.stringify(userProfile));

                // Disable editing of profile fields
                emailInput.setAttribute("readonly", "readonly");
                addressInput.setAttribute("readonly", "readonly");
                phoneInput.setAttribute("readonly", "readonly");

                // Hide the "Save Profile" button and show the "Edit Profile" button
                saveProfileButton.style.display = "none";
                editProfileButton.style.display = "block";

                // Show a success message
                alert("Profile saved succesfully.");
            } else {
                alert("Please fill in all required fields before saving.");
            }
        });
    }
});
