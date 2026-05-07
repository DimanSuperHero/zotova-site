/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#e8b4b8',
        'accent-deep': '#b97a7e',
        gold: '#d4a574',
        bg: '#1c1518',
        ink: '#f5ebe6',
        soft: '#3a2a2d',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
