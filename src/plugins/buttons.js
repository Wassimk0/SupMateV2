// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
    const colors = theme('colors');

    const buttonVariants = {
        '.btn': {
            '@apply inline-block px-[14px] py-[6px] rounded-[10px] text-6 font-medium text-center transition duration-200 ease-in-out border border-transparent disabled:pointer-events-none': {}
        },
        '.btn-sm': {
            '@apply px-4 py-1 text-6': {}
        },
        '.btn-lg': {
            '@apply px-4 py-3 text-6 h-12': {}
        },
        '.btn-text-icon': {
            '@apply inline-flex items-center gap-2': {}
        },
        '.btn-soft': {
            '@apply inline-block px-4 py-2 rounded-md text-sm text-center bg-opacity-25': {}
        },
        '.btn-3d': {
            '@apply inline-block px-4 py-2 rounded-md text-sm text-center shadow': {}
        },
    };

    Object.keys(colors).forEach(color => {
        const colorValue = colors[color];

        // Regular button variant
        buttonVariants[`.btn-${color}`] = {
            [`@apply bg-${color}-500 text-white hover:bg-${color}-600 focus:bg-${color}-600`]: {},
        }; 

        // Outline button variant
        buttonVariants[`.btn-outline-${color}`] = {
            [`@apply border border-${color}-400 text-${color}-500 hover:border-${color}-500 hover:bg-${color}-50 hover:bg-opacity-50 dark:hover:bg-opacity-10 focus:border-${color}-500 focus:bg-${color}-50`]: {},
        };

        // text button variant
        buttonVariants[`.btn-text-${color}`] = {
            [`@apply text-${color}-500 hover:bg-${color}-500/5 focus:bg-${color}-500/5`]: {},
        };

        // Regular button variant
        buttonVariants[`.btn-${color}-icon-hover`] = {
            [`@apply text-current text-${color}-500 hover:bg-${color}-500/5 flex items-center justify-center cursor-pointer rounded-full text-xl font-normal transition duration-200 ease-in-out`]: {},
        };

        // btn-float
        buttonVariants[`.btn-float-${color}`] = {
            [`@apply bg-${color}-500 hover:bg-${color}-700`]: {},
        };

        // btn-group
        buttonVariants[`.btn-group-${color}`] = {
            [`@apply text-sm font-medium bg-${color}-500 text-white border-${color}-600 hover:bg-${color}-700`]: {},
        };

        // btn-group-outline
        buttonVariants[`.btn-group-outline-${color}`] = {
            [`@apply text-sm font-medium text-${color}-500 border-${color}-500/50 hover:bg-${color}-500/5 dark:border-${color}-500/50 hover:dark:border-${color}-500`]: {},
        };

        buttonVariants[`.btn-soft-${color}`] = {
            backgroundColor: colorValue[100],
            color: colorValue[500],
            '&:hover, &:focus': {
                backgroundColor: colorValue[200],
                color: colorValue[600],
            },
        };

        buttonVariants[`.btn-3d-${color}`] = {
            backgroundColor: colorValue[500],
            color: 'white',
            '&:hover, &:focus': {
                backgroundColor: colorValue[600],
                boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)`,
            },
        };
    
    });

    addComponents(buttonVariants);
});
