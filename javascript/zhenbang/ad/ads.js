document.addEventListener("DOMContentLoaded", function () {
  const adpopup = document.querySelector("#adpopup");
  const closeButton = document.querySelector("#adclose-popup");
  const image = document.querySelector("#adpopup-image");
  const link = document.querySelector("#adpopup-link");

  const imageUrls = [
    "/medias/images/zhenbang/ads/grabdcar.png",
    "/medias/images/zhenbang/ads/coffin.png",
    "/medias/images/zhenbang/ads/rate.png",
    "/medias/images/zhenbang/ads/redemption.png",
    "/medias/images/zhenbang/ads/transport.png",
    "/medias/images/zhenbang/ads/buddhist.png",
    "/medias/images/zhenbang/ads/christian.png",
  ];

  const pageLinks = [
    "/html/melvin/grabdcar.html",
    "/html/karhang/coffindesign.html",
    "/html/simon/feedback.html",
    "/html/yanching/login.html",
    "/html/zhenbang/transport.html",
    "/html/melvin/christianService.html",
    "/html/simon/buddhistService.html",
  ];

  function showRandomImage() {
    // Get a random index from the imageUrls array
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    // Set the src attribute of the image to a random image URL
    image.src = imageUrls[randomIndex];
    // Set the href attribute of the anchor tag to a random page link
    link.href = pageLinks[randomIndex];
    adpopup.style.display = "block";
  }

  function closePopup() {
    adpopup.style.display = "none";
    // Delay for 2 seconds before showing another random image
    setTimeout(showRandomImage, 30000);
  }

  // Call showPopup once when the page loads
  showRandomImage();

  // Close the popup and show another random image when the close button is clicked
  closeButton.addEventListener("click", closePopup);
});