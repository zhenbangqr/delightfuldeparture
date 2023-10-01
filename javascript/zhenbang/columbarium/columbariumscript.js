document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const popupInfo = document.getElementById("popup-info");
    const closePopup = document.getElementById("close-popup");
  
    const areas = document.querySelectorAll("area");
  
    areas.forEach((area, index) => {
      area.addEventListener("click", function () {
        // Define information for each area
        const areaInfo = [
            { title: "A1 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "A1 is the top-most left corner. This is a tranquil place for the departed. Currently we are having 20% discount for this. Price starts at RM33888." },
            { title: "B1 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "Discover the peaceful ambiance of B1, a niche designed for quiet reflection and remembrance. Price starts at RM35888" },
            { title: "C1 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "C1 provides a comforting space for eternal rest and fond memories. Price starts at RM32888" },
            { title: "A2 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "A2 offers a peaceful and dignified place for your cherished memories. Currently we are having 10% discount for this. Price starts at RM45888" },
            { title: "B2 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "B2 is a place of solace, where you can honor and cherish the memories of your loved ones. Price starts at RM48888" },
            { title: "C2 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "C2 is a serene niche within our columbarium, providing a tranquil setting for reflection. Price starts at RM43888" },
            { title: "A3 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "A3, a place of serenity, offers solace and comfort during times of remembrance. Located at eye-level. Price starts at RM169888." },
            { title: "B3 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "In B3, your loved one's memory finds a peaceful and timeless home. Located at eye-level and center. Currently we are having 30% discount for this. Price starts at RM179888." },
            { title: "C3 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "C3 is a serene resting place where cherished memories live on. Located at eye-level. Price starts at RM169888." },
            { title: "A4 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "A4 provides a serene and dignified space for reflection and remembrance. Price starts at RM145888" },
            { title: "B4 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "B4 is a place where memories are cherished and honored. Currently we are having 10% discount for this. Price starts at RM158888" },
            { title: "C4 Double Slot", imageSrc: "/medias/images/zhenbang/columbarium/opencouple.png", info: "C4 offers a peaceful and comforting space for eternal rest. Price starts at RM143888" },
            { title: "A5 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "A5 is a tranquil niche, a timeless tribute to your loved one's memory. Currently we are having 20% discount for this. Price starts at RM38888" },
            { title: "B5 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "Discover the quiet beauty of B5, a place where memories are treasured. Price starts at RM40888" },
            { title: "C5 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "C5 is a serene resting place, where love and remembrance endure. Currently we are having 20% discount for this. Price starts at RM36888" },
            { title: "A6 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "A6 is a peaceful niche, a lasting tribute to your cherished ones. Price starts at RM30888" },
            { title: "B6 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "In B6, memories find a serene and comforting home. Price starts at RM33888" },
            { title: "C6 Single Slot", imageSrc: "/medias/images/zhenbang/columbarium/opensingle.png", info: "C6 offers solace and tranquility, a timeless space for reflection. Currently we are having 10% discount for this. Price starts at RM30888" },
          ];
  
        // Display the popup with the corresponding information
        popupTitle.textContent = areaInfo[index].title;
        popupImage.src = areaInfo[index].imageSrc;
        popupInfo.textContent = areaInfo[index].info;
        popup.style.display = "block";
      });
    });
  
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  });





