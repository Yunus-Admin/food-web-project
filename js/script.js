document.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tab-header__item"),
    tabsContent = document.querySelectorAll(".tab-content"),
    tabParent = document.querySelector(".tab-header__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tab-header__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
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

  //Timer
  const deadline = "2023-01-21";

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - new Date(),
      days = Math.floor(total / (1000 * 60 * 60 * 24)),
      hours = Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((total / 1000 / 60) % 60),
      seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  console.log(getTimeRemaining(deadline));
});
