/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#1E1E1E",
      primary: "#F976AC",
      secondary: "#FEE0E0",
      blue: "#0099FF",
      white: "#FFF7F5",
      red: "#DC143C"
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

