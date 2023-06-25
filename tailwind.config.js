/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    plugins: [],
    screens: {
      'md': '850px',
      'lg': '1120px'
    },
  }
}