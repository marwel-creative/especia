import Swiper from 'swiper-bundle.min.js';

const SLider = {
    init: () => {
        SLider.scroll();
    },
    scroll: () => {
        const slider = document.querySelector('.slider-collection');

        if (slider) {
            const swiper = new Swiper('.slider-collection', {
                loop: false,
                spaceBetween: 30,
                resistance: true,
                resistanceRatio: 0,
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    480: {
                        width: 300,
                        spaceBetween: 25
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        }
    }
};

SLider.init();