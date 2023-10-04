export default function loadHomePage(contentDiv) {
  const introContainer = document.createElement("div");
  introContainer.classList.add("intro-container");

  const restaurantIntro = [];
  for (let i = 0; i < 3; i++) {
    restaurantIntro[i] = document.createElement("p");
  }
  restaurantIntro[0].classList.add("sub-hero");
  restaurantIntro[0].innerText =
    "Bosphorus Brews: Where Cultures Unite in a Cup of Tea";
  restaurantIntro[1].innerText =
    "At Bosphorus Brews, our passion for tea knows no borders. We believe that tea is not just a beverage; it's a journey that transcends cultures and brings people together. Our teahouse is a place where tea enthusiasts from all corners of the world can come to savor the rich tapestry of flavors and traditions that tea has to offer.";
  restaurantIntro[2].innerText =
    "Our commitment to serving teas from all cultures has made us a beloved destination for tea lovers and travelers alike. With a carefully curated selection of teas sourced from various regions, we invite you to embark on a global tea-tasting adventure without ever leaving your seat.";

  for (let i = 0; i < 3; i++) {
    introContainer.append(restaurantIntro[i]);
  }
  contentDiv.appendChild(introContainer);
}
