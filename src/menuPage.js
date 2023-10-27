import teaImage7 from "./chaiTea.jpeg";
import teaImage1 from "./darjeelingTea.jpeg";
import teaImage5 from "./earlGreyTea.jpeg";
import teaImage10 from "./hibiscusHerbalTea.jpeg";
import teaImage6 from "./jasminePearlTea.jpeg";
import teaImage2 from "./matchaGreenTea.jpeg";
import teaImage3 from "./oolongTea.jpeg";
import teaImage8 from "./pu-erhTea.jpeg";
import teaImage4 from "./rooibosTea.jpeg";
import teacup from "./teacup.png";
import teaImage9 from "./whitePeonyTea.jpeg";

const teaOptions = [
  {
    src: teaImage1,
    title: "Darjeeling Tea",
    price: "$7.99",
    origin: "Darjeeling, India",
    description:
      "Known as the 'Champagne of Teas', with a delicate and fruity flavor.",
    ingredients: "100% Darjeeling Tea Leaves",
    caffeine_level: 2,
  },
  {
    src: teaImage2,
    title: "Matcha Green Tea",
    price: "$9.99",
    origin: "Japan",
    description:
      "A vibrant green tea powder with a rich, umami flavor and high antioxidants.",
    ingredients: "100% Matcha Green Tea Powder",
    caffeine_level: 4,
  },
  {
    src: teaImage3,
    title: "Oolong Tea",
    price: "$6.49",
    origin: "Taiwan",
    description:
      "A semi-fermented tea with a smooth, floral taste and unique aroma.",
    ingredients: "100% Oolong Tea Leaves",
    caffeine_level: 3,
  },
  {
    src: teaImage4,
    title: "Rooibos Tea",
    price: "$5.99",
    origin: "South Africa",
    description: "A caffeine-free herbal tea with a sweet and nutty flavor.",
    ingredients: "100% Rooibos Tea Leaves",
    caffeine_level: 0,
  },
  {
    src: teaImage5,
    title: "Earl Grey Tea",
    price: "$6.99",
    origin: "United Kingdom",
    description:
      "A classic black tea infused with bergamot oil for a citrusy aroma.",
    ingredients: "Black Tea Leaves, Bergamot Oil",
    caffeine_level: 3,
  },
  {
    src: teaImage6,
    title: "Jasmine Pearl Tea",
    price: "$8.99",
    origin: "China",
    description:
      "Green tea leaves rolled into pearls, scented with jasmine flowers.",
    ingredients: "Green Tea Leaves, Jasmine Flowers",
    caffeine_level: 2,
  },
  {
    src: teaImage7,
    title: "Chai Tea",
    price: "$6.49",
    origin: "India",
    description:
      "A spiced black tea with notes of cinnamon, cardamom, and cloves.",
    ingredients: "Black Tea Leaves, Spices",
    caffeine_level: 3,
  },
  {
    src: teaImage8,
    title: "Pu-erh Tea",
    price: "$10.99",
    origin: "Yunnan, China",
    description:
      "A fermented tea with a deep, earthy flavor and complex aroma.",
    ingredients: "100% Pu-erh Tea Leaves",
    caffeine_level: 4,
  },
  {
    src: teaImage9,
    title: "White Peony Tea",
    price: "$7.49",
    origin: "Fujian, China",
    description: "A delicate white tea with a sweet and floral character.",
    ingredients: "100% White Peony Tea Leaves",
    caffeine_level: 1,
  },
  {
    src: teaImage10,
    title: "Hibiscus Herbal Tea",
    price: "$5.99",
    origin: "Egypt",
    description: "A vibrant red herbal tea with a tart and fruity taste.",
    ingredients: "Dried Hibiscus Flowers",
    caffeine_level: 0,
  },
];

export default function loadMenuPage(contentDiv) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuItems = [];

  for (let i = 0; i < teaOptions.length; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-item-img");
    menuImg.src = teaOptions[i].src;
    menuImg.alt = teaOptions[i].title;

    const menuTitle = document.createElement("p");
    menuTitle.innerText = teaOptions[i].title;
    menuTitle.classList.add("menu-item-title");

    //price, caffeine level, Origin, Description, Ingredients
    const menuPrice = document.createElement("p");
    menuPrice.innerText = teaOptions[i].price;
    menuPrice.classList.add("menu-item-price");
    //need to solve this psuedo class selector not working in JS anomaly!
    const caffeineLevelContainer = document.createElement("div");
    caffeineLevelContainer.classList.add("menu-item-caffeine");
    for (let j = 0; j < teaOptions[i].caffeine_level; j++) {
      const teaCup = document.createElement("img");
      teaCup.src = teacup;
      teaCup.classList.add("menu-item-caffeine-cup");
      caffeineLevelContainer.appendChild(teaCup);
    }

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-item-info");

    const menuOrigin = document.createElement("p");
    menuOrigin.innerText = teaOptions[i].origin;
    const menuDescription = document.createElement("p");
    menuDescription.innerText = teaOptions[i].description;
    const menuIngredients = document.createElement("button");
    menuIngredients.innerText = `Ingredients`;
    menuIngredients.classList.add("menu-item-ingredients");

    menuInfo.appendChild(menuOrigin);
    menuInfo.appendChild(menuDescription);
    menuInfo.appendChild(menuIngredients);

    menuItems[i] = document.createElement("div");
    menuItems[i].classList.add("menu-item");

    menuItems[i].appendChild(menuImg);
    menuItems[i].appendChild(menuTitle);
    menuItems[i].appendChild(menuPrice);
    menuItems[i].appendChild(caffeineLevelContainer);
    menuItems[i].appendChild(menuInfo);
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuContainer.append(menuItems[i]);
  }
  contentDiv.appendChild(menuContainer);
  createModal();
}

function createModal() {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  body.appendChild(modal);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modal.appendChild(modalContent);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  modalContent.appendChild(closeBtn);

  const modalTitle = document.createElement("h2");
  modalTitle.innerText = "Modal Title";
  modalContent.appendChild(modalTitle);

  const modalText = document.createElement("p");
  modalText.innerText = "This is a simple modal example.";
  modalContent.appendChild(modalText);

  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  const btns = document.querySelectorAll(".menu-item-ingredients");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      openModal();
      closeBtn.addEventListener("click", closeModal);

      modalTitle.innerText = teaOptions[index].title;
      modalText.innerText = teaOptions[index].ingredients;

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    });
  });
}
