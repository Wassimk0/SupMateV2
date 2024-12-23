// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.menu-title': {
            '@apply text-xs leading-[18px] uppercase mb-2.5 ml-[15px] mt-5 text-gray-900 font-semibold dark:text-white': {},
        },
        '.menu-link': {
            '@apply h-11 flex items-center relative mb-1 px-[18px] text-gray-500 dark:text-gray-400 transition duration-300 ease-linear hover:text-primary-500 hover:bg-gray-900 bg-opacity-[0.04] hover:bg-opacity-[0.04] dark:hover:bg-gray-100/5 rounded-full [&.active]:text-primary-500 [&.active]:bg-primary-25 dark:[&.active]:bg-gray-800': {},
            'span' : {
                '@apply text-sm font-medium whitespace-nowrap leading-[17px] ps-[0.8rem]': {},
            },
            'svg': {
                '@apply inline-block text-lg fill-current size-[18px] min-w-[18px]': {},
            }
        },
        '.hs-accordion .hs-accordion-toggle.menu-link': {
            '@apply leading-[48px] h-12 pl-[19px] pe-3': {},
        },
        '[aria-disabled="true"]': {
            '@apply opacity-60 pointer-events-none': {},
        },
        '.mini-sidebar': {
            '@apply !w-[85px]': {},
            '.menu-title': {
                '@apply invisible': {},
            },
            '.menu-link span': {
                '@apply hidden': {},    
            },
            '.ri-arrow-right-s-line': {
                '@apply hidden': {},
            },
            '.close-sidebar': {
                '@apply hidden': {},
            },
            '&:hover': {
                '@apply !w-sidebar': {},
                '.menu-title': {
                    '@apply visible': {},
                },
                '.menu-link span': {
                    '@apply inline-block': {},
                },
                '.ri-arrow-right-s-line': {
                    '@apply block': {},
                },
                '.close-sidebar': {
                    '@apply xl:block': {},
                },
            },
        },
    })
})