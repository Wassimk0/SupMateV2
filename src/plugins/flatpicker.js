// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.flatpickr-day': {
            '@apply text-gray-900 dark:text-white flex items-center justify-center size-9 max-w-9 text-xs leading-[19px] border-none mx-0.5': {},

            '&.today': {
                '@apply border-gray-200 dark:border-gray-900': {},
            },
            '&:is(.inRange, .prevMonthDay.inRange, .nextMonthDay.inRange, .today.inRange, .prevMonthDay.today.inRange, .nextMonthDay.today.inRange, :hover, .prevMonthDay:hover, .nextMonthDay:hover, :focus, .prevMonthDay:focus, .nextMonthDay:focus)': {
                '@apply bg-gray-100 border-gray-100 outline-none dark:border-gray-900 dark:bg-gray-200 dark:hover:bg-gray-100/5': {},
            },
            '&.inRange': {
                '@apply text-gray-800': {},
            },
            '&:is(.selected, .startRange, .endRange, .selected.inRange, .startRange.inRange, .endRange.inRange, .selected:focus, .startRange:focus, .endRange:focus, .selected:hover, .startRange:hover, .endRange:hover, .selected.prevMonthDay, .startRange.prevMonthDay, .endRange.prevMonthDay, .selected.nextMonthDay, .startRange.nextMonthDay, .endRange.nextMonthDay)': {
                '@apply !bg-primary-500 !border-primary-500': {},
            },
            '&:is(.flatpickr-disabled, .flatpickr-disabled:hover, .prevMonthDay, .nextMonthDay, .notAllowed, .notAllowed.prevMonthDay, .notAllowed.nextMonthDay)': {
                '@apply text-gray-300': {},
            },
            '&:is(.today:hover, .today:focus)': {
                '@apply text-gray-500 dark:text-white/50': {},
            },
            '&.selected, &.today': {
                '@apply !bg-primary-500 text-white hover:text-white': {},
            },
        },
        '.flatpickr-days': {
            '@apply dark:bg-gray-800 dark:shadow-none w-[320px]': {},
        },
        '.flatpickr-weekdays': {
            '@apply !h-auto': {},
        },
        '.flatpickr-calendar': {
            '@apply dark:bg-gray-800 dark:border overflow-hidden dark:!border-gray-600 shadow-table rounded-lg w-[320px]': {},
            '&:before.arrowTop, &:after.arrowTop': {
                '@apply dark:border-b-transparent': {},
            },
        },
        '.flatpickr-months .flatpickr-month, .flatpickr-months .flatpickr-prev-month, .flatpickr-months .flatpickr-next-month': {
            '@apply dark:text-white dark:fill-white/50': {},
        },
        'span.flatpickr-weekday': {
            '@apply text-gray-500 dark:text-gray-400 font-normal flex items-center justify-center w-9 h-10 max-w-9 text-xs leading-[19px] border-none mx-0.5': {},
        },
        '.flatpickr-months': {
            '@apply mt-4 mb-2 ps-6 pe-3 relative': {},
            '&:is(.flatpickr-prev-month:hover, .flatpickr-next-month:hover)': {
                '@apply text-gray-500': {},
                'svg': {
                    '@apply text-error-500': {},
                }
            }
        }
    })
})