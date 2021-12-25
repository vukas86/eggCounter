const chickenElement = document.querySelector(".chicken");
const bodyElement = document.querySelector("body");
const reverseElement = document.querySelector(".reverse");
const walkingElement = document.querySelector(".chickenWalking");
const eggElement = document.querySelector(".egg");
const countElement = document.querySelector(".count");
const buttonElement = document.querySelector(".btn");
const overElement = document.querySelector(".overlay");
const modalElement = document.querySelector(".container");
const btnYesElement = document.querySelector(".btn--yes");
const btnNoElement = document.querySelector(".btn--no");
const modalElement2 = document.querySelector(".container2");

var running = false;
let position = 0;
var int;
var counter = 0;

var keys = {
  space: false,
  arrowRight: false,
  arrowLeft: false,
};

const closeModal = () => {
  modalElement.classList.add("hidden");
  overElement.classList.add("hidden");
};

overElement.addEventListener("click", closeModal);
buttonElement.addEventListener("click", closeModal);

const startAgain = () => {
  window.location.reload();
};

const backInTheGame = () => {
  modalElement2.classList.add("hidden");
};

btnYesElement.addEventListener("click", startAgain);
btnNoElement.addEventListener("click", backInTheGame);

let imgElement = document.createElement("img");
imgElement.src = "images/0-3018_cheerleader-clipart-removebg-preview.png";

let chrisEggElement = document.createElement("img");
chrisEggElement.src =
  "images/15-153937_easteregg-easter-egg-clipart-removebg-preview.png";

let hatchElement = document.createElement("img");
hatchElement.src =
  "images/ClipartKey_1683051-removebg-preview-removebg-preview-removebg-preview.png";

const eggFunction = function (e) {
  let codeName = e.code;
  if (codeName === "ArrowDown") {
    counter++;
    if (counter % 4 === 0) {
      let clnEgg = chrisEggElement.cloneNode(true);
      eggElement.appendChild(clnEgg);
    }
    if (counter % 10 === 0) {
      let hatchCln = hatchElement.cloneNode(true);
      eggElement.appendChild(hatchCln);
    } else {
      let cln = imgElement.cloneNode(true);
      eggElement.appendChild(cln);
    }
    console.log(counter);
    countElement.textContent = counter;
  }
};

function startRunning(e) {
  let codeName = e.code;
  if (codeName === "Space") {
    chickenElement.classList.add("chickenWalking");
  }
}

function stopRuning(e) {
  let codeName = e.code;
  if (codeName === "Space") {
    chickenElement.classList.remove("chickenWalking");
  }
}

function turnRight(e) {
  let codeName = e.code;
  if (codeName === "ArrowRight") {
    chickenElement.classList.add("reverse");
    eggElement.style.left = "";
    eggElement.style.right = "50%";
  }
}

function walkRight(e) {
  let keyName = e.keyCode;
  if (keyName == 32) {
    keys["space"] = true;
  }
  if (keyName == 39) {
    keys["arrowRight"] = true;
  }

  if (keys["space"] && keys["arrowRight"]) {
    int = setTimeout(() => {
      position -= 5;
      bodyElement.style.backgroundPosition = `${position}px bottom`;
    }, 5);
    running = true;
  }
}

function stopRight(e) {
  let keyName = e.keyCode;
  if (keyName == 32) {
    keys["space"] = false;
  }
  if (keyName == 39) {
    keys["arrowRight"] = false;
  }
  if (!keys["space"] && !keys["arrowRight"]) {
    clearInterval(int);
    running = false;
  }
}

function walkLeft(e) {
  let keyName = e.keyCode;

  if (keyName == 32) {
    keys["space"] = true;
  }
  if (keyName == 37) {
    keys["arrowLeft"] = true;
  }

  if (keys["space"] && keys["arrowLeft"]) {
    int = setTimeout(() => {
      position += 3;
      bodyElement.style.backgroundPosition = `${position}px bottom`;
    }, 3);
    running = true;
  }
}

function stopLeft(e) {
  let keyName = e.keyCode;
  if (keyName == 32) {
    keys["space"] = false;
  }
  if (keyName == 37) {
    keys["arrowLeft"] = false;
  }
  if (!keys["space"] && !keys["arrowLeft"]) {
    clearInterval(int);
    running = false;
  }
}

function turnLeft(e) {
  let codeName = e.code;
  if (
    codeName === "ArrowLeft" &&
    chickenElement.classList.contains("reverse")
  ) {
    chickenElement.classList.remove("reverse");
    eggElement.style.left = "54%";
    eggElement.style.right = "";
  }
}

function escapeGame(e) {
  let codeName = e.code;
  console.log(codeName);
  if (codeName === "Escape") {
    modalElement2.classList.remove("hidden");
  }
}

document.addEventListener("keydown", startRunning);
document.addEventListener("keyup", stopRuning);
document.addEventListener("keydown", eggFunction);
document.addEventListener("keydown", turnRight);
document.addEventListener("keydown", turnLeft);
document.addEventListener("keydown", walkRight);
document.addEventListener("keyup", stopRight);
document.addEventListener("keydown", walkLeft);
document.addEventListener("keyup", stopLeft);
document.addEventListener("keydown", escapeGame);
