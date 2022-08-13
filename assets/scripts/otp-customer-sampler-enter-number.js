"use strict";
const phoneNumberInput = document.getElementById("number-panel_phone-input");
const numberPanel = document.querySelector(".number-panel");
const numberPanelContainer = document.querySelector(
  ".number-panel_content-container"
);
const exitButtonDiv = document.querySelector(".number-panel_exit-button");

const submitButton = document.querySelector(".number-panel_submit");

const changeLanguageBtn = document.querySelector(
  ".number-panel_change-language"
);

phoneNumberInput.addEventListener("click", function () {
  numberPanel.classList.add("fullscreen_numpanel");
  numberPanelContainer.classList.add("fullscreen_numpanel-margin");
  changeLanguageBtn.classList.add("display-none");
  exitButtonDiv.classList.remove("display-none");
  submitButton.classList.remove("display-none");
});

exitButtonDiv.addEventListener("click", function () {
  numberPanel.classList.remove("fullscreen_numpanel");
  numberPanelContainer.classList.remove("fullscreen_numpanel-margin");
  changeLanguageBtn.classList.remove("display-none");
  exitButtonDiv.classList.add("display-none");
  submitButton.classList.add("display-none");
});
