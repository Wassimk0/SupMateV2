// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    const colors = theme('colors');

    const buttonVariants = {
        '.chip': {
            '@apply cursor-pointer py-[7px] px-3 rounded-full leading-4 text-13 font-medium border border-transparent transition duration-200 ease-in-out': {}
        },
        '.chip-sm': {
            '@apply py-[5px] px-2 leading-3 text-13 font-medium': {}
        },
    };

    Object.keys(colors).forEach(color => {
        const colorValue = colors[color];

        // Regular button variant
        buttonVariants[`.chip-${color}`] = {
            [`@apply bg-${color}-500 text-white`]: {},
        };

        // Outline button variant
        buttonVariants[`.chip-outline-${color}`] = {
            [`@apply text-${color}-500 border-${color}-500`]: {},
        };
        
        // Outline button variant
        buttonVariants[`.chip-outline-${color}`] = {
            [`@apply text-${color}-500 border-${color}-500`]: {},
        };

    });

    addComponents(buttonVariants);
});
