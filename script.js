let hamburgerButton = document.querySelector(".hamburger-button");
let nav = document.querySelector("nav");
hamburgerButton.addEventListener("click", () => {
  nav.classList.toggle("nav-widać");
});
