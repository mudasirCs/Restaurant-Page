import loadHomePage from "./homePage";
import loadMenu from "./menuPage";
import { initializePage } from "./pageLoad";
import teaPotImageSrc from "./teapot.png";

document.addEventListener("DOMContentLoaded", () => {
  const { body, contentDiv } = initializePage();
  const btns = document.querySelectorAll(".navButton");
  const navBar = document.querySelector(".navBar");

  navigation(navBar, btns);
  //pseudo button, have to implement, button select
  btns[0].click();
});

function navigation(navBar, btns) {
  const teaPotImage = document.createElement("img");

  teaPotImage.src = teaPotImageSrc;
  teaPotImage.alt = "Teapot";
  teaPotImage.className = "tea-pot";

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((otherBtn) => otherBtn.classList.remove("selected"));
      btn.classList.add("selected");

      teaPotImage.style.display = "block";

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
