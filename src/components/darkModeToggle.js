export function setupDarkModeToggle() {
  const body = document.body;
  const toggle = document.getElementById("toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    toggle?.classList.add("dark");
  }

  toggle?.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("dark");

    if (isDarkMode) {
      body.classList.remove("dark");
      toggle.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      toggle.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
}
