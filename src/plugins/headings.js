// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        'h1': { fontSize: theme('fontSize.5xl'), fontWeight: theme('fontWeight.medium'), lineHeight: '3.625rem' },
        'h2': { fontSize: '2.5rem', fontWeight: theme('fontWeight.medium'), lineHeight: '3rem' },
        'h3': { fontSize: theme('fontSize.4xl'), fontWeight: theme('fontWeight.medium'), lineHeight: '2.75rem' },
        'h4': { fontSize: '2rem', fontWeight: theme('fontWeight.medium'), lineHeight: theme('lineHeight.10') },
        'h5': { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.medium') },
        'h6': { fontSize: '1.75rem', fontWeight: theme('fontWeight.medium'), lineHeight: theme('lineHeight.9') },
        '.text-1': {
            fontSize: theme('fontSize.2xl'),
            lineHeight: '1.8125rem',
        },
        '.text-2': {
            fontSize: '1.375rem',
            lineHeight: '1.6875rem',
        },
        '.text-3': {
            fontSize: theme('fontSize.xl'),
            lineHeight: theme('lineHeight.6'),
        },
        '.text-4': {
            fontSize: theme('fontSize.lg'),
            lineHeight: '1.5625rem',
        },
        '.text-5': {
            fontSize: '1rem',
            lineHeight: theme('lineHeight.6'),
        },
        '.text-6': {
            fontSize: theme('fontSize.sm'),
            lineHeight: theme('lineHeight.6'),
        },
        '.text-7': {
            fontSize: theme('fontSize.xs'),
            lineHeight: '0.9375rem',
        },
        '.text-8': {
            fontSize: '0.625rem',
            lineHeight: theme('lineHeight.3'),
        },
    })
})