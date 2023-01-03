document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-header__item"),
    tabsContent = document.querySelectorAll(".tab-content"),
    tabParent = document.querySelector(".tab-header__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach((item) => {
      item.classList.remove("tab-header__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tab-header__item_active");
  }

  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tab-header__item")) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
