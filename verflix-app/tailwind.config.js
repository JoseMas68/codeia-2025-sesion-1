/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E50914',
          light: '#FF1A1A',
          dark: '#B81D13',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
