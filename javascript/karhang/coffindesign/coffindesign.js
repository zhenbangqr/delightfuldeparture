/*
const coffinPictureCheckbox = document.getElementById("coffinPicture");
const pictureInput = document.getElementById("pictureInput");

function togglePictureInput() {

    if (coffinPictureCheckbox.checked) {
        pictureInput.style.display = "block";
    } else {
        pictureInput.style.display = "none";
    }
}
*/

const coffinColor = document.getElementById('coffinColor');
const customColorPanel = document.getElementById('customColorPanel');

coffinColor.addEventListener('change', function() {
    if (this.value === 'custom') {
        customColorPanel.style.display = 'block';
    } else {
        customColorPanel.style.display = 'none';
    }
});


const coffinMaterial = document.getElementById('coffinMaterial');
const otherMaterialBox = document.getElementById('otherMaterialBox');
const otherMaterialInput = document.getElementById('otherMaterial');

coffinMaterial.addEventListener('change', function() {
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

/*
function resetForm() {
    // Get a reference to the form element
    var form = document.getElementById("myForm");

    // Reset the form
    form.reset();
}
*/

/*
function submitForm() {
    // Display the "Design Submitted" message
    var outputContainer = document.getElementById("outputContainer");
    outputContainer.style.display = "block";

    // Optionally, you can reset the form fields here
    //document.getElementById("myForm").reset();

    // You can close the message when clicking the close button (optional)
    var closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function() {
      outputContainer.style.display = "none";
      document.getElementById("myForm").reset();
    });
}
*/

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

    // Optionally, you can reset the form fields here
    //document.getElementById("myForm").reset();

    // Handle clicking the close button
    var closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the link from navigating
      window.location.href = "home.html"; // Redirect to home.html
      document.getElementById("myForm").reset();
    });
  }


/*
window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
}
*/