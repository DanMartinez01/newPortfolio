const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light colors
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        // Dark colors
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",

        // Extended v3 color
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      boxShadow: {
        // neon: "0 0 10px #00a1ff, 0 0 20px #00a1ff, 0 0 30px #00a1ff, 0 0 40px #00a1ff, 0 0 50px #00a1ff",
        neon: "0px 0px 60px 10px rgba(46,213,255,0.6)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
