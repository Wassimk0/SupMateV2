const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        // "node_modules/preline/dist/*.js",
        "./templates/**/*.html",
        "./src/assets/libs/**",
        'node_modules/preline/dist/**/*.js',
        'node_modules/simplebar/dist/**/*.js',
        'node_modules/flatpickr/dist/**/*.js',
        'node_modules/swiper/**/*.js',
        'node_modules/quill/dist/**/*.js',
        'node_modules/apexcharts/dist/**/*.js',
        'node_modules/nouislider/dist/**/*.js',
        'node_modules/datatables.net-dt/js/*.js',
    ],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        fontFamily: {
            'body': ['"Inter", sans-serif'],
            'remix': ['remixicon'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '1.5rem',
                lg: '1.5rem',
                xl: '1.5rem',
            },
            screens: {
                'sm': '100%',
                'md': '100%',
                'lg': '1024px',
                'xl': '1200px',
            }
        },
       
        extend: {
            backgroundImage : {
                'modal': 'linear-gradient(360deg, rgba(75, 85, 99, 0.8) 0%, rgba(55, 65, 81, 0.4) 100%)',
            },
            animation: {
                'progress': 'progress 2s infinite linear',
            },
            keyframes: {
                progress: {
                    '0%': { transform: ' translateX(0) scaleX(0)' },
                    '40%': { transform: 'translateX(0) scaleX(0.4)' },
                    '100%': { transform: 'translateX(100%) scaleX(0.5)' },
                },
            },
            transformOrigin: {
                'left-right': '0% 50%',
            },
            fontSize: {
                11: "0.6875rem",
                13: "0.8125rem",
                base: '0.875rem',
                15: "0.9375rem",
                16: '1rem',
                17: '1.0625rem',
            },
            spacing: {
                sidebar: '17.5rem',
            },
            boxShadow: {
                'shadow-xs': 'rgba(0, 0, 0, 0.04) 0px 5px 22px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
                'card': '0px 2px 5px -1px rgba(107, 114, 128, 0.03), 0px 4px 10px rgba(107, 114, 128, 0.04), 0px 1px 22px rgba(107, 114, 128, 0.08)',
                'drop-down': '0px 8px 20px -5px rgba(107, 114, 128, 0.03), 0px 16px 24px 2px rgba(107, 114, 128, 0.04), 0px 6px 30px 5px rgba(107, 114, 128, 0.08)',
                'dark-drop-down': '0px 11px 30px -7px rgba(107, 114, 128, 0.03), 0px 24px 38px 3px rgba(107, 114, 128, 0.04), 0px 9px 46px 8px rgba(107, 114, 128, 0.08)',
                'dialog': '0px 11px 30px -7px rgba(107, 114, 128, 0.03), 0px 24px 38px 3px rgba(107, 114, 128, 0.04), 0px 9px 46px 8px rgba(107, 114, 128, 0.08)',
                'primary': '1px 5px 10px rgba(105, 80, 232, 0.3)',
                'z1': '0px 4px 4px rgba(107, 114, 128, 0.03), 0px 2px 1px -1px rgba(107, 114, 128, 0.03), 0px 1px 3px rgba(107, 114, 128, 0.04)',
                'z8': '0px 5px 10px -3px rgba(107, 114, 128, 0.03), 0px 8px 18px 1px rgba(107, 114, 128, 0.04), 0px 3px 33px 2px rgba(107, 114, 128, 0.08)',
                'z12': '0px 7px 16px -4px rgba(107, 114, 128, 0.03), 0px 12px 17px 2px rgba(107, 114, 128, 0.04), 0px 5px 22px 4px rgba(107, 114, 128, 0.08)',
                'z20': '0px 10px 26px -6px rgba(107, 114, 128, 0.03), 0px 20px 31px 3px rgba(107, 114, 128, 0.04), 0px 8px 38px 7px rgba(107, 114, 128, 0.08)',
                'tooltip': '0px 2px 13px rgba(0, 0, 0, 0.15)',
                'table': 'rgba(107, 114, 128, 0.03) 0px 3px 3px -2px, rgba(107, 114, 128, 0.04) 0px 2px 6px 0px, rgba(107, 114, 128, 0.08) 0px 1px 12px 0px',
            },
            colors: {
                body: '#fdfdff',
                'secondary': {
                    light: "#F4F4FF",
                    main: "#6b7280",
                    dark: "#0C53B7",
                    '25': "#eeeff0",
                    '50': "#eeeff0",
                    '100': "#dddee0",
                    '200': "#ccced1",
                    '300': "#bcbec2",
                    '400': "#acafb4",
                    '500': "#9ca0a5",
                    '600': "#8c9097",
                    '700': "#7d8289",
                    '800': "#6e737b",
                    '900': "#5f656e",
                },
                'primary': {
                    15:'#443c8f',
                    25: "#F7F5FE",
                    50: "#F4F1FE",
                    100: "#E4DCFD",
                    200: "#C8BAFC",
                    300: "#A996F8",
                    400: "#907AF1",
                    500: "#6950E8",
                    600: "#592BE7",
                    700: "#4317CA",
                    800: "#33129C",
                    900: "#240C6E",
                    main: "#6950E8",
                },
                'success': {
                    25: "#F1FEF5",
                    50: "#E3FDEB",
                    100: "#CDFBDB",
                    200: "#9DF7C2",
                    300: "#6AE9AA",
                    400: "#43D49A",
                    500: "#11b886",
                    600: "#0C9E80",
                    700: "#088477",
                    800: "#056A6A",
                    900: "#035058",
                    main: "#11b886",
                },
                'warning': {
                    25: "#FFFCF5",
                    50: "#fefbf2",
                    100: "#FFF8E6",
                    200: "#FFEBB3",
                    300: "#FEDE80",
                    400: "#FED14D",
                    500: "#FEBF06",
                    600: "#DB7E24",
                    700: "#B75F19",
                    800: "#93440F",
                    900: "#7A3109",
                    main: "#FEBF06",
                },
                'red':{
                    100: "#EF4770",
                },
                'error': {
                    25: "#FEF6F8",
                    50: "#FEF1F4",
                    100: "#FDE8ED",
                    200: "#FBD5DE",
                    300: "#F7A6BA",
                    400: "#F37795",
                    500: "#EF4770",
                    600: "#EB194C",
                    700: "#C0113C",
                    800: "#910D2D",
                    900: "#63091F",
                    main: "#EF4770",
                },
                'gray': {
                    25: "#F9FAFB",
                    50: "#F6F7F8",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827",
                    main: "#F1F5F9",
                },
                'info': {
                    light: "#F4F4FF",
                    main: "#8C8DFF",
                    dark: "#0C53B7",
                    25: "#f1f5f9",
                    50: "#ebecf4",
                    100: "#d7d9ea",
                    200: "#c4c7df",
                    300: "#b1b5d4",
                    400: "#9ea2c9",
                    500: "#8C8DFF",
                    600: "#7a7fb3",
                    700: "#696ea8",
                    800: "#595c9c",
                    900: "#494b91",
                },
                'dark': {
                    light: "#9ca3af",
                    main: "#8C8DFF",
                    dark: "#0C53B7",
                    15: "#9ca1af",
                    25: "#f1f5f9",
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#e2e8f0",
                    400: "#94a3b8",
                    500: "#334155",
                    600: "#475569",
                    700: "#020617",
                    800: "#1e293b",
                    900: "#0f172a",
                },
            },
            zIndex: {
                'drawer': '1050',
                'topbar': '5001',
                'sidebar': '1002',
                'toast': '1055',
            },
        },
    },
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),

        require('./plugins/headings'),
        require('./plugins/buttons'),
        require('./plugins/editor'),
        require('./plugins/tables'),
        require('./plugins/alert'),
        require('./plugins/simplebar'),
        require('./plugins/layouts/sidebar'),
        require('./plugins/chip'),
        require('./plugins/flatpicker'),
        require('./plugins/slider'),
        require('./plugins/apexchart'),
    ]
}