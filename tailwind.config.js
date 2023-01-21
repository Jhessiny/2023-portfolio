/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "Arial", "sans-serif"],
      },
      maxWidth: {
        largeDesktop: "1200px",
        ultraLargeDesktop: "1800px",
      },
      width: {},
      colors: {
        primary: { main: "#e491ae", dark: "#a91980", light: "#e8dbe2" },
        secondary: { main: "#799166", dark: "#0d3725", light: "#c2c99f" },
        backdrop: "rgba(0,0,0,0.30)",
        tertiary: "#0d3725",
        text: {
          dark: "#42404b",
        },
      },
    },
    animation: {
      "bounce-finite": "quickBounce 1.5s cubic-bezier(0,2.01,.71,.42)",
      "re-appear": "appear 2s",
      appearSlideRight: "appearSlideToRight 2.5s",
      appearSlideToLeft: "appearSlideToLeft 2.5s",
    },
    keyframes: {
      quickBounce: {
        "0%": {
          transform: "translateX(200%)",
        },
        "100%": {
          transform: "translateX(100%)",
        },
      },
      appear: {
        "0%, 75%": {
          opacity: "0",
        },

        "100%": {
          opacity: "1",
        },
      },
      appearSlideToRight: {
        "0%, 67%": {
          opacity: "0",
          transform: "translateX(-30%)",
        },

        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      appearSlideToLeft: {
        "0%, 67%": {
          opacity: "0",
          transform: "translateX(30%)",
        },

        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
    },
  },
  plugins: [],
};
