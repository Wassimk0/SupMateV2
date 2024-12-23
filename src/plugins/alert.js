// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    const colors = theme('colors');

    const buttonVariants = {
        '.alert': {
            '@apply rounded-2xl text-7 font-semibold px-4 py-2 border border-transparent transition duration-200 ease-in-out flex items-center justify-between gap-2 flex-wrap': {}
        },
        '.alert-close': {
            '@apply hover:bg-gray-900 size-[30px] rounded-full hover:bg-opacity-5 text-xl font-normal transition duration-200 ease-in-out': {}
        },
        'alert-warning' : {
            '@apply bg-[#19160c] dark:!bg-[#19160c]' : {}
        }
    };

    Object.keys(colors).forEach(color => {
        const colorValue = colors[color];

        // Regular button variant
        buttonVariants[`.alert-${color}`] = {
            [`@apply bg-${color}-50 text-${color}-500`]: {},
        };

        // Outline button variant
        buttonVariants[`.alert-outline-${color}`] = {
            [`@apply bg-${color}-50 text-${color}-500 border-${color}-500`]: {},
        };

        // Outline button variant
        buttonVariants[`.alert-fill-${color}`] = {
            [`@apply bg-${color}-500 text-white border-${color}-500`]: {},
        };
    });

    addComponents(buttonVariants);
});
