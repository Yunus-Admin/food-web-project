"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    calculator = require("./modules/calculator"),
    slides = require("./modules/slider"),
    cards = require("./modules/cards"),
    forms = require("./modules/forms"),
    timer = require("./modules/timer");

  tabs();
  modal();
  calculator();
  slides();
  cards();
  forms();
  timer();
});
