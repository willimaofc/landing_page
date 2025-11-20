// ======================
// Ano automático no Footer
// ======================
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Carregar tema salvo
  loadTheme();
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
// Toggle Dark Mode
// ======================
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const icon = document.querySelector("#theme-toggle i");
  const iconMobile = document.querySelector("#theme-toggle-mobile i");

  // Toggle dark mode class
  body.classList.toggle("dark-mode");

  // Update icons
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    if (iconMobile) {
      iconMobile.classList.remove("fa-moon");
      iconMobile.classList.add("fa-sun");
    }
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    if (iconMobile) {
      iconMobile.classList.remove("fa-sun");
      iconMobile.classList.add("fa-moon");
    }
  }

  // Save theme preference
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const icon = document.querySelector("#theme-toggle i");
  const iconMobile = document.querySelector("#theme-toggle-mobile i");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
    if (iconMobile) {
      iconMobile.classList.remove("fa-moon");
      iconMobile.classList.add("fa-sun");
    }
  } else {
    body.classList.remove("dark-mode");
    if (icon) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
    if (iconMobile) {
      iconMobile.classList.remove("fa-sun");
      iconMobile.classList.add("fa-moon");
    }
  }

  // Add event listeners
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener("click", toggleTheme);
  }
}
