/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        afacad: ['"Afacad Flux"', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#2b2b2b',
        'lighter-gray': '#505264',
        'light-gray': '#F7F7F7',
      }
    },
  },
  plugins: [],
}
