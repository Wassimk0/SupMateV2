// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.simplebar-scrollbar' :{
            '@apply before:!bg-zinc-300 dark:before:!bg-gray-700': {},
        },
        '[data-simplebar-track="primary"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-primary-500': {},
            }
        },
        '[data-simplebar-track="green"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-green-500': {},
            }
        },
        '[data-simplebar-track="yellow"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-yellow-500': {},
            }
        },
        '[data-simplebar-track="orange"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-orange-500': {},
            }
        },
        '[data-simplebar-track="sky"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-sky-500': {},
            }
        },
        '[data-simplebar-track="red"]': {
            '.simplebar-scrollbar:before': {
                '@apply bg-red-500': {},
            }
        }
    })
})