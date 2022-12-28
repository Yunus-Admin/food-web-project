document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-header__item"),
    tabsContent = document.querySelectorAll(".tab-content"),
    tabParent = document.querySelector(".tab-header__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });

    tabs.forEach((item) => {
      item.classList.remove("tab-header__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tab-header__item_active");
  }

  hideTabContent();
  showTabContent();
});
