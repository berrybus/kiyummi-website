
function getThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  } else if (systemSettingDark.matches) {
    return "dark";
  } else {
    return "light";
  }
}

function updateColorTheme() {
  // update the button icon
  const newIcon =
    currentThemeSetting == "dark"
      ? `<i class="fa-regular fa-sun"></i>`
      : `<i class="fa-regular fa-moon"></i>`;
  buttons.forEach((button) => {
    button.innerHTML = newIcon;
  });

  const newCta =
    currentThemeSetting === "dark"
      ? "Change to light theme"
      : "Change to dark theme";
  // use an aria-label if you are omitting text on the button
  // and using sun/moon icons, for example
  buttons.forEach((button) => {
    button.setAttribute("aria-label", newCta);
  });

  // update theme attribute on HTML to switch theme in CSS
  if (currentThemeSetting == "dark") {
    html.setAttribute("data-theme", "dracula");
    html.className = "dark";
  } else {
    html.setAttribute("data-theme", "cupcake");
    html.className = "";
  }
}

const html = document.querySelector("html");

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = getThemeString({
  localStorageTheme,
  systemSettingDark,
});
const buttons = document.querySelectorAll("[data-theme-toggle]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentThemeSetting = currentThemeSetting === "dark" ? "light" : "dark";
    updateColorTheme();
    // update in local storage
    localStorage.setItem("theme", currentThemeSetting);
  });
});
updateColorTheme();


document.addEventListener("click", (event) => {
    if (!event.target.closest('.dropdown')) {
      document.querySelector(".dropdown").removeAttribute("open");
    }
});

document.querySelector(".dropdown-content").addEventListener('click', function(event) {
    event.stopPropagation();
});
