const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});

const badgeEl =document.querySelector('header .badges');

window.addEventListener("scroll", _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity : 0,
            dispaly : "none"
        });
    } else {
        gsap.to(badgeEl, .6, {
            opacity : 1,
            dispaly : "block"
        });
    }
}, 300) )



const fadeEls = querySelectorAll('.visual .fade-in');

