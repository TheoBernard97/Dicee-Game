document.querySelector("button").addEventListener("click", function() {
  // Set a value for each dice
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Change the image of each dice
  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Select the winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
  } else {
    document.querySelector("h1").innerHTML = "Draw !";
  }
});
