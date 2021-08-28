const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: colors.orange,
                amber: colors.amber,
            },
            blur: {
                xs: '2px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
