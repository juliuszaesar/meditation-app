// VARIABLE DECLARATION
const circleProgress = document.querySelector(".circle__progress");
const numberOfBreaths = document.querySelector(".breath__input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths__text");
let breathsLeft = 3;

// NUMBER OF USER SELECTED BREATHS
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerHTML = breathsLeft;
});

// CIRCLE SIZE GROWTH
const growCircle = () => {
  circleProgress.classList.add("circle__grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle__grow");
  }, 8000); // 8000 = 8 sec
};

// BREATHING INSTRUCTIONS
const breathTextUpdate = () => {
  breathsLeft--; // -- is equal to -1
  breathsText.innerText = breathsLeft;
  instructions.innerText = "Andas in";
  instructions.style.color = "white";
  setTimeout(() => {
    instructions.innerText = "Håll andan";
    instructions.style.color = "orange";
    setTimeout(() => {
      instructions.innerText = "Andas ut";
      instructions.style.color = "LightGreen";
    }, 4000);
  }, 4000);
};

// BREATHING APP FUNCTIONS
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.style.color = "white";
      instructions.innerText = "Bra jobbat, klicka 'Starta' för ny omgång";
      start.classList.remove("button__inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// START BREATHING APP
start.addEventListener("click", () => {
  start.classList.add("button__inactive");
  instructions.innerText = "Slappna av, snart börjar vi!";
  setTimeout(() => {
    instructions.innerText = "Gör dig redo att börja!";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});

// SCROLL REVEAL
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});
sr.reveal(`.title`, { origin: "top", delay: 600 });
sr.reveal(`.glass__container`, { origin: "bottom", delay: 700 });
sr.reveal(`.list__item`, { origin: "bottom", interval: 200 });
