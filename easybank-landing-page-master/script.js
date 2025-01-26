/*=====SHOW MENU=====*/
const menuBar = document.getElementById("nav-menu"),
  toggleBar = document.getElementById("nav-toogle"),
  closeBar = document.getElementById("nav-close");

if (toggleBar) {
  toggleBar.addEventListener("click", () => {
    menuBar.classList.add("show-menu");
  });
}

if (closeBar) {
  closeBar.addEventListener("click", () => {
    menuBar.classList.remove("show-menu");
  });
}

/*=====REMOVE MENU MOBILE=====*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const menuBar = document.getElementById("nav-menu");
  menuBar.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=====ADD HEADER SHADOW=====*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
