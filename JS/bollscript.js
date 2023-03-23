// function that returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

document.getElementById("ball").onmouseover = function () {
  setTimeout(() => {
    this.style.top = getRandomNumber(0, 100) + "%";
    this.style.left = getRandomNumber(0, 97) + "%";
  }, 100);
};

document.getElementById("ball").onclick = (evt) => {
  window.alert("Snyggt fångat!!!");
};
