/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],

  daisyui: {
    theme: ["dark"],
  },

  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}