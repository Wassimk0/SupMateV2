// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { linkCss } from './common/utils';
const swiperCssPath = import.meta.env.VITE_SRC + import.meta.env.VITE_BUILD + import.meta.env.VITE_BUILD_ASSETS + 'css/swiper-core.css';

document.addEventListener('DOMContentLoaded', function () {
    linkCss(swiperCssPath).then(() => {
        console.log('Swiper CSS loaded');
    }).catch((error) => {
        console.error('Error loading Swiper CSS', error);
    });
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        direction: 'vertical',
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    const gallerySlider = new Swiper('.gallery-slider', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});