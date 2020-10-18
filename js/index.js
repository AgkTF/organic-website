const mobileMenu = document.querySelector(".mobile__menu");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile__menu--hidden");
});
