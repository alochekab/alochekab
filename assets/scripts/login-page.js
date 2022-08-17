"use strict";
document.querySelector("input").addEventListener("blur", function () {
  const input = document.querySelector("input").value;
  const label = document.querySelector("label");
  if (input) {
    label.classList.add("label-old");
    label.classList.remove("label");
  } else {
    label.classList.add("label");
    label.classList.remove("label-old");
  }
});

document.querySelector("input").addEventListener("blur", function () {
  const input = document.querySelector("input").value;
  const label = document.querySelector("label");
  if (input) {
    label.classList.add("label-old");
    label.classList.remove("label");
  } else {
    label.classList.add("label");
    label.classList.remove("label-old");
  }
});
