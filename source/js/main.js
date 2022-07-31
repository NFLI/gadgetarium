// Mobile Navigation

let mainNav = document.querySelector(".main-nav");
let navToggle = mainNav.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", () => {
mainNav.classList.toggle("main-nav--opened");
document.body.classList.toggle("scroll-hidden");
});

window.addEventListener("resize", function() {
if(document.body.clientWidth >= 1230 && mainNav.classList.contains("main-nav--opened")) {
  mainNav.classList.remove("main-nav--opened");
  document.body.classList.remove("scroll-hidden");
}
});

// Offer Slider

window.addEventListener("load", () => {
  autoSlide();
})

function autoSlide() {
  const autoplay = setInterval(() => {
    slide(getItemActiveIndex() + 1);
  }, 2050);

  const bulletsArr = document.querySelectorAll(".offer__slider-bullet");
  bulletsArr.forEach(function (elem) {
    elem.addEventListener("click", function () {
      clearInterval(autoplay);
    })
  });
}

function slide(toIndex) {
  const controlsArray = Array.from(document.querySelectorAll(".offer__slider-button"));
  const controlActive = document.querySelector(".offer__slider-button:checked");

  if (toIndex >= controlsArray.length) {
    toIndex = 0;
  }

  const newControlActive = controlsArray[toIndex];
  controlActive.checked = false;
  newControlActive.checked = true;
}

function getItemActiveIndex() {
  const controlsArray = Array.from(document.querySelectorAll(".offer__slider-button"));
  const controlActive = document.querySelector(".offer__slider-button:checked");
  const controlActiveIndex = controlsArray.indexOf(controlActive);
  return controlActiveIndex;
}

// Arrivals Slider

let mixer = mixitup(".arrivals__products-wrapper", {
  selectors: {
    target: '.swiper-slide',
  },
  animation: {
    duration: 500,
  },
})

let mySwiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  centeredSlide: "true",
  fade: "true",
  grabCursor: "true",
  scrollbar: {
    el: ".arrivals__slider-scrollbar",
    dragClass: "arrivals__slider-drag",
    dragSize: 47,
  },
  breakpoints: {
    320: {
      slidesPerView: "auto"
    },

    768: {
      slidesPerView: "auto"
    },

    1230: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1316: {
      navigation: {
        prevEl: ".arrivals__slider-arrow--left",
        nextEl: ".arrivals__slider-arrow--right"
      },
    }
  }
});

// Promo Slider

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1230) {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.12,

      breakpoints: {
        320: {
          slidesPerView: 1.1,
        },
        350: {
          slidesPerView: 1.135,
        },
        768: {
          slidesPerView: 1.135,
        }
      }
    });
  }
})

// Scroll To Top Button

const scrollToTopBtn = document.querySelector(".page-footer__button-up");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
})

