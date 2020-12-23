(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
