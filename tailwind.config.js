/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['corporate'],
  },
  plugins: [require("daisyui")],
}
