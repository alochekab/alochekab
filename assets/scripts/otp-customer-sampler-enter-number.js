"use strict";
const phoneNumberInput = document.getElementById("number-panel_phone-input");
const numberPanel = document.querySelector(".number-panel");
const numberPanelContainer = document.querySelector(
  ".number-panel_content-container"
);

phoneNumberInput.addEventListener("click", function () {
  numberPanel.classList.add("fullscreen_numpanel");
  numberPanelContainer.classList.add("fullscreen_numpanel-margin");
});
