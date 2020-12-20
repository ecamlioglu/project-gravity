const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const returnTopButton = document.querySelector('#return-top-button');

window.addEventListener("scroll", scroll);

function scroll() {
    if (window.scrollY > 300) {
        if (!returnTopButton.classList.contains("buttonIn")) {
            returnTopButton.classList.remove("buttonOut");
            returnTopButton.classList.add("buttonIn");
            returnTopButton.style.display = "block";
        }
    } else {
        if (returnTopButton.classList.contains("buttonIn")) {
            returnTopButton.classList.remove("buttonIn");
            returnTopButton.classList.add("buttonOut");
            setTimeout(function () {
                returnTopButton.style.display = "none";
            }, 200);
        }
    }
}

returnTopButton.addEventListener("click", returnToTop);

function returnToTop() {
    window.scrollTo(0, 0);
}

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});