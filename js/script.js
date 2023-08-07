const menuHamburger = document.querySelector("#menu-icon")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})