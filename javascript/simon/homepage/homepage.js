var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("displaySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// Add click event handlers to the images to redirect to their respective URLs
var imageLinks = document.getElementsByClassName("displaySlides");
for (var i = 0; i < imageLinks.length; i++) {
  imageLinks[i].addEventListener("click", function() {
    var href = this.querySelector("a").getAttribute("href");
    window.location.href = href;
  });
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var links = document.getElementsByClassName("navigation-links")[0].getElementsByTagName("a");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < links.length; i++) {
        links[i].classList.remove("neon-effect"); // Remove neon effect from all links
    }

    slides[slideIndex - 1].style.display = "block";
    links[slideIndex - 1].classList.add("neon-effect"); // Add neon effect to the current link
}

// Auto play the slideshow
var slideInterval = setInterval(function () {
    plusSlides(1);
}, 3000);
