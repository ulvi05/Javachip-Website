/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        blueOutline:
          "1px 1px 0 #3bbeef, -1px -1px 0 #3bbeef, 1px -1px 0 #3bbeef, -1px 1px 0 #3bbeef, 1px 1px 0 #3bbeef",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "100%",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out forwards",
        slideOut: "slideOut 0.3s ease-in-out forwards",
        slideRight: "slideRight 0.3s ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { right: "-500%" },
          "100%": { right: "0" },
        },
        slideOut: {
          "0%": { right: "0" },
          "100%": { right: "-500%" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(0.5em)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
