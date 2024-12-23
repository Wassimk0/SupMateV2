// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



import Alpine from "alpinejs";
import { createIcons, icons } from "lucide";
import SimpleBar from "simplebar";
import Prism from "prismjs";
import initTheme from "./theme";
import "preline/dist/preline.js";

// Initialize Lucide icons
createIcons({ icons });
window.Alpine = Alpine;

window.SimpleBar = SimpleBar;
window.Prism = Prism;
window.isLoaded = false;
Alpine.data('sidebar', function () {
  return {
    init() {
      const currentPath = location.pathname === "/" ? "index.html" : location.pathname.substring(1);

      // Select all links
      const links = document.querySelectorAll('a[href*="' + currentPath + '"]');

      links.forEach((link) => {
        // Add 'active' class to the link
        link.classList.add('active');

        // Find the parent accordion
        const accordion = link.closest('.hs-accordion');

        if (accordion) {
          // Add 'active' class to the accordion to ensure it is open
          accordion.classList.add('active');
          const accordionList = accordion.children[1].childNodes
          accordionList.forEach((accordion) => {
          })
          const content = accordion.querySelector('.hs-accordion-content');
          if (content) {
            content.classList.remove('hidden');
          }
        }
      });
    }
  }
});

Alpine.data('loader', function () {
  return {
    showLoader: true,
    init() {
      const tm = setInterval(() => {
        if (window.isLoaded) {
          this.showLoader = false;
          clearInterval(tm);
        }
      }, 10);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  Alpine.start();
  Prism.highlightAll();
  setTimeout(() => {
    window.isLoaded = true;
  }, 100);
});
