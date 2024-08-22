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
                lightColor: 'rgba(var(--lightColor))',
                bgColor: 'rgba(var(--bgColor))'
            },
            boxShadow: {
                'custom-1': '0 20px 20px -10px rgba(0,0,0,0.3)',
                'custom-2': '0 20px 60px -15px rgba(0,0,0,0.3)'
            }
        },
        fontFamily: {
            'sans': 'Helvetica, Arial, sans-serif'
        }
    },
    plugins: [],
}

