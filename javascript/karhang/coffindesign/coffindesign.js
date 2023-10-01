const coffinColor = document.getElementById('coffinColor');
const customColorPanel = document.getElementById('customColorPanel');

coffinColor.addEventListener('change', function () {
    if (this.value === 'custom') {
        customColorPanel.style.display = 'block';
    } else {
        customColorPanel.style.display = 'none';
    }
});


const coffinMaterial = document.getElementById('coffinMaterial');
const otherMaterialBox = document.getElementById('otherMaterialBox');
const otherMaterialInput = document.getElementById('otherMaterial');

coffinMaterial.addEventListener('change', function () {
    if (this.value === 'other') {
        otherMaterialBox.style.display = 'block';
        otherMaterialInput.setAttribute('required', 'true'); // Make it required
    } else {
        otherMaterialBox.style.display = 'none';
        otherMaterialInput.removeAttribute('required'); // Remove the required attribute
    }
});

function toggleImageRequired() {
    var imageInput = document.getElementById("image");
    var checkbox = document.getElementById("coffinPicture");
    const pictureInput = document.getElementById("pictureInput");

    if (checkbox.checked) {
        pictureInput.style.display = "block";
        imageInput.setAttribute("required", "required");
    } else {
        pictureInput.style.display = "none";
        imageInput.removeAttribute("required");
    }
}

function submitForm() {
    // Disable all form elements
    var form = document.getElementById("myForm");
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }

    // Display the "Design Submitted" message
    var outputContainer = document.getElementById("outputContainer");
    outputContainer.style.display = "block";

    // Handle clicking the close button
    var closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating
        window.location.href = "/html/simon/homepage.html"; // Redirect to home.html
        document.getElementById("myForm").reset();
    });
}