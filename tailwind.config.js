/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F5A623',      // Yellow-orange from the logo
        gearGray: '#E5E5E5',     // Gear white
        textGray: '#D1D5DB',     // Soft gray text
        darkBg: '#0F1111',       // Logo background dark
      },
    },
  },
  plugins: [],
}
