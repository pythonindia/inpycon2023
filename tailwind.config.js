/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura"]
      },
      colors: {
        'py-green': '#76cc77',
        'py-yellow': '#f7d56a'
      }
    },
  },
  plugins: [],
}