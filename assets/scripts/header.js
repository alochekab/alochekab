"use strict";

const navLi1 = document.getElementById("navbar_ul_li1");
const navLi2 = document.getElementById("navbar_ul_li2");
const navLi3 = document.getElementById("navbar_ul_li3");

const resetBorder = function (idName) {
  idName.style.borderBottomWidth = "";
  idName.style.borderBottomColor = "";
  idName.style.borderBottomStyle = "";
};

const addBottomBorder = function (liName) {
  navLi1.classList.remove("temp-select");
  liName.style.borderBottomWidth = "2px";
  liName.style.borderBottomColor = "#006a6d";
  liName.style.borderBottomStyle = "solid";
};

navLi1.addEventListener("click", function () {
  resetBorder(navLi2);
  resetBorder(navLi3);
  addBottomBorder(navLi1);
});

navLi2.addEventListener("click", function () {
  resetBorder(navLi1);
  resetBorder(navLi3);
  addBottomBorder(navLi2);
});

navLi3.addEventListener("click", function () {
  resetBorder(navLi1);
  resetBorder(navLi2);
  addBottomBorder(navLi3);
});
