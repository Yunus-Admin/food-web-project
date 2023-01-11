"use strict";
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import slides from "./modules/slider";
import cards from "./modules/cards";
import forms from "./modules/forms";
import timer from "./modules/timer";
document.addEventListener("DOMContentLoaded", () => {
  tabs();
  modal("[data-modal]", ".modal");
  calculator();
  slides();
  cards();
  forms();
  timer();
});
