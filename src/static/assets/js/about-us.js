// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { linkCss } from './common/utils';
const swiperCssPath = import.meta.env.VITE_SRC + import.meta.env.VITE_BUILD + import.meta.env.VITE_BUILD_ASSETS + 'css/swiper-core.css';
//about swiper
document.addEventListener('DOMContentLoaded', function () {
  
  linkCss(swiperCssPath).then(() => {
    console.log('Swiper CSS loaded');
  }).catch((error) => {
    console.error('Error loading Swiper CSS', error);
  });

  var swiper = new Swiper('.teamSwiper', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    // Optional parameters
    breakpoints: {
      // when window width is >= 320px
      557: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    }
  });
  //
  var swiper = new Swiper(".testSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})

