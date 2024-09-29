function changeIntroText() {
  const introTexts = [
    "Tech Enthusiast...",
    "Full Stack Developer...",
    "Data Visualisation Engineer...",
  ];
  const typingSpeed = 100;
  const eraseSpeed = 50;
  const pauseSpeed = 1500;
  const introTextsElement = document.querySelector(".intro");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = introTexts[textIndex];

    // Typing
    if (!isDeleting && charIndex < currentText.length) {
      introTextsElement.textContent += currentText[charIndex];
      charIndex++;
      setTimeout(type, typingSpeed);
    }

    //   Erasing
    else if (isDeleting && charIndex > 0) {
      introTextsElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, eraseSpeed);
    }

    //   switching the deleting or typing process
    else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % introTexts.length;
      }
      setTimeout(type, pauseSpeed);
    }
  }

  type();
}

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = body.classList.contains("dark-mode") ? "Dark" : "Light";
    darkModeToggle.querySelector("i").classList.toggle("fa-sun-o"); // Change icon
    darkModeToggle.querySelector("i").classList.toggle("fa-moon-o"); // Change icon
    darkModeToggle.querySelector("i").classList.toggle("light-mode"); // Change icon color
  });
});

// call function
changeIntroText();
