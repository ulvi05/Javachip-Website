/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        blueOutline:
          "1px 1px 0 #3bbeef, -1px -1px 0 #3bbeef, 1px -1px 0 #3bbeef, -1px 1px 0 #3bbeef, 1px 1px 0 #3bbeef",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(42.36% 42.36% at 50% 50%, rgba(21,153,57,0.2) 0%, rgba(0,0,0,0.2) 100%)",
        "custom-radial-dark":
          "radial-gradient(42.36% 42.36% at 50% 50%, rgba(21,153,57,0) 0%, hsla(0,0%,100%,.54) 100%)",
        "custom-radial2":
          "radial-gradient(42.36% 42.36% at 50% 50%, rgba(21,153,57,0.48) 0%, rgba(255,255,255,0.54) 100%)",
        "custom-radial2-dark":
          "radial-gradient(42.36% 42.36% at 50% 50%, rgba(21,153,57,0.8) 0%, rgba(255,255,255,0.2) 100%)",
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
        slideDownFade: "slideDownFade 0.6s ease-out",
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
        slideDownFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
