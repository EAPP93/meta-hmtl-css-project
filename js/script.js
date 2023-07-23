const btn = document.querySelector("#hamburger-btn");
const menu = document.querySelector("#menu");
const lines = document.querySelectorAll(".nav__btn-line");
const body = document.querySelector("#body");

btn.addEventListener("click", (e) => {
  body.classList.toggle("active");
  menu.classList.toggle("active");
  btn.classList.toggle("active");
  lines.forEach( line => {
    line.classList.toggle("active");
  })
})