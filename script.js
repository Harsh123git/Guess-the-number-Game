"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let high_score = 20;
let best_score = 0;
let guess;

const displayText = (text) => {
  document.querySelector("#comment").textContent = text;
};
const displayHiddenNumber = (text) => {
  document.querySelector(".number").textContent = text;
};
const wrongAnswer = () => {
  document.querySelector("#high-score").textContent = high_score - 1;
};

const best = (text) => {
  document.querySelector("#best-score").textContent = text;
};

document.querySelector(".reset").addEventListener("click", function () {
  displayHiddenNumber("?");
  displayText("Start Your Game! ");
  document.querySelector("#high-score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "90px";

  number = Math.trunc(Math.random() * 20);
});

document.querySelector(".check").addEventListener("click", function () {
  guess = document.querySelector(".guess").value;
  high_score = Number(document.querySelector("#high-score").textContent);

  if (high_score > 1) {
    if (guess > number) {
      displayText("TOO HIGH!");
      wrongAnswer();
    } else if (guess < number) {
      displayText("TOO LOW!");
      wrongAnswer();
    } else {
      displayText("CONGRATULATIONS!");
      displayHiddenNumber(number);
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "400px";
      if (high_score > best_score) best_score = high_score;
      best(best_score);
    }
  } else {
    displayText("You Lost!");
  }
});
