/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: '#45765f',
                darkColor: '#2b2b2b',
                lightColor: '#cdcdcd'
            }
        },
    },
    plugins: [],
}

