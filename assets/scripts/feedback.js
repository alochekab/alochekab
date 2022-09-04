"use strict";

const feedbackEmojis = document.querySelector(".feedback_emojis");
const superHappyEmo = document.getElementById("emojis_superhappy");
const happyEmo = document.getElementById("emojis_happy");
const pokerFaceEmo = document.getElementById("emojis_poker-face");
const unhappyEmo = document.getElementById("emojis_unhappy");
const superUnhappyEmo = document.getElementById("emojis_superunhappy");

const checkIfSelected = function (
  currentEmoji,
  secondEmoji,
  thirdEmoji,
  fourthEmoji,
  fifthEmoji
) {
  currentEmoji.classList.add("feedback-select-test");
  feedbackEmojis.classList.add("feedback-select-blur");
  secondEmoji.classList.remove("feedback-select-test");
  thirdEmoji.classList.remove("feedback-select-test");
  fourthEmoji.classList.remove("feedback-select-test");
  fifthEmoji.classList.remove("feedback-select-test");
};

superHappyEmo.addEventListener("click", function () {
  checkIfSelected(
    superHappyEmo,
    happyEmo,
    pokerFaceEmo,
    unhappyEmo,
    superUnhappyEmo
  );
});

happyEmo.addEventListener("click", function () {
  checkIfSelected(
    happyEmo,
    superHappyEmo,
    pokerFaceEmo,
    unhappyEmo,
    superUnhappyEmo
  );
});

pokerFaceEmo.addEventListener("click", function () {
  checkIfSelected(
    pokerFaceEmo,
    superHappyEmo,
    happyEmo,
    unhappyEmo,
    superUnhappyEmo
  );
});

unhappyEmo.addEventListener("click", function () {
  checkIfSelected(
    unhappyEmo,
    superHappyEmo,
    happyEmo,
    pokerFaceEmo,
    superUnhappyEmo
  );
});

superUnhappyEmo.addEventListener("click", function () {
  checkIfSelected(
    superUnhappyEmo,
    superHappyEmo,
    happyEmo,
    pokerFaceEmo,
    unhappyEmo
  );
});
