/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./dev.js",
            ".**/*.{html,js}"],
  theme: {
    fontFamily: {
      "primary" : ["Lexend", "sans-serif"]
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}

