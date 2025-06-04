document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").pop(); // Get current page name
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === path || (path === "" && linkPath === "index.html")) {
      link.classList.add("active");
    }
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('visible');
  document.body.classList.add('fade-in-blur');
});