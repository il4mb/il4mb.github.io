/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "ops": ["Black Ops One", "cursive"],
        "notojp": ["Noto Sans JP", "sans-serif"],
      }
    },
  },
  plugins: [],
}

