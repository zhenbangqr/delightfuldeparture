document.addEventListener("DOMContentLoaded", function () {
  const adpopup = document.querySelector("#adpopup");
  const closeButton = document.querySelector("#adclose-popup");
  const image = document.querySelector("#adpopup-image");
  const link = document.querySelector("#adpopup-link");

  const imageUrls = [
    "/delightfuldeparture/medias/images/zhenbang/ads/grabdcar.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/coffin.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/rate.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/redemption.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/transport.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/buddhist.png",
    "/delightfuldeparture/medias/images/zhenbang/ads/christian.png",
  ];

  const pageLinks = [
    "/delightfuldeparture/html/melvin/grabdcar.html",
    "/delightfuldeparture/html/karhang/coffindesign.html",
    "/delightfuldeparture/html/simon/feedback.html",
    "/delightfuldeparture/html/yanching/login.html",
    "/delightfuldeparture/html/zhenbang/transport.html",
    "/delightfuldeparture/html/simon/buddhistService.html",
    "/delightfuldeparture/html/melvin/christianService.html",
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
