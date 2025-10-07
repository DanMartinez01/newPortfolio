const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // New sophisticated dark theme colors
        "primary-dark": "#0a0a0a", // Deep black
        "secondary-dark": "#1a1a1a", // Charcoal
        "ternary-dark": "#2a2a2a", // Dark grey
        "accent-dark": "#1f3a1f", // Dark green
        "accent-light": "#2d5a2d", // Medium green
        "accent-bright": "#4a7c4a", // Bright green
        "text-primary": "#ffffff", // Pure white
        "text-secondary": "#e5e5e5", // Light grey
        "text-muted": "#a0a0a0", // Muted grey
        "border-dark": "#333333", // Border grey
        "hover-dark": "#404040", // Hover state

        // Light colors (keeping for light mode support)
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

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
        // New dark theme shadows
        "dark-glow": "0 0 20px rgba(45, 90, 45, 0.3)",
        "dark-hover": "0 4px 20px rgba(0, 0, 0, 0.4)",
        "dark-card": "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        // New dark gradients
        "dark-gradient": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "accent-gradient": "linear-gradient(135deg, #1f3a1f 0%, #2d5a2d 100%)",
        "subtle-gradient": "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
