// Template Name: QuickFrame - Admin & Dashboard Template
// Author: SRBThemes
// Version: 1.0.0



const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.apex-charts': {
            // minHeight: 'auto !important',

            'text': {
                '@apply !font-body dark:fill-gray-50': {},
            },

            '.apexcharts-canvas': {
                '@apply my-0 mx-auto z-10': {},

                '.apexcharts-legend .apexcharts-legend-marker': {
                    '@apply rounded-full': {}
                },
            },

        },
        '.apexcharts-svg.apexcharts-zoomable': {
            '@apply !bg-transparent': {}
        },
        '.apexcharts-canvas': {
            '::-webkit-scrollbar-thumb': {
                '@apply bg-slate-600 shadow-md dark:bg-gray-600': {}
            },

            ':is(.apexcharts-reset-zoom-icon, .apexcharts-selection-icon, .apexcharts-zoom-icon)': {
                '&.apexcharts-selected': {
                    'svg': {
                        '@apply fill-primary-500': {}
                    }
                }
            },

            'text.apexcharts-title-text, .apexcharts-subtitle-text': {
                '@apply !fill-slate-800 !font-medium !font-body dark:!fill-gray-100': {},
            },
        },

        '.apexcharts-gridline': {
            '@apply stroke-gray-200 dark:stroke-gray-700': {}
        },

        '.apexcharts-yaxis text': {
            '@apply fill-gray-500 !font-body dark:fill-gray-400 text-[11px]': {}
        },

        '.apexcharts-xaxis text': {
            '@apply fill-gray-500 !font-body dark:fill-gray-400 text-xs': {}
        },

        '.apexcharts-heatmap-series rect, .apexcharts-treemap-series rect': {
            '@apply stroke-white dark:stroke-gray-700': {}
        },

        '.apexcharts-xaxis-tick': {
            '@apply stroke-slate-200 dark:stroke-gray-700': {}
        },
        '.apexcharts-marker': {
            '@apply stroke-white dark:stroke-gray-700': {}
        },

        '.apexcharts-tooltip': {
            '@apply shadow-table !rounded-lg': {},

            '&.apexcharts-theme-light': {
                '@apply !border-none rounded-lg bg-white/90 dark:bg-gray-800 dark:border-gray-700/40': {},

                '.apexcharts-tooltip-title': {
                    '@apply !border-b-slate-200 !bg-white !font-body dark:!border-b-gray-700/40 dark:!bg-gray-800': {},
                }
            }
        },

        '.apexcharts-tooltip-title': {
            '@apply !font-body': {},
        },

        '.apexcharts-heatmap-series, .apexcharts-treemap-series': {
            'rect': {
                '@apply stroke-white': {}
            }
        },

        '.apexcharts-pie-series, .apexcharts-bar-series': {
            'path': {
                '@apply stroke-white': {}
            }
        },

        '.apexcharts-boxPlot-series': {
            'path': {
                '@apply stroke-slate-200': {},
            }
        },

        '.apexcharts-datalabels-group': {
            '.apexcharts-datalabel-label': {
                '@apply fill-gray-500 dark:fill-gray-400 font-medium text-sm !font-body': {}
            },
            '.apexcharts-datalabel-value': {
                '@apply fill-gray-900 dark:fill-white font-bold text-2xl !font-body leading-none': {}
            },
        },

        '#weeklyTask .apexcharts-datalabels-group': {
            '.apexcharts-datalabel-value': {
                '@apply !fill-primary-500 dark:fill-white font-medium text-sm': {}
            },
        },

        '#outcome_chart .apexcharts-datalabels-group': {
            '.apexcharts-datalabel-value': {
                '@apply !fill-gray-500 dark:fill-white font-medium text-sm': {}
            },
        },
        

        '.apexcharts-radialbar-track': {
            'path': {
                '@apply stroke-slate-100 dark:stroke-gray-600': {}
            }
        },

        '.apexcharts-radar-series': {
            'polygon, line': {
                '@apply stroke-slate-200 dark:stroke-gray-500': {}
            }
        },

        '.apexcharts-pie': {
            'circle, line': {
                '@apply stroke-slate-200 dark:stroke-gray-500': {},

                '&[fill="transparent"]': {
                    '@apply stroke-transparent': {}
                }
            },
        },
        '.apexcharts-xaxistooltip': {
            '&.apexcharts-theme-light': {
                '@apply shadow-md text-slate-800 dark:text-gray-50 bg-white border-slate-200 dark:border-gray-700/40 dark:bg-gray-700 !font-body': {},

                '&::before': {
                    '@apply border-b-slate-200 dark:border-b-gray-700/40': {}
                }
            }
        },
        '.apexcharts-grid-borders': {
            'line': {
                '@apply stroke-slate-200 dark:stroke-gray-500': {},
            }
        },
        '#dynamicloadedchart-wrap': {
            '@apply relative my-0 mx-auto max-w-4xl': {},
        },

        '.chart-box': {
            '@apply p-0': {}
        },
        ':is(#chart-year, #chart-quarter)': {
            '@apply stroke-slate-200 dark:stroke-gray-500 w-[96%] max-w-[48%] shadow-none pl-0 pt-5 bg-white border border-slate-200 dark:border-gray-500 dark:bg-gray-700 float-left relative': {},
            transition: '1s ease transform',
        },
        '#chart-year': {
            '@apply z-[3]': {},
            '&.chart-quarter-activated': {
                transform: 'translateX(0)',
                transition: '1s ease transform'
            }
        },

        '#chart-quarter': {
            '@apply z-[-2]': {},
            '&.active': {
                transition: '1.1s ease-in-out transform',
                transform: 'translateX(0)',
                '@apply z-[1]': {},
            }
        },

        '@media screen and (min-width: 480px)': {
            '#chart-year': {
                transform: 'translateX(50%)'
            },
            '#chart-quarter': {
                transform: 'translateX(-50%)'
            }
        },

        '.apexcharts-boxPlot-series path': {
            '@apply stroke-slate-200 dark:stroke-gray-500': {},
        },

        '.apexcharts-pie-series path, .apexcharts-bar-series path': {
            '@apply stroke-white dark:stroke-gray-700': {},
        },

        '.apexcharts-menu': {
            '@apply bg-white dark:bg-gray-600 border-slate-200 dark:border-gray-500': {},
            'apexcharts-menu-item:hover': {
                '@apply !bg-gray-500': {},
            }
        },

        '#totalProjectChart': {
            '.apexcharts-legend-series': {
                '@apply px-2 py-1 border rounded-sm border-slate-200 dark:border-gray-500': {},
            }
        },

        '.apexcharts-xcrosshairs, .apexcharts-ycrosshairs': {
            '@apply stroke-primary-500': {},
        },

        '#average_positions_chart .apexcharts-xcrosshairs, .apexcharts-ycrosshairs': {
            '@apply !stroke-success-500': {},
        },

        '#average_positions_chart .apexcharts-markers': {
            '@apply border-2 border-error-500 stroke-success-500': {},
        },

        '.apexcharts-bar': {
            '@apply transition-none': {},
        },

        '.apexcharts-bar, .apexcharts-bar-area': {
            '@apply transition-none': {},
        },

        '.apexcharts-bar:hover, .apexcharts-bar-area:hover': {
            '@apply filter-none shadow-none transform-none': {},
        },

        '#browser_session_chart .apexcharts-tooltip.apexcharts-theme-dark': {
            '@apply bg-transparent': {},
        },

        '#deal_type_chart .apexcharts-datalabel-value, #deal_type_chart .apexcharts-datalabel-label': {
            '@apply font-medium': {},
        },

        '.apexcharts-legend-text': {
            '@apply dark:!text-white !font-body': {},
        },

        '.last_month_shipment .apexcharts-yaxis text': {
            '@apply fill-white': {},
        },

    })
})