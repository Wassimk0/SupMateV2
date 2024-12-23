// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        'table': {
            '@apply w-full': {},

            ':is(thead, tbody, tfoot)': {
                'tr': {
                    ':is(th, td)': {
                        '@apply text-sm p-4 text-start dark:text-white whitespace-nowrap': {},
                    }
                },
            },
            'thead': {
                '@apply font-semibold border-black bg-gray-100 dark:bg-gray-700 text-gray-900': {},
                'th' : {
                    '@apply font-semibold': {},
                },
            },
            'tbody': {
                'tr': {
                    '@apply text-gray-500': {},
                },
            },
            '&.inner-table': {
                'thead': {
                    '@apply bg-transparent': {},
                },
            },
            '&.dataTable': {
                'thead th': {
                    '@apply dark:text-white': {},
                },
            },
        },
        '.table-bordered': {
            'thead': {
                '@apply bg-transparent': {},
                'th' : {
                    '@apply font-medium text-gray-500 dark:text-gray-200 p-0 pb-4 leading-6': {},
                }
            },
            'tbody': {
                'tr': {
                    '@apply border-t border-dashed border-gray-200 dark:border-gray-700': {},
                    'td' : {
                    '@apply px-0': {},
                }
                },
            },
        },
    });
});
