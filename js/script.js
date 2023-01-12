"use strict";
import tabs from "./modules/tabs";
import modal, { openModal } from "./modules/modal";
import calculator from "./modules/calculator";
import slides from "./modules/slider";
import cards from "./modules/cards";
import forms from "./modules/forms";
import timer from "./modules/timer";

document.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    30000
  );
  tabs(
    ".tab-header__item",
    ".tab-content",
    ".tab-header__items",
    "tab-header__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  calculator(".calculating__result span");
  slides({
    slide: ".offer__slide",
    container: ".offer__slider",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    currentCounterId: "#current",
    totalCounterId: "#total",
    wrapper: ".offer__slider-wrapper",
    fields: ".slider__offer-inner",
  });
  cards();
  forms("form", modalTimerId);
  timer(".timer", "2023-01-31");
});
