const menuToggler = document.querySelector(".menu-toggler");
const main = document.querySelector("main");

menuToggler.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("active-toggler");
  e.currentTarget.parentNode.parentNode.classList.toggle("nav-open");
});
