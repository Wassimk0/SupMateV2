import{S as e}from"./swiper-core.js";import{l as i}from"./utils.js";const t="static/vite/assets/css/swiper-core.css";document.addEventListener("DOMContentLoaded",function(){i(t).then(()=>{console.log("Swiper CSS loaded")}).catch(s=>{console.error("Error loading Swiper CSS",s)}),new e(".teamSwiper",{slidesPerView:1,pagination:{el:".swiper-pagination"},breakpoints:{557:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:40}}}),new e(".testSwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});