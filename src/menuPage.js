import blackTeaImage from "./black_tea.jpeg";
import greenTeaImage from "./green_tea.jpeg";
import herbalTeaImage from "./herbal_tea.jpeg";
import teacup from "./teacup.png";

export default function loadMenuPage(contentDiv) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  //teaType, Origin, Description, Ingredients, caffeine level, Price
  const menuItems = [];
  const teaOptions = [
    {
      src: blackTeaImage,
      title: "Black Tea",
      price: "$5.99",
      origin: "Assam, India",
      description: "A rich and bold black tea with a robust flavor.",
      ingredients: "100% Black Tea Leaves",
      caffeine_level: 3,
    },
    {
      src: greenTeaImage,
      title: "Green Tea",
      price: "$4.99",
      origin: "China",
      description: "A refreshing and mild green tea with a natural aroma.",
      ingredients: "100% Green Tea Leaves",
      caffeine_level: 1,
    },
    {
      src: herbalTeaImage,
      title: "Herbal Tea",
      price: "$6.49",
      origin: "Asia",
      description: "A soothing herbal blend with floral and herbal notes.",
      ingredients: "Chamomile, lavender, rose petals",
      caffeine_level: 0,
    },
  ];

  for (let i = 0; i < 3; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-item-img");
    menuImg.src = teaOptions[i].src;
    menuImg.alt = teaOptions[i].title;

    const fileName = teaOptions[i].title;

    const menuTitle = document.createElement("p");
    menuTitle.innerText = fileName;
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
    menuIngredients.classList.add("menu-item-ingredients"); //need to add ingredients modal

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
  createModal(contentDiv, teaOptions);
}

function createModal(teaOptions) {
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

      modalText.innerText = teaOptions[index].ingredients;
      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    });
  });
}
