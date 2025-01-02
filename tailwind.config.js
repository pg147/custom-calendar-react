/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F92E43",
        tile: "#F8F8F8"
      },
      fontFamily: {
        custom: ['DM Sans', 'sans serif']
      }
    },
  },
  plugins: [],
}

