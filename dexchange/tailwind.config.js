/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif'],
      'poppins': ['Poppins ', 'sans-serif'],
    },
    ripple: theme => ({
        colors: theme('colors')
    }),
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],

}
