// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';

var swiper = new Swiper(".scrollableSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        380: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        450: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 6,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 32
        }
    }
});