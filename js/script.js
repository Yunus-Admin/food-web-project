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
  calculator();
  slides();
  cards();
  forms("form", modalTimerId);
  timer();
});
