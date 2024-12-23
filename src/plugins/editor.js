// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({

        '.ql-snow':{
           ' @apply rounded-t-lg border-gray-200 dark:border-gray-600 focus:ring-0 focus:border-primary-500' : {}
        },
        '.ql-container.ql-snow':{
            '@apply rounded-b-lg !border-gray-200 dark:border-gray-600 focus:ring-0 focus:border-primary-500':{} 
        },
        '#editor':{
           ' @apply dark:bg-gray-800':{}
        },
        '.ql-editor.ql-blank::before':{
            '@apply text-gray-900 dark:text-gray-400' :{}
        }

    })
})