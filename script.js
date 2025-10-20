// ======================
// Ano automático no Footer
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


// ======================
// Menu Mobile
// ======================
function hamburg() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.style.display = "flex"; // mostra o menu
  }
}

function cancel() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    dropdown.style.display = "none"; // esconde o menu
  }
}


// ======================
// Efeito Digitando (Typewriter)
// ======================
(function typewriterInit() {
  const textElement = document.querySelector(".typewriter-text");
  if (!textElement) return;

  const texts = [
    "Cybersecurity Enthusiast",
    "Pentester",
    "CTF Player",
    "Bug Hunter",
    "Developer"
  ];

  let count = 0;
  let index = 0;

  function type() {
    if (count === texts.length) {
      count = 0;
    }

    let currentText = texts[count];
    let letter = currentText.slice(0, ++index);
    textElement.textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000); // pausa entre frases
    } else {
      setTimeout(type, 100); // velocidade da digitação
    }
  }

  type();
})();
