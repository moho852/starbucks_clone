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



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach( function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity : 1
    });
});

new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
});

new Swiper(".promotion .swiper-container", {
    slidesPerView : 3,
    spaceBetween: 10,
    centeredSlides :true,
    loop : true,
    autoplay : {
        delay : 5000
    },
    pagination: {
        el : ".promotion .swiper-pagination",
        clickable : true,
    },
    navigator: {
        prevEl: ".promotion .swiper-prev",
        nextEl: ".promotion .swiper-next",
    }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat : -1,
        yoyo : true,
        ease : Power1.easeInOut,
        delay: random(0, delay)
    })
}

floatObject(".floating1", 1, 15);
floatObject(".floating2", .5, 15);
floatObject(".floating3", 1.5, 20);

const spyEls = querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement :spyEl,
        triggerHook: 0,
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());

});

new Swiper('.awards .swiper-container', {
    direction : "horizontal",
    autoplay : true,
    loop : true,
    spaceBetween: 30,
    slidesPerView : 5
})