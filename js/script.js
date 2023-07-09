const btnHamburger = document.querySelector("#hamburger-btn")
const menuList = document.querySelector("#menu-list")
const nav = document.querySelector("nav")
const containerMenuIcons = document.querySelector("#container-menu-icons")
const lineBtn = document.querySelector("#hamburger-btn__line")

const video = document.querySelector("#video-container")

btnHamburger.addEventListener("click", () => {
  const menuListPosition = window.getComputedStyle(menuList).getPropertyValue('position');
  const btnHamburgerDisplay = window.getComputedStyle(btnHamburger).getPropertyValue('display');
  if (menuListPosition == "fixed" && btnHamburgerDisplay == "flex") {
    menuList.classList.toggle("active");
    containerMenuIcons.classList.toggle("active");
    btnHamburger.classList.toggle("active");
    lineBtn.classList.toggle("active")
    console.log(menuList.classList)
  }

})
