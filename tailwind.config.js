/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'm-sans': ["DM Sans", 'sans-serif'],
    },

    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '38px',
      '6xl': '40px',
    },

    extend: {
      backgroundImage: {
        'top-image': "url('/src/assets/bg-cafe.jpg')",
        'vector-title': "url('/src/assets/vector.svg')",
      },

      colors: {
        'm-coffee-black': '#111315',
        'm-coffee': '#1B1D1F',
        'm-gray': '#6F757C',
        'm-green': '#BEE3CC', 
        'm-white': '#FEF7EE',
        'm-yellow': '#F6C768',
        'm-orange': '#ED735D',
      }
    },
  },
  plugins: [],
}