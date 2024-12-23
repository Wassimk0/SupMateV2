// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.noUi-target': {
            '@apply !bg-primary-500 !shadow-none': {},

            'text': {
                '@apply !font-body dark:fill-gray-50': {},
                '@apply !font-body dark:fill-gray-50': {},
            },

            '.apexcharts-canvas': {
                '@apply my-0 mx-auto z-10': {},

                '.apexcharts-legend .apexcharts-legend-marker': {
                    '@apply rounded-full': {}
                },
            },

        },
        '.noUi-handle': {
            '@apply bg-error-500': {},
        }
    })
})