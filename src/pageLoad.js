import { default as loadHomePage } from "./homePage";
import restaurantBg from "./restaurantBg.jpg";
import "./styles.css";
import teaPotImageSrc from "./teapot.png";

export function initializePage() {
  const body = document.querySelector("body");
  const contentDiv = document.getElementById("content");
  addStyles(body, contentDiv);

  loadTitle(contentDiv);
  initializeNavbar(contentDiv);
  navigation(contentDiv);
  loadHomePage(contentDiv);
  return { body, contentDiv };
}

function addStyles(body, contentDiv) {
  body.classList.add("body");
  contentDiv.classList.add("content");
  contentDiv.style.backgroundImage = `url(${restaurantBg})`;
}

function loadTitle(contentDiv) {
  const restaurantName = document.createElement("h1");
  restaurantName.innerText = "Bosphorous Brews";
  restaurantName.classList.add("title");
  contentDiv.appendChild(restaurantName);
}

function initializeNavbar(contentDiv) {
  const navBar = document.createElement("div");
  navBar.classList.add("navBar");

  const navButtons = [];
  for (let i = 0; i < 3; i++) {
    navButtons[i] = document.createElement("button");
    navButtons[i].classList.add("navButton");
  }
  navButtons[0].innerHTML = "Home";
  navButtons[1].innerHTML = "Menu";
  navButtons[2].innerHTML = "Contact";

  for (let i = 0; i < 3; i++) {
    navBar.appendChild(navButtons[i]);
  }

  contentDiv.appendChild(navBar);
}

function navigation(contentDiv) {
  const btns = document.querySelectorAll(".navButton");
  const navBar = document.querySelector(".navBar");
  const teaPotImage = document.createElement("img");

  teaPotImage.src = teaPotImageSrc;
  teaPotImage.alt = "Teapot";
  teaPotImage.className = "tea-pot";

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((otherBtn) => otherBtn.classList.remove("selected"));
      btn.classList.add("selected");

      //teapot positioning logic
      const btnRect = btn.getBoundingClientRect();
      const containerRect = navBar.getBoundingClientRect();
      const leftPosition = btnRect.right - containerRect.left - 30;
      const topPosition = btnRect.top - containerRect.top - 40;
      teaPotImage.style.left = leftPosition + "px";
      teaPotImage.style.top = topPosition + "px";

      navBar.appendChild(teaPotImage);
    });
  });
}
