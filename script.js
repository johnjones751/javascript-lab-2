"use strict";

function determineSmallestNum(a, b, c) {
  if (a < b && a < c) {
    alert(a + "is th smallest");
  } else if (b < a && b < C) {
    alert(b + "is the smallest");
  } else if (c < a && c < b) {
    alert(c + "is the smallest");
  }
}

determineSmallestNum(4, 63, 17);

function negativePositiveOrZero(number) {
  if (number > 0) {
    alert("Positive");
  } else if (number === 0) {
    alert("Zero");
  } else if (number < 0) {
    alert("Negative");
  }
}
let userInput = prompt("Enter A Number");

negativePositiveOrZero(userInput);

function votingAge(age) {
  if (age < 18) {
    alert("Must be 18 to vote");
  } else if (age >= 18) {
    alert("You can vote");
  }
}

userInput = prompt("What is your age?");
votingAge(userInput);
