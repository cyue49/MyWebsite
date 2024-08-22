/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: 'rgba(var(--primaryColor))',
                darkColor: 'rgba(var(--darkColor))',
                lightColor: 'rgba(var(--lightColor))'
            }
        },
        fontFamily: {
            'sans': 'Helvetica, Arial, sans-serif'
        }
    },
    plugins: [],
}

