/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: '#2C302E',
        dark: '#474A48',
        'gray-green': '#909590',
        'light-mint': '#9AE19D',
        'medium-green': '#537A5A',
        'med-light-green': '#638669',
        'light-gray-green': '#719177',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
