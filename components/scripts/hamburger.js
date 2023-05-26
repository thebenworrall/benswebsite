const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navmenu")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})