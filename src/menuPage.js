export default function loadMenu(contentDiv) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuItems = [];
  srcImages = ["./black_tea.jpeg", "./green_tea.jpeg", "./herbal_tea.jpeg"];

  for (let i = 0; i < 3; i++) {
    const menuImg = document.createElement("img");
    menuImg.classList.add("menu-img");
    menuImg.src = srcImages[i];
    menuImg.alt = srcImages[i];

    const fileName = srcImages[i].split("/").pop(); // Get the file name with extension
    const fileNameWithoutExtension = fileName.split(".").slice(0, -1).join("."); // Remove the extension

    const menuTitle = document.createElement("p");
    menuTitle.innerText = fileNameWithoutExtension;
    menuTitle.classList.add("menu-title");

    menuItems[i] = document.createElement("div");
    menuItems[i].classList.add("menu-item");

    menuItems[i].appendChild(img);
    menuItems[i].appendChild(menuTitle);
  }

  for (let i = 0; i < menuItems.length; i++) {
    menuContainer.append(menuItems[i]);
  }
  contentDiv.appendChild(menuContainer);
}
