import loadContactPage from "./contactPage";
import loadHomePage from "./homePage";
import loadMenuPage from "./menuPage";
import { initializePage } from "./pageLoad";

document.addEventListener("DOMContentLoaded", () => {
  const { body, contentDiv } = initializePage();
  const btns = document.querySelectorAll(".navButton");
  const navBar = document.querySelector(".navBar");
  navigation(contentDiv, navBar, btns);
});

function navigation(contentDiv, navBar, btns) {
  const activationFunctions = [loadHomePage, loadMenuPage, loadContactPage];

  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      loadRefresher(contentDiv);
      activationFunctions[index](contentDiv);
    });
  });
  btns[2].click();
}

function loadRefresher(contentDiv) {
  const pageContent = contentDiv.lastChild;

  const regex = new RegExp("-container", "i");
  const hasMatchingClass = Array.from(pageContent.classList).some((className) =>
    regex.test(className)
  );

  if (pageContent && pageContent.tagName === "DIV" && hasMatchingClass) {
    contentDiv.removeChild(pageContent);
  }
}
