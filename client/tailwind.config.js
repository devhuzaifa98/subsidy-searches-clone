/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors,
            ...{
                primary: {
                    50: '#fffaeb',
                    100: '#fff1c6',
                    200: '#ffe188',
                    300: '#ffcf56',
                    400: '#ffb620',
                    500: '#f99307',
                    600: '#dd6c02',
                    700: '#b74a06',
                    800: '#94380c',
                    900: '#7a300d',
                    950: '#461702',
                },
                secondary: '#454545',
                light: '#d0d0d0',
                dark: '#2c2c2c',
                bronze: '#CD7F32',
                gold: '#FFD700',
                silver: '#C0C0C0',
                error: 'rgb(255, 0, 0)',
                red: '#EF233C',
            },
        },
        extend: {
            keyframes: {
                fadein: {
                    '0%': { top: '-1rem', opacity: 0 },
                    '100%': { top: '-0.5rem', opacity: 1 },
                },
                fadeinLeft: {
                    '0%': { top: '-1rem', opacity: 0 },
                    '100%': { top: '-0.5rem', opacity: 1 },
                },
            },
            animation: {
                fadein: 'fadein 300ms ease-in-out',
                fadeinLeft: 'fadeinLeft 300ms ease-in-out',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
