/*==================== SHOW MENU =============================*/
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


/*======== Menu Show ======*/
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

/*========== Menu Hidden ===========*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*==================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.querySelector(".nav__menu");
    // When we click on each nav__link, it removes the next
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*================== CHANGE HEADER BACKGROUND COLOR ON SCROLL =====================*/
function scrollHeader() {
    const header = document.getElementById("header");
    // When scroll is greater than 100, add scroll-header class
    if(this.scrollY >= 800) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader)
