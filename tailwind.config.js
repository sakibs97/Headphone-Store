/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#5a4d94",
        darkFor: "#141414",
      },
      fontFamily:{
        'pop': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"15px",
          sm: "30px",
          lg: "60px",
          xl: "75px",
          "2xl": "96px",
        }
      }
    },
  },
  plugins: [],
}