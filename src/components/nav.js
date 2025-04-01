document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;

  document.querySelectorAll("nav a").forEach((link) => {
    if (
      currentPath === new URL(link.href, location.origin).pathname &&
      !link.closest("#language-dropdown-menu")
    ) {
      link.classList.add("active-page");
    }
  });
});
